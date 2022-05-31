<template><h1 id="http-请求的-get-与-post-方式的区别" tabindex="-1"><a class="header-anchor" href="#http-请求的-get-与-post-方式的区别" aria-hidden="true">#</a> HTTP 请求的 GET 与 POST 方式的区别</h1>
<ul>
<li>根据 HTTP 规范，GET 用于信息获取，而且应该是安全的和幂等的。</li>
<li>根据 HTTP 规范，POST 表示可能修改变服务器上的资源的请求。</li>
<li>首先是 &quot;GET 方式提交的数据最多只能是 1024 字节&quot;，因为 GET 是通过 URL 提交数据，那么 GET 可提交的数据量就跟 URL 的长度有直接关系了。而实际上，URL 不存在参数上限的问题，HTTP 协议规范没有对 URL 长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE 对 URL 长度的限制是 2083 字节(2K+35)。对于其他浏览器，如 Netscape、FireFox 等，理论上没有长度限制，其限制取决于操作系统的支持。注意这是限制是整个 URL 长度，而不仅仅是你的参数值数据长度。</li>
<li>POST 是没有大小限制的，HTTP 协议规范也没有进行大小限制</li>
</ul>
</template>
