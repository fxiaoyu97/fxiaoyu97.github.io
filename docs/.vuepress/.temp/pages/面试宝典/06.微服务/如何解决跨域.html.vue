<template><h1 id="如何解决跨域" tabindex="-1"><a class="header-anchor" href="#如何解决跨域" aria-hidden="true">#</a> 如何解决跨域</h1>
<h2 id="什么是跨域问题" tabindex="-1"><a class="header-anchor" href="#什么是跨域问题" aria-hidden="true">#</a> 什么是跨域问题？</h2>
<p>跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对 JavaScript 施加的安全限制。</p>
<h2 id="什么是同源" tabindex="-1"><a class="header-anchor" href="#什么是同源" aria-hidden="true">#</a> 什么是同源？</h2>
<p>所谓同源是指，域名，协议，端口均相同</p>
<ul>
<li><code v-pre>http://www.funtl.com --&gt; http://admin.funtl.com 跨域</code></li>
<li><code v-pre>http://www.funtl.com --&gt; http://www.funtl.com 非跨域</code></li>
<li><code v-pre>http://www.funtl.com --&gt; http://www.funtl.com:8080 跨域</code></li>
<li><code v-pre>http://www.funtl.com --&gt; https://www.funtl.com 跨域</code></li>
</ul>
<h2 id="使用-cors-跨资源共享-解决跨域问题" tabindex="-1"><a class="header-anchor" href="#使用-cors-跨资源共享-解决跨域问题" aria-hidden="true">#</a> 使用 CORS（跨资源共享）解决跨域问题</h2>
<p>CORS 是一个 W3C 标准，全称是&quot;跨域资源共享&quot;（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。</p>
<p>CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE 浏览器不能低于 IE10</p>
<p>整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与同源的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉</p>
<p>因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信</p>
<h2 id="cors-与-jsonp-的比较" tabindex="-1"><a class="header-anchor" href="#cors-与-jsonp-的比较" aria-hidden="true">#</a> CORS 与 JSONP 的比较</h2>
<p>CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。</p>
<p>JSONP 只支持 GET 请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。</p>
</template>
