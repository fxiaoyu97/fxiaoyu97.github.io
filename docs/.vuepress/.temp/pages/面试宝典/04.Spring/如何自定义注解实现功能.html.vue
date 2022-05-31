<template><h1 id="如何自定义注解实现功能" tabindex="-1"><a class="header-anchor" href="#如何自定义注解实现功能" aria-hidden="true">#</a> 如何自定义注解实现功能</h1>
<ol>
<li>创建自定义注解和创建一个接口相似，但是注解的 <code v-pre>interface</code> 关键字需要以 <code v-pre>@</code> 符号开头。</li>
<li>注解方法不能带有参数；</li>
<li>注解方法返回值类型限定为：基本类型、String、Enums、Annotation 或者是这些类型的数组；</li>
<li>注解方法可以有默认值；</li>
<li>注解本身能够包含元注解，元注解被用来注解其它注解。</li>
</ol>
</template>
