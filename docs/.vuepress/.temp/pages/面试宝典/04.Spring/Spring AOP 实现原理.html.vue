<template><h1 id="spring-aop-实现原理" tabindex="-1"><a class="header-anchor" href="#spring-aop-实现原理" aria-hidden="true">#</a> Spring AOP 实现原理</h1>
<p>Spring AOP 中的动态代理主要有两种方式，<strong>JDK 动态代理</strong> 和 <strong>CGLIB 动态代理</strong>。JDK 动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK 动态代理的核心是 <code v-pre>InvocationHandler</code> 接口和 <code v-pre>Proxy</code> 类。</p>
<p>如果目标类没有实现接口，那么 Spring AOP 会选择使用 CGLIB 来动态代理目标类。CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态的生成某个类的子类，注意，CGLIB 是通过继承的方式做的动态代理，因此如果某个类被标记为 final，那么它是无法使用 CGLIB 做动态代理的。</p>
</template>
