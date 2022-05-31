<template><h1 id="spring-事务实现方式" tabindex="-1"><a class="header-anchor" href="#spring-事务实现方式" aria-hidden="true">#</a> Spring 事务实现方式</h1>
<h2 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式" aria-hidden="true">#</a> 编码方式</h2>
<p>所谓编程式事务指的是通过编码方式实现事务，即类似于 JDBC 编程实现事务管理。</p>
<h2 id="声明式事务管理方式" tabindex="-1"><a class="header-anchor" href="#声明式事务管理方式" aria-hidden="true">#</a> 声明式事务管理方式</h2>
<p>声明式事务管理又有两种实现方式：</p>
<ul>
<li>基于 xml 配置文件的方式；</li>
<li>另一个实在业务方法上进行 <code v-pre>@Transaction</code> 注解，将事务规则应用到业务逻辑中；</li>
</ul>
</template>
