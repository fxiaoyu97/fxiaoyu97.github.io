<template><h1 id="死信、延迟、重试队列" tabindex="-1"><a class="header-anchor" href="#死信、延迟、重试队列" aria-hidden="true">#</a> 死信、延迟、重试队列</h1>
<h2 id="死信队列" tabindex="-1"><a class="header-anchor" href="#死信队列" aria-hidden="true">#</a> 死信队列</h2>
<p>DLQ(Deal Letter Queue)，死信队列。当一个消息在队列中变成死信之后，他能被重新发送到 DLQ 中，与 DLQ 绑定到队列就是死信队列。</p>
<h3 id="什么情况下需要死信队列" tabindex="-1"><a class="header-anchor" href="#什么情况下需要死信队列" aria-hidden="true">#</a> 什么情况下需要死信队列</h3>
<ul>
<li>消息被拒绝</li>
<li>消息过期</li>
<li>队列达到最大长度</li>
</ul>
<p><img src="@source/面试宝典/16.未分类/img/Lusifer_2019011502260001.png" alt="img"></p>
<p>生产者生产一条消息，存储到普通队列中；设置队列的过期时间为 10 秒，在 10 秒内没有消费者消费消息，那么判定消息过期；此时如果设置了死信队列，过期消息被丢给死信队列交换机，然后被存储在死信队列中。</p>
<h2 id="延迟队列" tabindex="-1"><a class="header-anchor" href="#延迟队列" aria-hidden="true">#</a> 延迟队列</h2>
<p>顾名思义就是延迟执行消息，比如我们可以增加一个队列并设置其超时时间为 10 秒并且不设置任何消费者，等到消息超时，我们可以将消息放入死信队列，让消费者监听这个死信队列就达到了延迟队列的效果。</p>
<h2 id="重试队列" tabindex="-1"><a class="header-anchor" href="#重试队列" aria-hidden="true">#</a> 重试队列</h2>
<p>重试的消息在延迟的某个时间点（业务可设置）后，再次投递给消费者。而如果一直这样重复消费都持续失败到一定次数，就会投递到死信队列，最后需要进行人工干预。</p>
</template>
