<template><h1 id="synchronized-与-lock-的区别" tabindex="-1"><a class="header-anchor" href="#synchronized-与-lock-的区别" aria-hidden="true">#</a> synchronized 与 lock 的区别</h1>
<ul>
<li>synchronized 和 lock 的用法区别
<ul>
<li>synchronized(隐式锁)：在需要同步的对象中加入此控制，<code v-pre>synchronized</code> 可以加在方法上，也可以加在特定代码块中，括号中表示需要锁的对象。</li>
<li>lock（显示锁）：需要显示指定起始位置和终止位置。一般使用 <code v-pre>ReentrantLock</code> 类做为锁，多个线程中必须要使用一个 <code v-pre>ReentrantLock</code> 类做为对象才能保证锁的生效。且在加锁和解锁处需要通过 <code v-pre>lock()</code> 和 <code v-pre>unlock()</code> 显示指出。所以一般会在 <code v-pre>finally</code> 块中写 <code v-pre>unlock()</code> 以防死锁。</li>
</ul>
</li>
<li>synchronized 和 lock 性能区别 <code v-pre>synchronized</code> 是托管给 JVM 执行的，而 <code v-pre>lock</code> 是 Java 写的控制锁的代码。在 <strong>JDK 1.5</strong> 中，<code v-pre>synchronize</code> 是性能低效的。因为这是一个重量级操作，需要调用操作接口，导致有可能加锁消耗的系统时间比加锁以外的操作还多。相比之下使用 Java 提供的 <code v-pre>Lock</code> 对象，性能更高一些。但是到了 <strong>JDK 1.6</strong>，发生了变化。<code v-pre>synchronize</code> 在语义上很清晰，可以进行很多优化，有适应自旋，锁消除，锁粗化，轻量级锁，偏向锁等等。导致在 <strong>JDK 1.6</strong> 上 <code v-pre>synchronize</code> 的性能并不比 <code v-pre>Lock</code> 差。</li>
<li>synchronized 和 lock 机制区别
<ul>
<li><code v-pre>synchronized</code> 原始采用的是 CPU 悲观锁机制，即线程获得的是独占锁。独占锁意味着其 他线程只能依靠阻塞来等待线程释放锁。</li>
<li><code v-pre>Lock</code> 用的是乐观锁方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。乐观锁实现的机制就是 CAS 操作（Compare and Swap）。</li>
</ul>
</li>
</ul>
</template>
