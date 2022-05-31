<template><h1 id="redis-持久化机制" tabindex="-1"><a class="header-anchor" href="#redis-持久化机制" aria-hidden="true">#</a> Redis 持久化机制</h1>
<p>Redis 有两种持久化机制：</p>
<h2 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h2>
<p>RDB 持久化方式会在一个特定的间隔保存那个时间点的一个数据快照</p>
<h2 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h2>
<p>AOF 持久化方式则会记录每一个服务器收到的写操作。在服务启动时，这些记录的操作会逐条执行从而重建出原来的数据。写操作命令记录的格式跟 Redis 协议一致，以追加的方式进行保存</p>
<p>Redis 的持久化是可以禁用的，就是说你可以让数据的生命周期只存在于服务器的运行时间里。两种方式的持久化是可以同时存在的，但是当 Redis 重启时，AOF 文件会被优先用于重建数据。</p>
</template>
