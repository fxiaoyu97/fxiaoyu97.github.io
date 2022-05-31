<template><h1 id="消息的幂等性解决思路" tabindex="-1"><a class="header-anchor" href="#消息的幂等性解决思路" aria-hidden="true">#</a> 消息的幂等性解决思路</h1>
<h2 id="查询操作" tabindex="-1"><a class="header-anchor" href="#查询操作" aria-hidden="true">#</a> 查询操作</h2>
<p>查询一次和查询多次，在数据不变的情况下，查询结果是一样的。<code v-pre>select</code> 是天然的幂等操作</p>
<h2 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h2>
<p>删除操作也是幂等的，删除一次和多次删除都是把数据删除。(注意可能返回结果不一样，删除的数据不存在，返回0，删除的数据多条，返回结果多个)</p>
<h2 id="唯一索引-防止新增脏数据" tabindex="-1"><a class="header-anchor" href="#唯一索引-防止新增脏数据" aria-hidden="true">#</a> 唯一索引，防止新增脏数据</h2>
<p>比如：支付宝的资金账户，支付宝也有用户账户，每个用户只能有一个资金账户，怎么防止给用户创建资金账户多个，那么给资金账户表中的用户ID加唯一索引，所以一个用户新增成功一个资金账户记录</p>
<h2 id="token-机制" tabindex="-1"><a class="header-anchor" href="#token-机制" aria-hidden="true">#</a> Token 机制</h2>
<p>防止页面重复提交</p>
<h2 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h2>
<p>获取数据的时候加锁获取</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select * from table_xxx where id='xxx' for update;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意：id字段一定是主键或者唯一索引，不然是锁表，会死人的</p>
<p>悲观锁使用时一般伴随事务一起使用，数据锁定时间可能会很长，根据实际情况选用</p>
<h2 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h2>
<p>乐观锁只是在更新数据那一刻锁表，其他时间不锁表，所以相对于悲观锁，效率更高。</p>
<h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2>
<p>还是拿插入数据的例子，如果是分布是系统，构建全局唯一索引比较困难，例如唯一性的字段没法确定，这时候可以引入分布式锁，通过第三方的系统(redis或zookeeper)，在业务系统插入数据或者更新数据，获取分布式锁，然后做操作，之后释放锁，这样其实是把多线程并发的锁的思路，引入多个系统，也就是分布式系统中得解决思路。</p>
<h2 id="select-insert" tabindex="-1"><a class="header-anchor" href="#select-insert" aria-hidden="true">#</a> select + insert</h2>
<p>并发不高的后台系统，或者一些任务JOB，为了支持幂等，支持重复执行，简单的处理方法是，先查询下一些关键数据，判断是否已经执行过，在进行业务处理，就可以了</p>
<p>注意：核心高并发流程不要用这种方法</p>
<h2 id="状态机幂等" tabindex="-1"><a class="header-anchor" href="#状态机幂等" aria-hidden="true">#</a> 状态机幂等</h2>
<p>在设计单据相关的业务，或者是任务相关的业务，肯定会涉及到状态机(状态变更图)，就是业务单据上面有个状态，状态在不同的情况下会发生变更，一般情况下存在有限状态机，这时候，如果状态机已经处于下一个状态，这时候来了一个上一个状态的变更，理论上是不能够变更的，这样的话，保证了有限状态机的幂等。</p>
<h2 id="对外提供接口的-api-如何保证幂等" tabindex="-1"><a class="header-anchor" href="#对外提供接口的-api-如何保证幂等" aria-hidden="true">#</a> 对外提供接口的 API 如何保证幂等</h2>
<p>如银联提供的付款接口：需要接入商户提交付款请求时附带：<code v-pre>source</code> 来源，<code v-pre>seq</code> 序列号 <code v-pre>source + seq</code> 在数据库里面做唯一索引，防止多次付款，(并发时，只能处理一个请求)</p>
</template>
