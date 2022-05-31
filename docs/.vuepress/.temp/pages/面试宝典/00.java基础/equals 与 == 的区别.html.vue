<template><h1 id="equals-与-的区别" tabindex="-1"><a class="header-anchor" href="#equals-与-的区别" aria-hidden="true">#</a> equals 与 == 的区别</h1>
<ul>
<li><code v-pre>==</code> 与<code v-pre>equals</code> 的主要区别是：<code v-pre>==</code> 常用于比较原生类型，而 <code v-pre>equals()</code> 方法用于检查对象的相等性。</li>
<li>另一个不同的点是：如果 <code v-pre>==</code> 和 <code v-pre>equals()</code> 用于比较对象，当两个引用地址相同，<code v-pre>==</code> 返回 true。而 <code v-pre>equals()</code> 可以返回 true 或者 false 主要取决于重写实现。最常见的一个例子，字符串的比较，不同情况 <code v-pre>==</code> 和 <code v-pre>equals()</code> 返回不同的结果。</li>
</ul>
</template>
