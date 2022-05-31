<template><h1 id="说说-sql-优化之道" tabindex="-1"><a class="header-anchor" href="#说说-sql-优化之道" aria-hidden="true">#</a> 说说 SQL 优化之道</h1>
<h2 id="一些常见的-sql-实践" tabindex="-1"><a class="header-anchor" href="#一些常见的-sql-实践" aria-hidden="true">#</a> 一些常见的 SQL 实践</h2>
<ul>
<li>负向条件查询不能使用索引</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where status!=0 and status!=1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>not in/not exists # 都不是好习惯
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以优化为 <code v-pre>in</code> 查询：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where status in(2,3)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>前导模糊查询不能使用索引</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where desc like '%XX'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>而非前导模糊查询则可以：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where desc like 'XX%'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>数据区分度不大的字段不宜使用索引</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where sex=1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>原因：性别只有男，女，每次过滤掉的数据很少，不宜使用索引。</p>
<p>经验上，能过滤80%数据时就可以使用索引。对于订单状态，如果状态值很少，不宜使用索引，如果状态值很多，能够过滤大量数据，则应该建立索引。</p>
<ul>
<li>在属性上进行计算不能命中索引</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where YEAR(date) &lt; = '2017'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>即使date上建立了索引，也会全表扫描，可优化为值计算：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where date &lt; = CURDATE()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where date &lt; = '2017-01-01'1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="并非周知的-sql-实践" tabindex="-1"><a class="header-anchor" href="#并非周知的-sql-实践" aria-hidden="true">#</a> 并非周知的 SQL 实践</h2>
<ul>
<li>如果业务大部分是单条查询，使用Hash索引性能更好，例如用户中心</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where uid=?
select from user where login_name=?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>原因：<code v-pre>B-Tree</code> 索引的时间复杂度是 <code v-pre>O(log(n))</code>；<code v-pre>Hash</code> 索引的时间复杂度是 <code v-pre>O(1)</code></p>
<ul>
<li>允许为 <code v-pre>null</code> 的列，查询有潜在大坑</li>
</ul>
<p>单列索引不存 <code v-pre>null</code> 值，复合索引不存全为 <code v-pre>null</code> 的值，如果列允许为 <code v-pre>null</code>，可能会得到“不符合预期”的结果集</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where name != 'shenjian'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果 <code v-pre>name</code> 允许为 <code v-pre>null</code>，索引不存储 <code v-pre>null</code> 值，结果集中不会包含这些记录。所以，请使用 <code v-pre>not null</code> 约束以及默认值。</p>
<ul>
<li>复合索引最左前缀，并不是值 SQL 语句的 <code v-pre>where</code> 顺序要和复合索引一致</li>
</ul>
<p>用户中心建立了(login_name, passwd)的复合索引</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where login_name=? and passwd=?
select from user where passwd=? and login_name=?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>都能够命中索引</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where login_name=?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也能命中索引，满足复合索引最左前缀</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where passwd=?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>不能命中索引，不满足复合索引最左前缀</p>
<ul>
<li>使用 <code v-pre>ENUM</code> 而不是字符串</li>
</ul>
<p><code v-pre>ENUM</code> 保存的是 <code v-pre>TINYINT</code>，别在枚举中搞一些“中国”“北京”“技术部”这样的字符串，字符串空间又大，效率又低。</p>
<h2 id="小众但有用的-sql-实践" tabindex="-1"><a class="header-anchor" href="#小众但有用的-sql-实践" aria-hidden="true">#</a> 小众但有用的 SQL 实践</h2>
<ul>
<li>如果明确知道只有一条结果返回，<code v-pre>limit 1</code> 能够提高效率</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where login_name=?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以优化为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where login_name=? limit 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>原因：你知道只有一条结果，但数据库并不知道，明确告诉它，让它主动停止游标移动</p>
<ul>
<li>把计算放到业务层而不是数据库层，除了节省数据的 CPU，还有意想不到的查询缓存优化效果</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from order where date &lt; = CURDATE()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这不是一个好的SQL实践，应该优化为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$curDate = date('Y-m-d');
$res = mysqlquery('select from order where date &lt; = $curDate');
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>原因：释放了数据库的 CPU，多次调用，传入的SQL相同，才可以利用查询缓存</p>
<ul>
<li>强制类型转换会全表扫描</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>select from user where phone=13800001234
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你以为会命中 phone 索引么？大错特错了，这个语句究竟要怎么改？</p>
<p>末了，再加一条，不要使用 <code v-pre>select *（潜台词，文章的 SQL 都不合格 ==）</code>，只返回需要的列，能够大大的节省数据传输量，与数据库的内存使用量哟。</p>
</template>
