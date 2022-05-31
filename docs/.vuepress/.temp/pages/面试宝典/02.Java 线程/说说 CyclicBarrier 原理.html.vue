<template><h1 id="说说-cyclicbarrier-原理" tabindex="-1"><a class="header-anchor" href="#说说-cyclicbarrier-原理" aria-hidden="true">#</a> 说说 CyclicBarrier 原理</h1>
<p><code v-pre>CyclicBarrier</code> 是一个同步辅助类,允许一组线程互相等待,直到到达某个公共屏障点(CommonBarrierPoint)。因为该 <code v-pre>barrier</code> 在释放等待线程后可以重用,所以称它为循环的 <code v-pre>barrier</code>。</p>
</template>
