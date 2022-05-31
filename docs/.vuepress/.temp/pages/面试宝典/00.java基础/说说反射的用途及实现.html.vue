<template><h1 id="说说反射的用途及实现" tabindex="-1"><a class="header-anchor" href="#说说反射的用途及实现" aria-hidden="true">#</a> 说说反射的用途及实现</h1>
<h2 id="反射的用途" tabindex="-1"><a class="header-anchor" href="#反射的用途" aria-hidden="true">#</a> 反射的用途</h2>
<p>Java 反射机制是一个非常强大的功能，在很多的项目比如 Spring，MyBatis 都都可以看到反射的身影。通过反射机制，我们可以在运行期间获取对象的类型信息。利用这一点我们可以实现工厂模式和代理模式等设计模式，同时也可以解决 Java 泛型擦除等令人苦恼的问题。</p>
<h2 id="反射的实现" tabindex="-1"><a class="header-anchor" href="#反射的实现" aria-hidden="true">#</a> 反射的实现</h2>
<p>获取一个对象对应的反射类，在 Java 中有下列方法可以获取一个对象的反射类</p>
<ol>
<li>通过 <code v-pre>getClass()</code> 方法</li>
<li>通过 <code v-pre>Class.forName()</code> 方法</li>
<li>使用 <code v-pre>类.class</code></li>
<li>通过类加载器实现，<code v-pre>getClassLoader()</code></li>
</ol>
</template>
