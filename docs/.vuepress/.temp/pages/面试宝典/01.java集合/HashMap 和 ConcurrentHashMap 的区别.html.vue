<template><h1 id="hashmap-和-concurrenthashmap-的区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-concurrenthashmap-的区别" aria-hidden="true">#</a> HashMap 和 ConcurrentHashMap 的区别</h1>
<ul>
<li>放入 HashMap 的元素是 key-value 对。</li>
<li>底层说白了就是散列结构。</li>
<li>要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。</li>
<li>ConcurrentHashMap 对整个桶数组进行了分段，而 HashMap 则没有</li>
<li>ConcurrentHashMap 在每一个分段上都用锁进行保护，从而让锁的粒度更精细一些，并发性能更好，而 HashMap 没有锁机制，不是线程安全的</li>
</ul>
</template>
