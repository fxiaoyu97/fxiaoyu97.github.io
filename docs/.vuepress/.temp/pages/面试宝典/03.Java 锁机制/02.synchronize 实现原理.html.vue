<template><h1 id="synchronize-实现原理" tabindex="-1"><a class="header-anchor" href="#synchronize-实现原理" aria-hidden="true">#</a> synchronize 实现原理</h1>
<p>同步代码块是使用 <code v-pre>monitorenter</code> 和 <code v-pre>monitorexit</code> 指令实现的，同步方法（在这看不出来需要看 JVM 底层实现）依靠的是方法修饰符上的 <code v-pre>ACC_SYNCHRONIZED</code> 实现。</p>
</template>
