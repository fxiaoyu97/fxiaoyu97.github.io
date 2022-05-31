<template><h1 id="说说-countdownlatch-与-cyclicbarrier-区别" tabindex="-1"><a class="header-anchor" href="#说说-countdownlatch-与-cyclicbarrier-区别" aria-hidden="true">#</a> 说说 CountDownLatch 与 CyclicBarrier 区别</h1>
<ol>
<li>CountDownLatch 的作用是允许 <code v-pre>1</code> 或 <code v-pre>N</code> 个线程等待其他线程完成执行;而 CyclicBarrier 则是允许 <code v-pre>N</code> 个线程相互等待。</li>
<li>CountDownLatch 的计数器无法被重置; CyclicBarrier 的计数器可以被重置后使用,因此它被称为是循环的 barrier。</li>
</ol>
</template>
