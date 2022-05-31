<template><h1 id="zookeeper-假死脑裂" tabindex="-1"><a class="header-anchor" href="#zookeeper-假死脑裂" aria-hidden="true">#</a> Zookeeper 假死脑裂</h1>
<p>该问题就是服务集群因为网络震荡导致的多主多从问题，解决方案就是设置服务切换的超时时间，但也同时会导致无法达到高可用的要求。</p>
<p><strong>注：该问题没什么卵用，就是为了告诉大家有 “假死脑裂” 这个词，避免面试时尴尬 ╮(￣▽￣)╭</strong></p>
</template>
