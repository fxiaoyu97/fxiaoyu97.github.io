<template><h1 id="mysql-索引使用的注意事项" tabindex="-1"><a class="header-anchor" href="#mysql-索引使用的注意事项" aria-hidden="true">#</a> MySQL 索引使用的注意事项</h1>
<ul>
<li>索引不会包含有 <code v-pre>NULL</code> 的列 只要列中包含有 <code v-pre>NULL</code> 值，都将不会被包含在索引中，复合索引中只要有一列含有 <code v-pre>NULL</code> 值，那么这一列对于此符合索引就是无效的。</li>
<li>使用短索引 对串列进行索引，如果可以就应该指定一个前缀长度。例如，如果有一个 <code v-pre>char（255）</code> 的列，如果在前 <code v-pre>10</code> 个或 <code v-pre>20</code> 个字符内，多数值是唯一的，那么就不要对整个列进行索引。短索引不仅可以提高查询速度而且可以节省磁盘空间和 <code v-pre>I/O</code> 操作。</li>
<li>索引列排序 MySql 查询只使用一个索引，因此如果 <code v-pre>where</code> 子句中已经使用了索引的话，那么 <code v-pre>order by</code> 中的列是不会使用索引的。因此数据库默认排序可以符合要求的情况下不要使用排序操作，尽量不要包含多个列的排序，如果需要最好给这些列建复合索引。</li>
<li><code v-pre>like</code> 语句操作 一般情况下不鼓励使用 <code v-pre>like</code> 操作，如果非使用不可，注意正确的使用方式。<code v-pre>like ‘%aaa%’</code> 不会使用索引，而 <code v-pre>like ‘aaa%’</code> 可以使用索引。</li>
<li>不要在列上进行运算</li>
<li>不使用 <code v-pre>NOT IN</code> 、<code v-pre>&lt;&gt;</code>、<code v-pre>！=</code>操作，但 <code v-pre>&lt;</code> , <code v-pre>&lt;=</code> ，<code v-pre>=</code> ，<code v-pre>&gt;</code> , <code v-pre>&gt;=</code> , <code v-pre>BETWEEN</code> , <code v-pre>IN</code> 是可以用到索引的</li>
<li>索引要建立在经常进行select操作的字段上 这是因为，如果这些列很少用到，那么有无索引并不能明显改变查询速度。相反，由于增加了索引，反而降低了系统的维护速度和增大了空间需求。</li>
<li>索引要建立在值比较唯一的字段上</li>
<li>对于那些定义为 <code v-pre>text</code>、<code v-pre>image</code> 和 <code v-pre>bit</code> 数据类型的列不应该增加索引。因为这些列的数据量要么相当大，要么取值很少</li>
<li>在 <code v-pre>where</code> 和 <code v-pre>join</code> 中出现的列需要建立索引</li>
<li><code v-pre>where</code> 的查询条件里有不等号 <code v-pre>(where column != …)</code> , MySql 将无法使用索引</li>
<li>如果 <code v-pre>where</code> 字句的查询条件里使用了函数(如：<code v-pre>where DAY(column)=…)</code>, MySql 将无法使用索引</li>
<li>在 <code v-pre>join</code> 操作中(需要从多个数据表提取数据时)，MySql 只有在主键和外键的数据类型相同时才能使用索引，否则及时建立了索引也不会使用</li>
</ul>
</template>
