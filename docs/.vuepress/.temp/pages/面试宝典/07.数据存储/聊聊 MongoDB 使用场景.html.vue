<template><h1 id="聊聊-mongodb-使用场景" tabindex="-1"><a class="header-anchor" href="#聊聊-mongodb-使用场景" aria-hidden="true">#</a> 聊聊 MongoDB 使用场景</h1>
<h2 id="高伸缩性的场景" tabindex="-1"><a class="header-anchor" href="#高伸缩性的场景" aria-hidden="true">#</a> 高伸缩性的场景</h2>
<p>MongoDB 非常适合高伸缩性的场景，它是可扩展性的表结构。基于这点，可以将预期范围内，表结构可能会不断扩展的 MySQL 表结构，通过 MongoDB 来存储，这就可以保证表结构的扩展性。</p>
<h2 id="日志系统的场景" tabindex="-1"><a class="header-anchor" href="#日志系统的场景" aria-hidden="true">#</a> 日志系统的场景</h2>
<p>日志系统数据量特别大，如果用 MongoDB 数据库存储这些数据，利用分片集群支持海量数据，同时使用聚集分析和 MapReduce 的能力，是个很好的选择。</p>
<h2 id="分布式文件存储" tabindex="-1"><a class="header-anchor" href="#分布式文件存储" aria-hidden="true">#</a> 分布式文件存储</h2>
<p>MongoDB 还适合存储大尺寸的数据，之前介绍的 GridFS 存储方案，就是基于 MongoDB 的分布式文件存储系统。</p>
</template>
