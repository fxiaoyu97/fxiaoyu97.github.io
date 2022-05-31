<template><h1 id="sleep-、join-、yield-有什么区别" tabindex="-1"><a class="header-anchor" href="#sleep-、join-、yield-有什么区别" aria-hidden="true">#</a> sleep()、join（）、yield（）有什么区别</h1>
<h2 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep" aria-hidden="true">#</a> sleep()</h2>
<p><code v-pre>sleep()</code> 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是 <code v-pre>sleep()</code> 方法不会释放“锁标志”，也就是说如果有 <code v-pre>synchronized</code> 同步块，其他线程仍然不能访问共享数据。</p>
<h2 id="wait" tabindex="-1"><a class="header-anchor" href="#wait" aria-hidden="true">#</a> wait()</h2>
<p><code v-pre>wait()</code> 方法需要和 <code v-pre>notify()</code> 及 <code v-pre>notifyAll()</code> 两个方法一起介绍，这三个方法用于协调多个线程对共享数据的存取，所以必须在 <code v-pre>synchronized</code> 语句块内使用，也就是说，调用 <code v-pre>wait()</code>，<code v-pre>notify()</code> 和 <code v-pre>notifyAll()</code> 的任务在调用这些方法前必须拥有对象的锁。注意，它们都是 <code v-pre>Object</code> 类的方法，而不是 <code v-pre>Thread</code> 类的方法。</p>
<p><code v-pre>wait()</code> 方法与 <code v-pre>sleep()</code> 方法的不同之处在于，<code v-pre>wait()</code> 方法会释放对象的“锁标志”。当调用某一对象的 <code v-pre>wait()</code> 方法后，会使当前线程暂停执行，并将当前线程放入对象等待池中，直到调用了 <code v-pre>notify()</code> 方法后，将从对象等待池中移出任意一个线程并放入锁标志等待池中，只有锁标志等待池中的线程可以获取锁标志，它们随时准备争夺锁的拥有权。当调用了某个对象的 <code v-pre>notifyAll()</code> 方法，会将对象等待池中的所有线程都移动到该对象的锁标志等待池。</p>
<p>除了使用 <code v-pre>notify()</code> 和 <code v-pre>notifyAll()</code> 方法，还可以使用带毫秒参数的 <code v-pre>wait(long timeout)</code> 方法，效果是在延迟 timeout 毫秒后，被暂停的线程将被恢复到锁标志等待池。</p>
<p>此外，<code v-pre>wait()</code>，<code v-pre>notify()</code> 及 <code v-pre>notifyAll()</code> 只能在 <code v-pre>synchronized</code> 语句中使用，但是如果使用的是 <code v-pre>ReenTrantLock</code> 实现同步，该如何达到这三个方法的效果呢？解决方法是使用 <code v-pre>ReenTrantLock.newCondition()</code> 获取一个 <code v-pre>Condition</code> 类对象，然后 <code v-pre>Condition</code> 的 <code v-pre>await()</code>，<code v-pre>signal()</code> 以及 <code v-pre>signalAll()</code> 分别对应上面的三个方法。</p>
<h2 id="yield" tabindex="-1"><a class="header-anchor" href="#yield" aria-hidden="true">#</a> yield()</h2>
<p><code v-pre>yield()</code> 方法和 <code v-pre>sleep()</code> 方法类似，也不会释放“锁标志”，区别在于，它没有参数，即 <code v-pre>yield()</code> 方法只是使当前线程重新回到可执行状态，所以执行 <code v-pre>yield()</code> 的线程有可能在进入到可执行状态后马上又被执行，另外 <code v-pre>yield()</code> 方法只能使同优先级或者高优先级的线程得到执行机会，这也和 <code v-pre>sleep()</code> 方法不同。</p>
<h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join()</h2>
<p><code v-pre>join()</code> 方法会使当前线程等待调用 <code v-pre>join()</code> 方法的线程结束后才能继续执行</p>
</template>
