<template><h1 id="缓存降级" tabindex="-1"><a class="header-anchor" href="#缓存降级" aria-hidden="true">#</a> 缓存降级</h1>
<h2 id="页面降级" tabindex="-1"><a class="header-anchor" href="#页面降级" aria-hidden="true">#</a> 页面降级</h2>
<p>在大促或者某些特殊情况下，某些页面占用了一些稀缺服务资源，在紧急情况下可以对其整个降级，以达到丢卒保帅；</p>
<h2 id="页面片段降级" tabindex="-1"><a class="header-anchor" href="#页面片段降级" aria-hidden="true">#</a> 页面片段降级</h2>
<p>比如商品详情页中的商家部分因为数据错误了，此时需要对其进行降级；</p>
<h2 id="页面异步请求降级" tabindex="-1"><a class="header-anchor" href="#页面异步请求降级" aria-hidden="true">#</a> 页面异步请求降级</h2>
<p>比如商品详情页上有推荐信息/配送至等异步加载的请求，如果这些信息响应慢或者后端服务有问题，可以进行降级；</p>
<h2 id="服务功能降级" tabindex="-1"><a class="header-anchor" href="#服务功能降级" aria-hidden="true">#</a> 服务功能降级</h2>
<p>比如渲染商品详情页时需要调用一些不太重要的服务：相关分类、热销榜等，而这些服务在异常情况下直接不获取，即降级即可；</p>
<h2 id="读降级" tabindex="-1"><a class="header-anchor" href="#读降级" aria-hidden="true">#</a> 读降级</h2>
<p>比如多级缓存模式，如果后端服务有问题，可以降级为只读缓存，这种方式适用于对读一致性要求不高的场景；</p>
<h2 id="写降级" tabindex="-1"><a class="header-anchor" href="#写降级" aria-hidden="true">#</a> 写降级</h2>
<p>比如秒杀抢购，我们可以只进行Cache的更新，然后异步同步扣减库存到DB，保证最终一致性即可，此时可以将DB降级为Cache。</p>
<h2 id="爬虫降级" tabindex="-1"><a class="header-anchor" href="#爬虫降级" aria-hidden="true">#</a> 爬虫降级</h2>
<p>在大促活动时，可以将爬虫流量导向静态页或者返回空数据，从而保护后端稀缺资源。</p>
<h2 id="自动开关降级" tabindex="-1"><a class="header-anchor" href="#自动开关降级" aria-hidden="true">#</a> 自动开关降级</h2>
<p>自动降级是根据系统负载、资源使用情况、SLA等指标进行降级。</p>
<h2 id="超时降级" tabindex="-1"><a class="header-anchor" href="#超时降级" aria-hidden="true">#</a> 超时降级</h2>
<p>当访问的数据库/http服务/远程调用响应慢或者长时间响应慢，且该服务不是核心服务的话可以在超时后自动降级；比如商品详情页上有推荐内容/评价，但是推荐内容/评价暂时不展示对用户购物流程不会产生很大的影响；对于这种服务是可以超时降级的。如果是调用别人的远程服务，和对方定义一个服务响应最大时间，如果超时了则自动降级。</p>
</template>
