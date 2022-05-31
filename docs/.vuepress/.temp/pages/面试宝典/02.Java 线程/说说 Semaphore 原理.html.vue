<template><h1 id="说说-semaphore-原理" tabindex="-1"><a class="header-anchor" href="#说说-semaphore-原理" aria-hidden="true">#</a> 说说 Semaphore 原理</h1>
<p><code v-pre>Semaphore</code> 直译为信号。实际上 <code v-pre>Semaphore</code> 可以看做是一个信号的集合。不同的线程能够从 <code v-pre>Semaphore</code> 中获取若干个信号量。当 <code v-pre>Semaphore</code> 对象持有的信号量不足时，尝试从 <code v-pre>Semaphore</code> 中获取信号的线程将会阻塞。直到其他线程将信号量释放以后，阻塞的线程会被唤醒，重新尝试获取信号量</p>
</template>
