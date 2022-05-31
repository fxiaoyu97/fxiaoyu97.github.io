<template><h1 id="spring-的单例实现原理" tabindex="-1"><a class="header-anchor" href="#spring-的单例实现原理" aria-hidden="true">#</a> Spring 的单例实现原理</h1>
<p>Spring 对 Bean 实例的创建是采用单例注册表的方式进行实现的，而这个注册表的缓存是 ConcurrentHashMap 对象。</p>
</template>
