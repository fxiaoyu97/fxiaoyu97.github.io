<template><h1 id="原生的-nio-在-jdk-1-7-版本存在-epoll-bug" tabindex="-1"><a class="header-anchor" href="#原生的-nio-在-jdk-1-7-版本存在-epoll-bug" aria-hidden="true">#</a> 原生的 NIO 在 JDK 1.7 版本存在 EPoll BUG</h1>
<p>它会导致 Selector 空轮询，最终导致 CPU 100%。官方声称在 JDK 1.6 版本的 update18 修复了该问题，但是直到 JDK 1.7 版本该问题仍旧存在，只不过该 BUG 发生概率降低了一些而已，它并没有得到根本性解决。</p>
</template>
