<template><h1 id="spring-框架中用到了哪些设计模式" tabindex="-1"><a class="header-anchor" href="#spring-框架中用到了哪些设计模式" aria-hidden="true">#</a> Spring 框架中用到了哪些设计模式</h1>
<ul>
<li>代理模式：在 AOP 和 Remoting 中被用的比较多。</li>
<li>单例模式：在 Spring 配置文件中定义的 Bean 默认为单例模式。</li>
<li>模板方法：用来解决代码重复的问题。比如. RestTemplate, JmsTemplate, JpaTemplate。</li>
<li>前端控制器：Spring 提供了 DispatcherServlet 来对请求进行分发。</li>
<li>视图帮助(View Helper )：Spring 提供了一系列的 JSP 标签，高效宏来辅助将分散的代码整合在视图里。</li>
<li>依赖注入：贯穿于 BeanFactory / ApplicationContext 接口的核心理念。</li>
<li>工厂模式：BeanFactory 用来创建对象的实例。</li>
</ul>
</template>
