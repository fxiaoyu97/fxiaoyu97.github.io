import{_ as e,o as i,c as l,a as t}from"./app.f0c02a19.js";const a={},d=t(`<h1 id="limit-20000-\u52A0\u8F7D\u5F88\u6162\u600E\u4E48\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#limit-20000-\u52A0\u8F7D\u5F88\u6162\u600E\u4E48\u89E3\u51B3" aria-hidden="true">#</a> limit 20000 \u52A0\u8F7D\u5F88\u6162\u600E\u4E48\u89E3\u51B3</h1><p>MySQL \u7684\u6027\u80FD\u4F4E\u662F\u56E0\u4E3A\u6570\u636E\u5E93\u8981\u53BB\u626B\u63CF <code>N + M</code> \u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u53C8\u8981\u653E\u5F03\u4E4B\u524D <code>N</code> \u6761\u8BB0\u5F55\uFF0C\u5F00\u9500\u5F88\u5927</p><p>\u89E3\u51B3\u601D\u8DEF\uFF1A</p><ul><li>\u524D\u7AEF\u52A0\u7F13\u5B58\uFF0C\u6216\u8005\u5176\u4ED6\u65B9\u5F0F\uFF0C\u51CF\u5C11\u843D\u5230\u5E93\u7684\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4F8B\u5982\u67D0\u4E9B\u7CFB\u7EDF\u4E2D\u6570\u636E\u5728\u641C\u7D22\u5F15\u64CE\u4E2D\u6709\u5907\u4EFD\u7684\uFF0C\u53EF\u4EE5\u7528 es \u7B49\u8FDB\u884C\u641C\u7D22</li><li>\u4F7F\u7528\u5EF6\u8FDF\u5173\u8054\uFF0C\u5373\u5148\u901A\u7528 limit \u5F97\u5230\u9700\u8981\u6570\u636E\u7684\u7D22\u5F15\u5B57\u6BB5\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u539F\u8868\u548C\u7D22\u5F15\u5B57\u6BB5\u5173\u8054\u83B7\u5F97\u9700\u8981\u6570\u636E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select a.* from a,(select id from table_1 where is_deleted=&#39;N&#39; limit 100000,20) b where a.id = b.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4ECE\u4E1A\u52A1\u4E0A\u5B9E\u73B0\uFF0C\u4E0D\u5206\u9875\u5982\u6B64\u591A\uFF0C\u4F8B\u5982\u53EA\u80FD\u5206\u9875\u524D 100 \u9875\uFF0C\u540E\u9762\u7684\u4E0D\u5141\u8BB8\u518D\u67E5\u4E86</li><li>\u4E0D\u4F7F\u7528 limit N,M, \u800C\u662F\u4F7F\u7528 limit N\uFF0C\u5373\u5C06 offset \u8F6C\u5316\u4E3A where \u6761\u4EF6\u3002</li></ul>`,6),c=[d];function s(r,_){return i(),l("div",null,c)}const n=e(a,[["render",s],["__file","limit 20000 \u52A0\u8F7D\u5F88\u6162\u600E\u4E48\u89E3\u51B3.html.vue"]]);export{n as default};
