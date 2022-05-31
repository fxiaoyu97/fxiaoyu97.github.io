<template><h1 id="redis-集群方案与实现" tabindex="-1"><a class="header-anchor" href="#redis-集群方案与实现" aria-hidden="true">#</a> Redis 集群方案与实现</h1>
<ul>
<li>客户端分片</li>
<li>基于代理的分片</li>
<li>路由查询</li>
<li>客户端分片</li>
<li>由客户端决定 key 写入或者读取的节点</li>
<li>包括 Jedis 在内的一些客户端，实现了客户端分片机制</li>
</ul>
<h2 id="路由查询" tabindex="-1"><a class="header-anchor" href="#路由查询" aria-hidden="true">#</a> 路由查询</h2>
<p>将请求发送到任意节点，接收到请求的节点会将查询请求发送到正确的节点上执行。</p>
<h2 id="开源方案" tabindex="-1"><a class="header-anchor" href="#开源方案" aria-hidden="true">#</a> 开源方案</h2>
<p>Sentinel</p>
</template>
