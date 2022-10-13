import{_ as e,o as i,c as d,a as l}from"./app.f0c02a19.js";const a={},s=l(`<h1 id="redis-\u5185\u5B58\u6DD8\u6C70\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#redis-\u5185\u5B58\u6DD8\u6C70\u673A\u5236" aria-hidden="true">#</a> Redis \u5185\u5B58\u6DD8\u6C70\u673A\u5236</h1><p>Redis \u5185\u5B58\u6DD8\u6C70\u6307\u7684\u662F\u7528\u6237\u5B58\u50A8\u7684\u4E00\u4E9B\u952E\u88AB\u53EF\u4EE5\u88AB Redis \u4E3B\u52A8\u5730\u4ECE\u5B9E\u4F8B\u4E2D\u5220\u9664\uFF0C\u4ECE\u800C\u4EA7\u751F\u8BFB miss \u7684\u60C5\u51B5\uFF0C\u90A3\u4E48 Redis \u4E3A\u4EC0\u4E48\u8981\u6709\u8FD9\u79CD\u529F\u80FD\uFF1F\u8FD9\u5C31\u662F\u6211\u4EEC\u9700\u8981\u63A2\u7A76\u7684\u8BBE\u8BA1\u521D\u8877\u3002Redis \u6700\u5E38\u89C1\u7684\u4E24\u79CD\u5E94\u7528\u573A\u666F\u4E3A\u7F13\u5B58\u548C\u6301\u4E45\u5B58\u50A8\uFF0C\u9996\u5148\u8981\u660E\u786E\u7684\u4E00\u4E2A\u95EE\u9898\u662F\u5185\u5B58\u6DD8\u6C70\u7B56\u7565\u66F4\u9002\u5408\u4E8E\u90A3\u79CD\u573A\u666F\uFF1F\u662F\u6301\u4E45\u5B58\u50A8\u8FD8\u662F\u7F13\u5B58\uFF1F</p><p>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A Redis \u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u7269\u7406\u5185\u5B58\u5927\u5C0F\u4E3A 1G \u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5B58\u5728 Redis \u4E2D\u7684\u6570\u636E\u91CF\u5F88\u5C0F\uFF0C\u8FD9\u770B\u8D77\u6765\u4F3C\u4E4E\u8DB3\u591F\u7528\u5F88\u957F\u65F6\u95F4\u4E86\uFF0C\u968F\u7740\u4E1A\u52A1\u91CF\u7684\u589E\u957F\uFF0C\u6211\u4EEC\u653E\u5728 Redis \u91CC\u9762\u7684\u6570\u636E\u8D8A\u6765\u8D8A\u591A\u4E86\uFF0C\u6570\u636E\u91CF\u5927\u5C0F\u4F3C\u4E4E\u8D85\u8FC7\u4E86 1G\uFF0C\u4F46\u662F\u5E94\u7528\u8FD8\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF0C\u8FD9\u662F\u56E0\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53EF\u89C1\u5185\u5B58\u5E76\u4E0D\u53D7\u7269\u7406\u5185\u5B58\u9650\u5236\uFF0C\u800C\u662F\u865A\u62DF\u5185\u5B58\uFF0C\u7269\u7406\u5185\u5B58\u4E0D\u591F\u7528\u6CA1\u5173\u7CFB\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u4ECE\u786C\u76D8\u4E0A\u5212\u51FA\u4E00\u7247\u7A7A\u95F4\u7528\u4E8E\u6784\u5EFA\u865A\u62DF\u5185\u5B58\uFF0C\u6BD4\u598232\u4F4D\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53EF\u89C1\u5185\u5B58\u5927\u5C0F\u4E3A <code>2^32</code>\uFF0C\u800C\u7528\u6237\u7A7A\u95F4\u7684\u53EF\u89C1\u5185\u5B58\u8981\u5C0F\u4E8E <code>2^32</code> \u5F88\u591A\uFF0C\u5927\u6982\u662F 3G \u5DE6\u53F3\u3002\u597D\u4E86\uFF0C\u6211\u4EEC\u5E86\u5E78\u64CD\u4F5C\u7CFB\u7EDF\u4E3A\u6211\u4EEC\u505A\u4E86\u8FD9\u4E9B\uFF0C\u4F46\u662F\u6211\u4EEC\u9700\u8981\u77E5\u9053\u8FD9\u80CC\u540E\u7684\u4EE3\u4EF7\u662F\u4E0D\u83F2\u7684\uFF0C\u4E0D\u5408\u7406\u7684\u4F7F\u7528\u5185\u5B58\u6709\u53EF\u80FD\u53D1\u751F\u9891\u7E41\u7684 swap\uFF0C\u9891\u7E41 swap \u7684\u4EE3\u4EF7\u662F\u60E8\u75DB\u7684\u3002\u6240\u4EE5\u56DE\u8FC7\u5934\u6765\u770B\uFF0C\u4F5C\u4E3A\u6709\u8FFD\u6C42\u7684\u7A0B\u5E8F\u5458\uFF0C\u6211\u4EEC\u8FD8\u662F\u8981\u5C0F\u5FC3\u7FFC\u7FFC\u5730\u4F7F\u7528\u597D\u6BCF\u5757\u5185\u5B58\uFF0C\u628A\u7528\u6237\u4EE3\u7801\u80FD\u89E3\u51B3\u7684\u95EE\u9898\u5C3D\u91CF\u4E0D\u8981\u629B\u7ED9\u64CD\u4F5C\u7CFB\u7EDF\u89E3\u51B3\u3002</p><p><strong>\u5185\u5B58\u7684\u6DD8\u6C70\u673A\u5236\u7684\u521D\u8877\u662F\u4E3A\u4E86\u66F4\u597D\u5730\u4F7F\u7528\u5185\u5B58\uFF0C\u7528\u4E00\u5B9A\u7684\u7F13\u5B58 miss \u6765\u6362\u53D6\u5185\u5B58\u7684\u4F7F\u7528\u6548\u7387\u3002</strong></p><h2 id="\u5982\u4F55\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7528" aria-hidden="true">#</a> \u5982\u4F55\u7528</h2><p>\u4F5C\u4E3A Redis \u7528\u6237\uFF0C\u6211\u4EEC\u5982\u4F55\u4F7F\u7528 Redis \u63D0\u4F9B\u7684\u8FD9\u4E2A\u7279\u6027\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># maxmemory &lt;bytes&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>redis.conf</code> \u4E2D\u7684 <code>maxmemory</code> \u8FD9\u4E2A\u503C\u6765\u5F00\u542F\u5185\u5B58\u6DD8\u6C70\u529F\u80FD\uFF0C\u81F3\u4E8E\u8FD9\u4E2A\u503C\u6709\u4EC0\u4E48\u610F\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E86\u89E3\u5185\u5B58\u6DD8\u6C70\u7684\u8FC7\u7A0B\u6765\u7406\u89E3\u5B83\u7684\u610F\u4E49\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E86\u9700\u8981\u7533\u8BF7\u66F4\u591A\u5185\u5B58\u7684\u547D\u4EE4\uFF08\u5982set\uFF09</li><li>Redis \u68C0\u67E5\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u5982\u679C\u5DF2\u4F7F\u7528\u7684\u5185\u5B58\u5927\u4E8E <code>maxmemory</code> \u5219\u5F00\u59CB\u6839\u636E\u7528\u6237\u914D\u7F6E\u7684\u4E0D\u540C\u6DD8\u6C70\u7B56\u7565\u6765\u6DD8\u6C70\u5185\u5B58\uFF08key\uFF09\uFF0C\u4ECE\u800C\u6362\u53D6\u4E00\u5B9A\u7684\u5185\u5B58</li><li>\u5982\u679C\u4E0A\u9762\u90FD\u6CA1\u95EE\u9898\uFF0C\u5219\u8FD9\u4E2A\u547D\u4EE4\u6267\u884C\u6210\u529F</li></ul><p><code>maxmemory</code> \u4E3A 0 \u7684\u65F6\u5019\u8868\u793A\u6211\u4EEC\u5BF9 Redis \u7684\u5185\u5B58\u4F7F\u7528\u6CA1\u6709\u9650\u5236</p><h2 id="\u5185\u5B58\u6DD8\u6C70\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6DD8\u6C70\u7B56\u7565" aria-hidden="true">#</a> \u5185\u5B58\u6DD8\u6C70\u7B56\u7565</h2><p>\u5185\u5B58\u6DD8\u6C70\u53EA\u662F Redis \u63D0\u4F9B\u7684\u4E00\u4E2A\u529F\u80FD\uFF0C\u4E3A\u4E86\u66F4\u597D\u5730\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5FC5\u987B\u4E3A\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F\u63D0\u4F9B\u4E0D\u540C\u7684\u7B56\u7565\uFF0C\u5185\u5B58\u6DD8\u6C70\u7B56\u7565\u8BB2\u7684\u662F\u4E3A\u5B9E\u73B0\u5185\u5B58\u6DD8\u6C70\u6211\u4EEC\u5177\u4F53\u600E\u4E48\u505A\uFF0C\u8981\u89E3\u51B3\u7684\u95EE\u9898\u5305\u62EC\u6DD8\u6C70\u952E\u7A7A\u95F4\u5982\u4F55\u9009\u62E9\uFF1F\u5728\u952E\u7A7A\u95F4\u4E2D\u6DD8\u6C70\u952E\u5982\u4F55\u9009\u62E9\uFF1F</p><p>Redis \u63D0\u4F9B\u4E86\u4E0B\u9762\u51E0\u79CD\u6DD8\u6C70\u7B56\u7565\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u5176\u4E2D\u9ED8\u8BA4\u7684\u7B56\u7565\u4E3A <code>noeviction</code> \u7B56\u7565\uFF1A</p><ul><li>noeviction\uFF1A\u5F53\u5185\u5B58\u4F7F\u7528\u8FBE\u5230\u9608\u503C\u7684\u65F6\u5019\uFF0C\u6240\u6709\u5F15\u8D77\u7533\u8BF7\u5185\u5B58\u7684\u547D\u4EE4\u4F1A\u62A5\u9519</li><li>allkeys-lru\uFF1A\u5728\u4E3B\u952E\u7A7A\u95F4\u4E2D\uFF0C\u4F18\u5148\u79FB\u9664\u6700\u8FD1\u672A\u4F7F\u7528\u7684key</li><li>volatile-lru\uFF1A\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u4F18\u5148\u79FB\u9664\u6700\u8FD1\u672A\u4F7F\u7528\u7684 key</li><li>allkeys-random\uFF1A\u5728\u4E3B\u952E\u7A7A\u95F4\u4E2D\uFF0C\u968F\u673A\u79FB\u9664\u67D0\u4E2A key</li><li>volatile-random\uFF1A\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u968F\u673A\u79FB\u9664\u67D0\u4E2A key</li><li>volatile-ttl\uFF1A\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E2D\uFF0C\u5177\u6709\u66F4\u65E9\u8FC7\u671F\u65F6\u95F4\u7684 key \u4F18\u5148\u79FB\u9664</li></ul><p>\u8FD9\u91CC\u8865\u5145\u4E00\u4E0B\u4E3B\u952E\u7A7A\u95F4\u548C\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u6279\u952E\u5B58\u50A8\u5728Redis\u4E2D\uFF0C\u5219\u6709\u90A3\u4E48\u4E00\u4E2A\u54C8\u5E0C\u8868\u7528\u4E8E\u5B58\u50A8\u8FD9\u6279\u952E\u53CA\u5176\u503C\uFF0C\u5982\u679C\u8FD9\u6279\u952E\u4E2D\u6709\u4E00\u90E8\u5206\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\uFF0C\u90A3\u4E48\u8FD9\u6279\u952E\u8FD8\u4F1A\u88AB\u5B58\u50A8\u5230\u53E6\u5916\u4E00\u4E2A\u54C8\u5E0C\u8868\u4E2D\uFF0C\u8FD9\u4E2A\u54C8\u5E0C\u8868\u4E2D\u7684\u503C\u5BF9\u5E94\u7684\u662F\u952E\u88AB\u8BBE\u7F6E\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u7A7A\u95F4\u4E3A\u4E3B\u952E\u7A7A\u95F4\u7684\u5B50\u96C6\u3002</p><h2 id="\u5982\u4F55\u9009\u62E9\u6DD8\u6C70\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9\u6DD8\u6C70\u7B56\u7565" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9\u6DD8\u6C70\u7B56\u7565</h2><p>\u6211\u4EEC\u4E86\u89E3\u4E86 Redis \u5927\u6982\u63D0\u4F9B\u4E86\u8FD9\u4E48\u51E0\u79CD\u6DD8\u6C70\u7B56\u7565\uFF0C\u90A3\u4E48\u5982\u4F55\u9009\u62E9\u5462\uFF1F\u6DD8\u6C70\u7B56\u7565\u7684\u9009\u62E9\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u914D\u7F6E\u6307\u5B9A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># maxmemory-policy noeviction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD9\u4E2A\u503C\u586B\u4EC0\u4E48\u5462\uFF1F\u4E3A\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u6211\u4EEC\u7684\u5E94\u7528\u8BF7\u6C42\u5BF9\u4E8E Redis \u4E2D\u5B58\u50A8\u7684\u6570\u636E\u96C6\u7684\u8BBF\u95EE\u65B9\u5F0F\u4EE5\u53CA\u6211\u4EEC\u7684\u8BC9\u6C42\u662F\u4EC0\u4E48\u3002\u540C\u65F6 Redis \u4E5F\u652F\u6301 Runtime \u4FEE\u6539\u6DD8\u6C70\u7B56\u7565\uFF0C\u8FD9\u4F7F\u5F97\u6211\u4EEC\u4E0D\u9700\u8981\u91CD\u542F Redis \u5B9E\u4F8B\u800C\u5B9E\u65F6\u7684\u8C03\u6574\u5185\u5B58\u6DD8\u6C70\u7B56\u7565\u3002</p><p>\u4E0B\u9762\u770B\u770B\u51E0\u79CD\u7B56\u7565\u7684\u9002\u7528\u573A\u666F\uFF1A</p><ul><li>allkeys-lru\uFF1A\u5982\u679C\u6211\u4EEC\u7684\u5E94\u7528\u5BF9\u7F13\u5B58\u7684\u8BBF\u95EE\u7B26\u5408\u5E42\u5F8B\u5206\u5E03\uFF08\u4E5F\u5C31\u662F\u5B58\u5728\u76F8\u5BF9\u70ED\u70B9\u6570\u636E\uFF09\uFF0C\u6216\u8005\u6211\u4EEC\u4E0D\u592A\u6E05\u695A\u6211\u4EEC\u5E94\u7528\u7684\u7F13\u5B58\u8BBF\u95EE\u5206\u5E03\u72B6\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9 allkeys-lru \u7B56\u7565</li><li>allkeys-random\uFF1A\u5982\u679C\u6211\u4EEC\u7684\u5E94\u7528\u5BF9\u4E8E\u7F13\u5B58 key \u7684\u8BBF\u95EE\u6982\u7387\u76F8\u7B49\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u7B56\u7565</li><li>volatile-ttl\uFF1A\u8FD9\u79CD\u7B56\u7565\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u5411 Redis \u63D0\u793A\u54EA\u4E9B key \u66F4\u9002\u5408\u88AB eviction</li></ul><p>\u53E6\u5916\uFF0C<code>volatile-lru</code> \u7B56\u7565\u548C <code>volatile-random</code> \u7B56\u7565\u9002\u5408\u6211\u4EEC\u5C06\u4E00\u4E2ARedis\u5B9E\u4F8B\u65E2\u5E94\u7528\u4E8E\u7F13\u5B58\u548C\u53C8\u5E94\u7528\u4E8E\u6301\u4E45\u5316\u5B58\u50A8\u7684\u65F6\u5019\uFF0C\u7136\u800C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u4E24\u4E2A Redis \u5B9E\u4F8B\u6765\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C\uFF0C\u503C\u5F97\u4E00\u63D0\u7684\u662F\u5C06key\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\u5B9E\u9645\u4E0A\u4F1A\u6D88\u8017\u66F4\u591A\u7684\u5185\u5B58\uFF0C\u56E0\u6B64\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 <code>allkeys-lru</code> \u7B56\u7565\u4ECE\u800C\u66F4\u6709\u6548\u7387\u7684\u4F7F\u7528\u5185\u5B58\u3002</p><h2 id="\u975E\u7CBE\u51C6\u7684-lru" tabindex="-1"><a class="header-anchor" href="#\u975E\u7CBE\u51C6\u7684-lru" aria-hidden="true">#</a> \u975E\u7CBE\u51C6\u7684 LRU</h2><p>\u4E0A\u9762\u63D0\u5230\u7684 LRU\uFF08Least Recently Used\uFF09\u7B56\u7565\uFF0C\u5B9E\u9645\u4E0A Redis \u5B9E\u73B0\u7684 LRU \u5E76\u4E0D\u662F\u53EF\u9760\u7684 LRU\uFF0C\u4E5F\u5C31\u662F\u540D\u4E49\u4E0A\u6211\u4EEC\u4F7F\u7528 LRU \u7B97\u6CD5\u6DD8\u6C70\u952E\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u88AB\u6DD8\u6C70\u7684\u952E\u5E76\u4E0D\u4E00\u5B9A\u662F\u771F\u6B63\u7684\u6700\u4E45\u6CA1\u7528\u7684\uFF0C\u8FD9\u91CC\u6D89\u53CA\u5230\u4E00\u4E2A\u6743\u8861\u7684\u95EE\u9898\uFF0C\u5982\u679C\u9700\u8981\u5728\u5168\u90E8\u952E\u7A7A\u95F4\u5185\u641C\u7D22\u6700\u4F18\u89E3\uFF0C\u5219\u5FC5\u7136\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u5F00\u9500\uFF0CRedis \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4E5F\u5C31\u662F\u540C\u4E00\u4E2A\u5B9E\u4F8B\u5728\u6BCF\u4E00\u4E2A\u65F6\u523B\u53EA\u80FD\u670D\u52A1\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u6240\u4EE5\u8017\u65F6\u7684\u64CD\u4F5C\u4E00\u5B9A\u8981\u8C28\u614E\u3002\u4E3A\u4E86\u5728\u4E00\u5B9A\u6210\u672C\u5185\u5B9E\u73B0\u76F8\u5BF9\u7684 LRU\uFF0C\u65E9\u671F\u7684 Redis \u7248\u672C\u662F\u57FA\u4E8E\u91C7\u6837\u7684 LRU\uFF0C\u4E5F\u5C31\u662F\u653E\u5F03\u5168\u90E8\u952E\u7A7A\u95F4\u5185\u641C\u7D22\u89E3\u6539\u4E3A\u91C7\u6837\u7A7A\u95F4\u641C\u7D22\u6700\u4F18\u89E3\u3002\u81EA\u4ECE Redis3.0 \u7248\u672C\u4E4B\u540E\uFF0CRedis \u4F5C\u8005\u5BF9\u4E8E\u57FA\u4E8E\u91C7\u6837\u7684 LRU \u8FDB\u884C\u4E86\u4E00\u4E9B\u4F18\u5316\uFF0C\u76EE\u7684\u662F\u5728\u4E00\u5B9A\u7684\u6210\u672C\u5185\u8BA9\u7ED3\u679C\u66F4\u9760\u8FD1\u771F\u5B9E\u7684 LRU\u3002</p>`,24),o=[s];function r(t,c){return i(),d("div",null,o)}const R=e(a,[["render",r],["__file","Redis \u5185\u5B58\u6DD8\u6C70\u673A\u5236.html.vue"]]);export{R as default};
