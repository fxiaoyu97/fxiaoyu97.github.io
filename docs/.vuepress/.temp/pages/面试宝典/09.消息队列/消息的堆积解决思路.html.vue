<template><h1 id="消息的堆积解决思路" tabindex="-1"><a class="header-anchor" href="#消息的堆积解决思路" aria-hidden="true">#</a> 消息的堆积解决思路</h1>
<p>如果还没开始投入使用 Kafka，那应该在设计分区数的时候，尽量设置的多点（当然也不要太大，太大影响延迟，具体可以参考我前面提到的文章），从而提升生产和消费的并行度，避免消费太慢导致消费堆积。</p>
<h2 id="增大批次" tabindex="-1"><a class="header-anchor" href="#增大批次" aria-hidden="true">#</a> 增大批次</h2>
<p>瓶颈在消费吞吐量的时候，增加批次也可以改善性能</p>
<h2 id="增加线程数" tabindex="-1"><a class="header-anchor" href="#增加线程数" aria-hidden="true">#</a> 增加线程数</h2>
<p>如果一些消费者组中的消费者线程还是有 1 个消费者线程消费多个分区的情况，建议增加消费者线程。尽量 1 个消费者线程对应 1 个分区，从而发挥现有分区数下的最大并行度。</p>
</template>
