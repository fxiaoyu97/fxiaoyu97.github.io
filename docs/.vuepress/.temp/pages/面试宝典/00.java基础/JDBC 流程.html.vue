<template><h1 id="jdbc-流程" tabindex="-1"><a class="header-anchor" href="#jdbc-流程" aria-hidden="true">#</a> JDBC 流程</h1>
<ul>
<li>向 DriverManager 类注册驱动数据库驱动程序</li>
<li>调用 DriverManager.getConnection 方法， 通过 JDBC URL，用户名，密码取得数据库连接的 Connection 对象。</li>
<li>获取 Connection 后， 便可以通过 createStatement 创建 Statement 用以执行 SQL 语句。</li>
<li>有时候会得到查询结果，比如 select，得到查询结果，查询（SELECT）的结果存放于结果集（ResultSet）中。</li>
<li>关闭数据库语句，关闭数据库连接。</li>
</ul>
</template>
