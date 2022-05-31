<template><h1 id="性能指标有哪些" tabindex="-1"><a class="header-anchor" href="#性能指标有哪些" aria-hidden="true">#</a> 性能指标有哪些</h1>
<h2 id="响应时间-response-time" tabindex="-1"><a class="header-anchor" href="#响应时间-response-time" aria-hidden="true">#</a> 响应时间（Response time）</h2>
<p>响应时间就是用户感受软件系统为其服务所耗费的时间，对于网站系统来说，响应时间就是从点击了一个页面计时开始，到这个页面完全在浏览器里展现计时结束的这一段时间间隔，看起来很简单，但其实在这段响应时间内，软件系统在幕后经过了一系列的处理工作，贯穿了整个系统节点。根据“管辖区域”不同，响应时间可以细分为：</p>
<ol>
<li>服务器端响应时间，这个时间指的是服务器完成交易请求执行的时间，不包括客户端到服务器端的反应（请求和耗费在网络上的通信时间），这个服务器端响应时间可以度量服务器的处理能力。</li>
<li>网络响应时间，这是网络硬件传输交易请求和交易结果所耗费的时间。</li>
<li>客户端响应时间，这是客户端在构建请求和展现交易结果时所耗费的时间，对于普通的瘦客户端 Web 应用来说，这个时间很短，通常可以忽略不计；但是对于胖客户端 Web 应用来说，比如 Java applet、AJAX，由于客户端内嵌了大量的逻辑处理，耗费的时间有可能很长，从而成为系统的瓶颈，这是要注意的一个地方。</li>
</ol>
<p>那么客户感受的响应时间其实是等于 <code v-pre>客户端响应时间</code> + <code v-pre>服务器端响应时间</code> + <code v-pre>网络响应时间</code>。细分的目的是为了方便定位性能瓶颈出现在哪个节点上。</p>
<h2 id="吞吐量-throughput" tabindex="-1"><a class="header-anchor" href="#吞吐量-throughput" aria-hidden="true">#</a> 吞吐量（Throughput）</h2>
<p>吞吐量是我们常见的一个软件性能指标，对于软件系统来说，“吞”进去的是请求，“吐”出来的是结果，而吞吐量反映的就是软件系统的“饭量”，也就是系统的处理能力，具体说来，就是指软件系统在每单位时间内能处理多少个事务/请求/单位数据等。但它的定义比较灵活，在不同的场景下有不同的诠释，比如数据库的吞吐量指的是单位时间内，不同 SQL 语句的执行数量；而网络的吞吐量指的是单位时间内在网络上传输的数据流量。吞吐量的大小由负载（如用户的数量）或行为方式来决定。举个例子，下载文件比浏览网页需要更高的网络吞吐量。</p>
<h2 id="资源使用率-resource-utilization" tabindex="-1"><a class="header-anchor" href="#资源使用率-resource-utilization" aria-hidden="true">#</a> 资源使用率（Resource utilization）</h2>
<p>常见的资源有：CPU占用率、内存使用率、磁盘I/O、网络I/O。</p>
<h2 id="点击数-hits-per-second" tabindex="-1"><a class="header-anchor" href="#点击数-hits-per-second" aria-hidden="true">#</a> 点击数（Hits per second）</h2>
<p>点击数是衡量 Web Server 处理能力的一个很有用的指标。需要明确的是：点击数不是我们通常理解的用户鼠标点击次数，而是按照客户端向 Web Server 发起了多少次 http 请求计算的，一次鼠标可能触发多个 http 请求，这需要结合具体的 Web 系统实现来计算。</p>
<h2 id="并发用户数-concurrent-users" tabindex="-1"><a class="header-anchor" href="#并发用户数-concurrent-users" aria-hidden="true">#</a> 并发用户数（Concurrent users）</h2>
<p>并发用户数用来度量服务器并发容量和同步协调能力。在客户端指一批用户同时执行一个操作。并发数反映了软件系统的并发处理能力，和吞吐量不同的是，它大多是占用套接字、句柄等操作系统资源。</p>
<p>另外，度量软件系统的性能指标还有系统恢复时间等，其实凡是用户有关资源和时间的要求都可以被视作性能指标，都可以作为软件系统的度量，而性能测试就是为了验证这些性能指标是否被满足。</p>
</template>
