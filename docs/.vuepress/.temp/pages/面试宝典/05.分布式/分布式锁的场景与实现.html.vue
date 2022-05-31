<template><h1 id="分布式锁的场景与实现" tabindex="-1"><a class="header-anchor" href="#分布式锁的场景与实现" aria-hidden="true">#</a> 分布式锁的场景与实现</h1>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2>
<p>首先，我们看这样一个场景：客户下单的时候，我们调用库存中心进行减库存，那我们一般的操作都是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>update store set num = $num where id = $id
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这种通过设置库存的修改方式，我们知道在并发量高的时候会存在数据库的丢失更新，比如 a, b 当前两个事务，查询出来的库存都是 5，a 买了 3 个单子要把库存设置为 2，而 b 买了 1 个单子要把库存设置为 4，那这个时候就会出现 a 会覆盖 b 的更新，所以我们更多的都是会加个条件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>update store set num = $num where id = $id and num = $query_num
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>即乐观锁的方式来处理，当然也可以通过版本号来处理乐观锁，都是一样的，但是这是更新一个表，如果我们牵扯到多个表呢，我们希望和这个单子关联的所有的表同一时间只能被一个线程来处理更新，多个线程按照不同的顺序去更新同一个单子关联的不同数据，出现死锁的概率比较大。对于非敏感的数据，我们也没有必要去都加乐观锁处理，我们的服务都是多机器部署的，要保证多进程多线程同时只能有一个进程的一个线程去处理，这个时候我们就需要用到分布式锁。分布式锁的实现方式有很多，我们今天分别通过数据库，Zookeeper, Redis 以及 Tair 的实现逻辑。</p>
<h2 id="数据库实现" tabindex="-1"><a class="header-anchor" href="#数据库实现" aria-hidden="true">#</a> 数据库实现</h2>
<h3 id="加-xx-锁" tabindex="-1"><a class="header-anchor" href="#加-xx-锁" aria-hidden="true">#</a> 加 xx 锁</h3>
<p>更新一个单子关联的所有的数据，先查询出这个单子，并加上排他锁，在进行一系列的更新操作</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>begin transaction；
select ...for update；
doSomething()；
commit();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种处理主要依靠排他锁来阻塞其他线程，不过这个需要注意几点：</p>
<ol>
<li>查询的数据一定要在数据库里存在，如果不存在的话，数据库会加 gap 锁，而 gap 锁之间是兼容的，这种如果两个线程都加了gap 锁，另一个再更新的话会出现死锁。不过一般能更新的数据都是存在的</li>
<li>后续的处理流程需要尽可能的时间短，即在更新的时候提前准备好数据，保证事务处理的时间足够的短，流程足够的短，因为开启事务是一直占着连接的，如果流程比较长会消耗过多的数据库连接的</li>
</ol>
<h3 id="唯一键" tabindex="-1"><a class="header-anchor" href="#唯一键" aria-hidden="true">#</a> 唯一键</h3>
<p>通过在一张表里创建唯一键来获取锁，比如执行 saveStore 这个方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>insert table lock_store ('method_name') values($method_name)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中 <code v-pre>method_name</code> 是个唯一键，通过这种方式也可以做到，解锁的时候直接删除改行记录就行。不过这种方式，锁就不会是阻塞式的，因为插入数据是立马可以得到返回结果的。</p>
<p>那针对以上数据库实现的两种分布式锁，存在什么样的优缺点呢？</p>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<p>简单，方便，快速实现</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<ul>
<li>基于数据库，开销比较大，性能可能会存在影响</li>
<li>基于数据库的当前读来实现，数据库会在底层做优化，可能用到索引，可能不用到索引，这个依赖于查询计划的分析</li>
</ul>
<h2 id="zookeeper-实现" tabindex="-1"><a class="header-anchor" href="#zookeeper-实现" aria-hidden="true">#</a> Zookeeper 实现</h2>
<h3 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h3>
<ol>
<li>先有一个锁跟节点，lockRootNode，这可以是一个永久的节点</li>
<li>客户端获取锁，先在 lockRootNode 下创建一个顺序的瞬时节点，保证客户端断开连接，节点也自动删除</li>
<li>调用 lockRootNode 父节点的 getChildren() 方法，获取所有的节点，并从小到大排序，如果创建的最小的节点是当前节点，则返回 true,获取锁成功，否则，关注比自己序号小的节点的释放动作(exist watch)，这样可以保证每一个客户端只需要关注一个节点，不需要关注所有的节点，避免羊群效应。</li>
<li>如果有节点释放操作，重复步骤 3</li>
</ol>
<h3 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h3>
<p>只需要删除步骤 2 中创建的节点即可</p>
<p>使用 Zookeeper 的分布式锁存在什么样的优缺点呢？</p>
<h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h3>
<ul>
<li>客户端如果出现宕机故障的话，锁可以马上释放</li>
<li>可以实现阻塞式锁，通过 watcher 监听，实现起来也比较简单</li>
<li>集群模式，稳定性比较高</li>
</ul>
<h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h3>
<ul>
<li>一旦网络有任何的抖动，Zookeeper 就会认为客户端已经宕机，就会断掉连接，其他客户端就可以获取到锁。当然 Zookeeper 有重试机制，这个就比较依赖于其重试机制的策略了</li>
<li>性能上不如缓存</li>
</ul>
<h2 id="redis-实现" tabindex="-1"><a class="header-anchor" href="#redis-实现" aria-hidden="true">#</a> Redis 实现</h2>
<p>我们先举个例子，比如现在我要更新产品的信息，产品的唯一键就是 productId</p>
<h3 id="简单实现-1" tabindex="-1"><a class="header-anchor" href="#简单实现-1" aria-hidden="true">#</a> 简单实现 1</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public boolean lock(String key, V v, int expireTime){
        int retry = 0;
        //获取锁失败最多尝试10次
        while (retry &lt; failRetryTimes){
            //获取锁
            Boolean result = redis.setNx(key, v, expireTime);
            if (result){
                return true;
            }

            try {
                //获取锁失败间隔一段时间重试
                TimeUnit.MILLISECONDS.sleep(sleepInterval);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return false;
            }

        }

        return false;
    }
    public boolean unlock(String key){
        return redis.delete(key);
    }
    public static void main(String[] args) {
        Integer productId = 324324;
        RedisLock&lt;Integer> redisLock = new RedisLock&lt;Integer>();
        redisLock.lock(productId+"", productId, 1000);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>这是一个简单的实现，存在的问题：</p>
<ol>
<li>可能会导致当前线程的锁误被其他线程释放，比如 a 线程获取到了锁正在执行，但是由于内部流程处理超时或者 gc 导致锁过期，这个时候b线程获取到了锁，a 和 b 线程处理的是同一个 productId，b还在处理的过程中，这个时候 a 处理完了，a 去释放锁，可能就会导致 a 把 b 获取的锁释放了。</li>
<li>不能实现可重入</li>
<li>客户端如果第一次已经设置成功，但是由于超时返回失败，此后客户端尝试会一直失败</li>
</ol>
<p>针对以上问题我们改进下：</p>
<ol>
<li>v 传 requestId，然后我们在释放锁的时候判断一下，如果是当前 requestId，那就可以释放，否则不允许释放</li>
<li>加入 count 的锁计数，在获取锁的时候查询一次，如果是当前线程已经持有的锁，那锁技术加 1，直接返回 true</li>
</ol>
<h3 id="简单实现-2" tabindex="-1"><a class="header-anchor" href="#简单实现-2" aria-hidden="true">#</a> 简单实现 2</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>private static volatile int count = 0;
public boolean lock(String key, V v, int expireTime){
    int retry = 0;
    //获取锁失败最多尝试10次
    while (retry &lt; failRetryTimes){
        //1.先获取锁,如果是当前线程已经持有，则直接返回
        //2.防止后面设置锁超时，其实是设置成功，而网络超时导致客户端返回失败，所以获取锁之前需要查询一下
        V value = redis.get(key);
        //如果当前锁存在，并且属于当前线程持有，则锁计数+1，直接返回
        if (null != value &amp;&amp; value.equals(v)){
            count ++;
            return true;
        }

        //如果锁已经被持有了，那需要等待锁的释放
        if (value == null || count &lt;= 0){
            //获取锁
            Boolean result = redis.setNx(key, v, expireTime);
            if (result){
                count = 1;
                return true;
            }
        }

        try {
            //获取锁失败间隔一段时间重试
            TimeUnit.MILLISECONDS.sleep(sleepInterval);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }

    }

    return false;
}
public boolean unlock(String key, String requestId){
    String value = redis.get(key);
    if (Strings.isNullOrEmpty(value)){
        count = 0;
        return true;
    }
    //判断当前锁的持有者是否是当前线程，如果是的话释放锁，不是的话返回false
    if (value.equals(requestId)){
        if (count > 1){
            count -- ;
            return true;
        }
        
        boolean delete = redis.delete(key);
        if (delete){
            count = 0;
        }
        return delete;
    }

    return false;
}
public static void main(String[] args) {
    Integer productId = 324324;
    RedisLock&lt;String> redisLock = new RedisLock&lt;String>();
    String requestId = UUID.randomUUID().toString();
    redisLock.lock(productId+"", requestId, 1000);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>这种实现基本解决了误释放和可重入的问题，这里说明几点：</p>
<ol>
<li>引入 count 实现重入的话，看业务需要，并且在释放锁的时候，其实也可以直接就把锁删除了，一次释放搞定，不需要在通过 count 数量释放多次，看业务需要吧</li>
<li>关于要考虑设置锁超时，所以需要在设置锁的时候查询一次，可能会有性能的考量，看具体业务吧</li>
<li>目前获取锁失败的等待时间是在代码里面设置的，可以提出来，修改下等待的逻辑即可</li>
</ol>
<h3 id="错误实现" tabindex="-1"><a class="header-anchor" href="#错误实现" aria-hidden="true">#</a> 错误实现</h3>
<p>获取到锁之后要检查下锁的过期时间，如果锁过期了要重新设置下时间,大致代码如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public boolean tryLock2(String key, int expireTime){
    long expires = System.currentTimeMillis() + expireTime;

    // 获取锁
    Boolean result = redis.setNx(key, expires, expireTime);
    if (result){
        return true;
    }

    V value = redis.get(key);
    if (value != null &amp;&amp; (Long)value &lt; System.currentTimeMillis()){
        // 锁已经过期
        String oldValue = redis.getSet(key, expireTime);
        if (oldValue != null &amp;&amp; oldValue.equals(value)){
            return true;
        }
    }
    
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>这种实现存在的问题，过度依赖当前服务器的时间了，如果在大量的并发请求下，都判断出了锁过期，而这个时候再去设置锁的时候，最终是会只有一个线程，但是可能会导致不同服务器根据自身不同的时间覆盖掉最终获取锁的那个线程设置的时间。</p>
<h2 id="tair-实现" tabindex="-1"><a class="header-anchor" href="#tair-实现" aria-hidden="true">#</a> Tair 实现</h2>
<p>通过 Tair 来实现分布式锁和 Redis 的实现核心差不多，不过 Tair 有个很方便的 api，感觉是实现分布式锁的最佳配置，就是 Put api 调用的时候需要传入一个 version，就和数据库的乐观锁一样，修改数据之后，版本会自动累加，如果传入的版本和当前数据版本不一致，就不允许修改。</p>
</template>
