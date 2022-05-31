<template><h1 id="_58-到家-mysql-军规升级版" tabindex="-1"><a class="header-anchor" href="#_58-到家-mysql-军规升级版" aria-hidden="true">#</a> 58 到家 MySQL 军规升级版</h1>
<h2 id="基础规范" tabindex="-1"><a class="header-anchor" href="#基础规范" aria-hidden="true">#</a> 基础规范</h2>
<ul>
<li>
<p>表存储引擎必须使用 <code v-pre>InnoDB</code></p>
</li>
<li>
<p>表字符集默认使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>，必要时候使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>通用，无乱码风险，汉字 3 字节，英文 1 字节</li>
<li><code v-pre>utf8mb4</code> 是 <code v-pre>utf8</code> 的超集，有存储 4 字节例如表情符号时，使用它</li>
</ul>
</li>
<li>
<p>禁止使用存储过程，视图，触发器，Event</p>
<ul>
<li>对数据库性能影响较大，互联网业务，能让站点层和服务层干的事情，不要交到数据库层</li>
<li>调试，排错，迁移都比较困难，扩展性较差</li>
</ul>
</li>
<li>
<p>禁止在数据库中存储大文件，例如照片，可以将大文件存储在对象存储系统，数据库中存储路径</p>
</li>
<li>
<p>禁止在线上环境做数据库压力测试</p>
</li>
<li>
<p>测试，开发，线上数据库环境必须隔离</p>
</li>
</ul>
<h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2>
<ul>
<li>库名，表名，列名必须用小写，采用下划线分隔
<ul>
<li>abc，Abc，ABC 都是给自己埋坑</li>
</ul>
</li>
<li>库名，表名，列名必须见名知义，长度不要超过 32 字符
<ul>
<li>tmp，wushan 谁 TM 知道这些库是干嘛的</li>
</ul>
</li>
<li>库备份必须以 bak 为前缀，以日期为后缀</li>
<li>从库必须以 <code v-pre>-s</code> 为后缀</li>
<li>备库必须以 <code v-pre>-ss</code> 为后缀</li>
</ul>
<h2 id="表设计规范" tabindex="-1"><a class="header-anchor" href="#表设计规范" aria-hidden="true">#</a> 表设计规范</h2>
<ul>
<li>
<p>单实例表个数必须控制在 <code v-pre>2000</code> 个以内</p>
</li>
<li>
<p>单表分表个数必须控制在 <code v-pre>1024</code> 个以内</p>
</li>
<li>
<p>表必须有主键，推荐使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UNSIGNED
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>整数为主键</p>
<ul>
<li>删除无主键的表，如果是 <code v-pre>row</code> 模式的主从架构，从库会挂住</li>
</ul>
</li>
<li>
<p>禁止使用外键，如果要保证完整性，应由应用程式实现</p>
<ul>
<li>外键使得表之间相互耦合，影响 <code v-pre>update/delete</code> 等 SQL 性能，有可能造成死锁，高并发情况下容易成为数据库瓶颈</li>
</ul>
</li>
<li>
<p>建议将大字段，访问频度低的字段拆分到单独的表中存储，分离冷热数据（具体参考：<a href="https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&amp;mid=2651959773&amp;idx=1&amp;sn=7e4ad0dcd050f6662dfaf39d9de36f2c&amp;chksm=bd2d04018a5a8d17b92098b4840aac23982e32d179cdd957e4c55011f6a08f6bd31f9ba5cfee&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">《如何实施数据库垂直拆分》<ExternalLinkIcon/></a>）</p>
</li>
</ul>
<h2 id="列设计规范" tabindex="-1"><a class="header-anchor" href="#列设计规范" aria-hidden="true">#</a> 列设计规范</h2>
<ul>
<li>
<p>根据业务区分使用 <code v-pre>tinyint/int/bigint</code>，分别会占用 <code v-pre>1/4/8</code> 字节</p>
</li>
<li>
<p>根据业务区分使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>char/varchar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>字段长度固定，或者长度近似的业务场景，适合使用 <code v-pre>char</code>，能够减少碎片，查询性能高</li>
<li>字段长度相差较大，或者更新较少的业务场景，适合使用 <code v-pre>varchar</code>，能够减少空间</li>
</ul>
</li>
<li>
<p>根据业务区分使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>datetime/timestamp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>前者占用 5 个字节，后者占用 4 个字节，存储年使用 <code v-pre>YEAR</code>，存储日期使用 <code v-pre>DATE</code>，存储时间使用 <code v-pre>datetime</code></li>
</ul>
</li>
<li>
<p>必须把字段定义为</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>NOT NULL
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并设默认值</p>
<ul>
<li>NULL 的列使用索引，索引统计，值都更加复杂，MySQL 更难优化</li>
<li>NULL 需要更多的存储空间</li>
<li>NULL 只能采用 <code v-pre>IS NULL</code> 或者 <code v-pre>IS NOT NULL</code> ，而在 <code v-pre>=/!=/in/not in</code> 时有大坑</li>
</ul>
</li>
<li>
<p>使用 <code v-pre>INT UNSIGNED</code> 存储 <code v-pre>IPv4</code> ，不要用 <code v-pre>char(15)</code></p>
</li>
<li>
<p>使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>varchar(20)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>存储手机号，不要使用整数</p>
<ul>
<li>牵扯到国家代号，可能出现 <code v-pre>+/-/()</code> 等字符，例如 <code v-pre>+86</code></li>
<li>手机号不会用来做数学运算</li>
<li><code v-pre>varchar</code> 可以模糊查询，例如 <code v-pre>like‘138%’</code></li>
</ul>
</li>
<li>
<p>使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>TINYINT
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>来代替</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ENUM
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li><code v-pre>ENUM</code> 增加新值要进行 <code v-pre>DDL</code> 操作</li>
</ul>
</li>
</ul>
<h2 id="索引规范" tabindex="-1"><a class="header-anchor" href="#索引规范" aria-hidden="true">#</a> 索引规范</h2>
<ul>
<li>
<p>唯一索引使用 <code v-pre>uniq_[字段名]</code> 来命名</p>
</li>
<li>
<p>非唯一索引使用 <code v-pre>idx_[字段名]</code> 来命名</p>
</li>
<li>
<p>单张表索引数量建议控制在 5 个以内</p>
<ul>
<li>互联网高并发业务，太多索引会影响写性能</li>
<li>生成执行计划时，如果索引太多，会降低性能，并可能导致 MySQL 选择不到最优索引</li>
<li>异常复杂的查询需求，可以选择 <code v-pre>ES</code> 等更为适合的方式存储</li>
</ul>
</li>
<li>
<p>组合索引字段数不建议超过 5 个</p>
<ul>
<li>如果 5 个字段还不能极大缩小 row 范围，八成是设计有问题</li>
</ul>
</li>
<li>
<p>不建议在频繁更新的字段上建立索引</p>
</li>
<li>
<p>非必要不要进行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>JOIN
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查询，如果要进行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>JOIN
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查询，被</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>JOIN
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>的字段必须类型相同，并建立索引</p>
<ul>
<li>踩过因为 <code v-pre>JOIN</code> 字段类型不一致，而导致全表扫描的坑么？</li>
</ul>
</li>
<li>
<p>理解组合索引最左前缀原则，避免重复建设索引，如果建立了(a,b,c)，相当于建立了(a), (a,b), (a,b,c)</p>
</li>
</ul>
<h2 id="sql-规范" tabindex="-1"><a class="header-anchor" href="#sql-规范" aria-hidden="true">#</a> SQL 规范</h2>
<ul>
<li>
<p>禁止使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select *
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>，只获取必要字段</p>
<ul>
<li><code v-pre>select *</code> 会增加 <code v-pre>cpu/io/内存/带宽</code> 的消耗</li>
<li>指定字段能有效利用索引覆盖</li>
<li>指定字段查询，在表结构变更时，能保证对应用程序无影响</li>
</ul>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>insert
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>必须指定字段，禁止使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>insert into T values()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>指定字段插入，在表结构变更时，能保证对应用程序无影响</li>
</ul>
</li>
<li>
<p>隐式类型转换会使索引失效，导致全表扫描</p>
</li>
<li>
<p>禁止在</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>where
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>条件列使用函数或者表达式</p>
<ul>
<li>导致不能命中索引，全表扫描</li>
</ul>
</li>
<li>
<p>禁止负向查询以及</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>开头的模糊查询</p>
<ul>
<li>导致不能命中索引，全表扫描</li>
</ul>
</li>
<li>
<p>禁止大表 <code v-pre>JOIN</code> 和子查询</p>
</li>
<li>
<p>同一个字段上的 <code v-pre>OR</code> 必须改写问 <code v-pre>IN</code>，<code v-pre>IN</code> 的值必须少于 50 个</p>
</li>
<li>
<p>应用程序必须捕获 SQL 异常</p>
<ul>
<li>方便定位线上问题</li>
</ul>
</li>
</ul>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>本军规适用于并发量大，数据量大的典型互联网业务，可直接带走参考，不谢。</p>
</template>
