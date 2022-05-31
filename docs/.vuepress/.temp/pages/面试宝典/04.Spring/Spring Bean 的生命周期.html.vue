<template><h1 id="spring-bean-的生命周期" tabindex="-1"><a class="header-anchor" href="#spring-bean-的生命周期" aria-hidden="true">#</a> Spring Bean 的生命周期</h1>
<ul>
<li>Spring Bean 的生命周期简单易懂。在一个 bean 实例被初始化时，需要执行一系列的初始化操作以达到可用的状态。同样的，当一个 bean 不在被调用时需要进行相关的析构操作，并从 bean 容器中移除。</li>
<li>Spring bean factory 负责管理在 spring 容器中被创建的 bean 的生命周期。Bean 的生命周期由两组回调（call back）方法组成。
<ul>
<li>初始化之后调用的回调方法。</li>
<li>销毁之前调用的回调方法。</li>
</ul>
</li>
<li>Spring 框架提供了以下四种方式来管理 bean 的生命周期事件：
<ul>
<li>InitializingBean 和 DisposableBean 回调接口</li>
<li>针对特殊行为的其他 Aware 接口</li>
<li>Bean 配置文件中的 Custom init() 方法和 destroy() 方法</li>
<li>@PostConstruct 和 @PreDestroy 注解方式</li>
</ul>
</li>
</ul>
</template>
