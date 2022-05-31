<template><h1 id="spring-mvc-运行流程" tabindex="-1"><a class="header-anchor" href="#spring-mvc-运行流程" aria-hidden="true">#</a> Spring MVC 运行流程</h1>
<ul>
<li>Spring MVC 将所有的请求都提交给 <code v-pre>DispatcherServlet</code>，它会委托应用系统的其他模块负责对请求进行真正的处理工作。</li>
<li><code v-pre>DispatcherServlet</code> 查询一个或多个 <code v-pre>HandlerMapping</code>，找到处理请求的 Controller.</li>
<li><code v-pre>DispatcherServlet</code> 请求提交到目标 Controller</li>
<li>Controller 进行业务逻辑处理后，会返回一个 <code v-pre>ModelAndView</code></li>
<li>Dispatcher 查询一个或多个 <code v-pre>ViewResolver</code> 视图解析器,找到 <code v-pre>ModelAndView</code> 对象指定的视图对象</li>
<li>视图对象负责渲染返回给客户端。</li>
</ul>
</template>
