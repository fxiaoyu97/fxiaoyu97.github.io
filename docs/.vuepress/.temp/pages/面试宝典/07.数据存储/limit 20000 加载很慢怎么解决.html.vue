<template><h1 id="limit-20000-加载很慢怎么解决" tabindex="-1"><a class="header-anchor" href="#limit-20000-加载很慢怎么解决" aria-hidden="true">#</a> limit 20000 加载很慢怎么解决</h1>
<p>MySQL 的性能低是因为数据库要去扫描 <code v-pre>N + M</code> 条记录，然后又要放弃之前 <code v-pre>N</code> 条记录，开销很大</p>
<p>解决思路：</p>
<ul>
<li>前端加缓存，或者其他方式，减少落到库的查询操作，例如某些系统中数据在搜索引擎中有备份的，可以用 es 等进行搜索</li>
<li>使用延迟关联，即先通用 limit 得到需要数据的索引字段，然后再通过原表和索引字段关联获得需要数据</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select a.* from a,(select id from table_1 where is_deleted='N' limit 100000,20) b where a.id = b.id
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>从业务上实现，不分页如此多，例如只能分页前 100 页，后面的不允许再查了</li>
<li>不使用 limit N,M, 而是使用 limit N，即将 offset 转化为 where 条件。</li>
</ul>
</template>
