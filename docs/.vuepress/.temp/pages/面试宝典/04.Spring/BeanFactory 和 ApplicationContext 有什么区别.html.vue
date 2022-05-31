<template><h1 id="beanfactory-和-applicationcontext-有什么区别" tabindex="-1"><a class="header-anchor" href="#beanfactory-和-applicationcontext-有什么区别" aria-hidden="true">#</a> BeanFactory 和 ApplicationContext 有什么区别</h1>
<ul>
<li>BeanFactory 可以理解为含有 bean 集合的工厂类。BeanFactory 包含了种 bean 的定义，以便在接收到客户端请求时将对应的 bean 实例化。</li>
<li>BeanFactory 还能在实例化对象的时生成协作类之间的关系。此举将 bean 自身与 bean 客户端的配置中解放出来。BeanFactory 还包含了 bean 生命周期的控制，调用客户端的初始化方法（initialization methods）和销毁方法（destruction methods）。</li>
<li>从表面上看，ApplicationContext 如同 BeanFactory 一样具有 bean 定义、bean 关联关系的设置，根据请求分发 bean 的功能。但 ApplicationContext 在此基础上还提供了其他的功能：
<ul>
<li>提供了支持国际化的文本消息</li>
<li>统一的资源文件读取方式</li>
<li>已在监听器中注册的 bean 的事件</li>
</ul>
</li>
</ul>
</template>
