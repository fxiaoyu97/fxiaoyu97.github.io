<template><h1 id="说说线程安全问题" tabindex="-1"><a class="header-anchor" href="#说说线程安全问题" aria-hidden="true">#</a> 说说线程安全问题</h1>
<p>线程安全是多线程领域的问题，线程安全可以简单理解为一个方法或者一个实例可以在多线程环境中使用而不会出现问题。</p>
<p>在 Java 多线程编程当中，提供了多种实现 Java 线程安全的方式：</p>
<ul>
<li>最简单的方式，使用 <code v-pre>Synchronization</code> 关键字</li>
<li>使用 <code v-pre>java.util.concurrent.atomic</code> 包中的原子类，例如 <code v-pre>AtomicInteger</code></li>
<li>使用 <code v-pre>java.util.concurrent.locks</code> 包中的锁</li>
<li>使用线程安全的集合 <code v-pre>ConcurrentHashMap</code></li>
<li>使用 <code v-pre>volatile</code> 关键字，保证变量可见性（直接从内存读，而不是从线程 <code v-pre>cache</code> 读）</li>
</ul>
</template>
