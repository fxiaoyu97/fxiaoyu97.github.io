<template><h1 id="redis-为什么是单线程的" tabindex="-1"><a class="header-anchor" href="#redis-为什么是单线程的" aria-hidden="true">#</a> Redis 为什么是单线程的</h1>
<p>因为 CPU 不是 Redis 的瓶颈。Redis 的瓶颈最有可能是机器内存或者网络带宽。（以上主要来自官方 FAQ）既然单线程容易实现，而且 CPU 不会成为瓶颈，那就顺理成章地采用单线程的方案了。</p>
</template>
