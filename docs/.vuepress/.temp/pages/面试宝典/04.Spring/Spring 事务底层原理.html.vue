<template><h1 id="spring-事务底层原理" tabindex="-1"><a class="header-anchor" href="#spring-事务底层原理" aria-hidden="true">#</a> Spring 事务底层原理</h1>
<h2 id="划分处理单元-ioc" tabindex="-1"><a class="header-anchor" href="#划分处理单元-ioc" aria-hidden="true">#</a> 划分处理单元 IOC</h2>
<p>由于 Spring 解决的问题是对单个数据库进行局部事务处理的，具体的实现首相用 Spring 中的 IOC 划分了事务处理单元。并且将对事务的各种配置放到了 IOC 容器中（设置事务管理器，设置事务的传播特性及隔离机制）。</p>
<h2 id="aop-拦截需要进行事务处理的类" tabindex="-1"><a class="header-anchor" href="#aop-拦截需要进行事务处理的类" aria-hidden="true">#</a> AOP 拦截需要进行事务处理的类</h2>
<p>Spring 事务处理模块是通过 AOP 功能来实现声明式事务处理的，具体操作（比如事务实行的配置和读取，事务对象的抽象），用 <code v-pre>TransactionProxyFactoryBean</code> 接口来使用 AOP 功能，生成 proxy 代理对象，通过 <code v-pre>TransactionInterceptor</code> 完成对代理方法的拦截，将事务处理的功能编织到拦截的方法中。读取 IOC 容器事务配置属性，转化为 Spring 事务处理需要的内部数据结构（<code v-pre>TransactionAttributeSourceAdvisor</code>），转化为 <code v-pre>TransactionAttribute</code> 表示的数据对象。</p>
<h2 id="对事物处理实现-事务的生成、提交、回滚、挂起" tabindex="-1"><a class="header-anchor" href="#对事物处理实现-事务的生成、提交、回滚、挂起" aria-hidden="true">#</a> 对事物处理实现（事务的生成、提交、回滚、挂起）</h2>
<p>Spring 委托给具体的事务处理器实现。实现了一个抽象和适配。适配的具体事务处理器：DataSource 数据源支持、Hibernate 数据源事务处理支持、JDO 数据源事务处理支持，JPA、JTA 数据源事务处理支持。这些支持都是通过设计 <code v-pre>PlatformTransactionManager</code>、<code v-pre>AbstractPlatforTransaction</code> 一系列事务处理的支持。 为常用数据源支持提供了一系列的 <code v-pre>TransactionManager</code>。</p>
<h2 id="结合" tabindex="-1"><a class="header-anchor" href="#结合" aria-hidden="true">#</a> 结合</h2>
<p><code v-pre>PlatformTransactionManager</code> 实现了 <code v-pre>TransactionInterception</code> 接口，让其与 <code v-pre>TransactionProxyFactoryBean</code> 结合起来，形成一个 Spring 声明式事务处理的设计体系。</p>
</template>
