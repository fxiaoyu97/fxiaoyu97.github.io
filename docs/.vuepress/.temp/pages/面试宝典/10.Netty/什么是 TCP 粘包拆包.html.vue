<template><h1 id="什么是-tcp-粘包-拆包" tabindex="-1"><a class="header-anchor" href="#什么是-tcp-粘包-拆包" aria-hidden="true">#</a> 什么是 TCP 粘包/拆包</h1>
<ul>
<li>要发送的数据大于 TCP 发送缓冲区剩余空间大小，将会发生拆包。</li>
<li>待发送数据大于 MSS（最大报文长度），TCP 在传输前将进行拆包。</li>
<li>要发送的数据小于 TCP 发送缓冲区的大小，TCP 将多次写入缓冲区的数据一次发送出去，将会发生粘包。</li>
<li>接收数据端的应用层没有及时读取接收缓冲区中的数据，将发生粘包。</li>
</ul>
</template>
