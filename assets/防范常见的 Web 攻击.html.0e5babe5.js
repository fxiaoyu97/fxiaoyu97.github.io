import{_ as e,o as a,c as i,a as r}from"./app.f0c02a19.js";const t={},d=r(`<h1 id="\u9632\u8303\u5E38\u89C1\u7684-web-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u9632\u8303\u5E38\u89C1\u7684-web-\u653B\u51FB" aria-hidden="true">#</a> \u9632\u8303\u5E38\u89C1\u7684 Web \u653B\u51FB</h1><h2 id="sql-\u6CE8\u5165\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#sql-\u6CE8\u5165\u653B\u51FB" aria-hidden="true">#</a> SQL \u6CE8\u5165\u653B\u51FB</h2><p>SQL \u6CE8\u5165\u653B\u51FB\uFF0C\u8FD9\u4E2A\u662F\u6700\u5E38\u804A\u5230\u7684\u8BDD\u9898\uFF0C\u4F7F\u7528\u8FC7 Java \u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u7B2C\u4E00\u4E2A\u53CD\u5E94\u5C31\u662F\u4E00\u5B9A\u8981\u4F7F\u7528\u9884\u7F16\u8BD1\u7684 PrepareStatement</p><h3 id="\u4EC0\u4E48\u662F-sql-\u6CE8\u5165\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-sql-\u6CE8\u5165\u653B\u51FB" aria-hidden="true">#</a> \u4EC0\u4E48\u662F SQL \u6CE8\u5165\u653B\u51FB</h3><p>\u653B\u51FB\u8005\u5728 HTTP \u8BF7\u6C42\u4E2D\u6CE8\u5165\u6076\u610F\u7684 SQL \u4EE3\u7801\uFF0C\u670D\u52A1\u5668\u4F7F\u7528\u53C2\u6570\u6784\u5EFA\u6570\u636E\u5E93 SQL \u547D\u4EE4\u65F6\uFF0C\u6076\u610F SQL \u88AB\u4E00\u8D77\u6784\u9020\uFF0C\u5E76\u5728\u6570\u636E\u5E93\u4E2D\u6267\u884C\u3002</p><p>\u7528\u6237\u767B\u5F55\uFF0C\u8F93\u5165\u7528\u6237\u540D Lusifer\uFF0C\u5BC6\u7801 <code>&#39;or &#39;1&#39; = &#39;1&#39;</code> \uFF0C\u5982\u679C\u6B64\u65F6\u4F7F\u7528\u53C2\u6570\u6784\u9020\u7684\u65B9\u5F0F\uFF0C\u5C31\u4F1A\u51FA\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from user where name = &#39;Lusifer&#39; and password = &#39;&#39; or &#39;1&#39;=&#39;1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u7BA1\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u4EC0\u4E48\u5185\u5BB9\uFF0C\u4F7F\u67E5\u8BE2\u51FA\u6765\u7684\u7528\u6237\u5217\u8868\u4E0D\u4E3A\u7A7A\u3002</p><h3 id="\u73B0\u5728\u8FD8\u4F1A\u5B58\u5728-sql-\u6CE8\u5165\u653B\u51FB\u4E48" tabindex="-1"><a class="header-anchor" href="#\u73B0\u5728\u8FD8\u4F1A\u5B58\u5728-sql-\u6CE8\u5165\u653B\u51FB\u4E48" aria-hidden="true">#</a> \u73B0\u5728\u8FD8\u4F1A\u5B58\u5728 SQL \u6CE8\u5165\u653B\u51FB\u4E48</h3><p>\u8FD9\u4E2A\u95EE\u9898\u5728\u4F7F\u7528\u4E86\u9884\u7F16\u8BD1\u7684 PrepareStatement \u540E\uFF0C\u5B89\u5168\u6027\u5F97\u5230\u4E86\u5F88\u5927\u7684\u63D0\u9AD8\uFF0C\u4F46\u662F\u771F\u5B9E\u60C5\u51B5\u4E0B\uFF0C\u5F88\u591A\u540C\u5B66\u5E76\u4E0D\u91CD\u89C6\uFF0C\u8FD8\u662F\u4F1A\u7559\u4E0B\u6F0F\u6D1E\u7684\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u770B\u770B\uFF0C\u5927\u5BB6\u7684\u4EE3\u7801\u4E2D\u5BF9 sql \u4E2D in \u64CD\u4F5C\uFF0C\u4F7F\u7528\u4E86\u9884\u7F16\u8BD1\uFF0C\u8FD8\u662F\u4ECD\u7136\u8FD8\u662F\u901A\u8FC7\u5B57\u7B26\u4E32\u62FC\u63A5\u5462\uFF1F</p><h3 id="\u5982\u4F55\u9632\u8303-sql-\u6CE8\u5165\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9632\u8303-sql-\u6CE8\u5165\u653B\u51FB" aria-hidden="true">#</a> \u5982\u4F55\u9632\u8303 SQL \u6CE8\u5165\u653B\u51FB</h3><p>\u4F7F\u7528\u9884\u7F16\u8BD1\u7684 PrepareStatement \u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u662F\u4E00\u822C\u6211\u4EEC\u4F1A\u4ECE\u4E24\u4E2A\u65B9\u9762\u540C\u65F6\u5165\u624B\uFF1A</p><ol><li>Web \u7AEF <ul><li>\u6709\u6548\u6027\u68C0\u9A8C\u3002</li><li>\u9650\u5236\u5B57\u7B26\u4E32\u8F93\u5165\u7684\u957F\u5EA6\u3002</li></ul></li><li>\u670D\u52A1\u7AEF <ul><li>\u4E0D\u7528\u62FC\u63A5 SQL \u5B57\u7B26\u4E32\u3002</li><li>\u4F7F\u7528\u9884\u7F16\u8BD1\u7684 PrepareStatement\u3002</li><li>\u6709\u6548\u6027\u68C0\u9A8C\u3002(\u4E3A\u4EC0\u4E48\u670D\u52A1\u7AEF\u8FD8\u8981\u505A\u6709\u6548\u6027\u68C0\u9A8C\uFF1F\u7B2C\u4E00\u51C6\u5219\uFF0C\u5916\u90E8\u90FD\u662F\u4E0D\u53EF\u4FE1\u7684\uFF0C\u9632\u6B62\u653B\u51FB\u8005\u7ED5\u8FC7 Web \u7AEF\u8BF7\u6C42)</li><li>\u8FC7\u6EE4 SQL \u9700\u8981\u7684\u53C2\u6570\u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u3002\u6BD4\u5982\u5355\u5F15\u53F7\u3001\u53CC\u5F15\u53F7\u3002</li></ul></li></ol><h2 id="xss-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#xss-\u653B\u51FB" aria-hidden="true">#</a> XSS \u653B\u51FB</h2><h3 id="\u4EC0\u4E48\u662F-xss-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-xss-\u653B\u51FB" aria-hidden="true">#</a> \u4EC0\u4E48\u662F XSS \u653B\u51FB</h3><p>\u8DE8\u7AD9\u70B9\u811A\u672C\u653B\u51FB\uFF0C\u6307\u653B\u51FB\u8005\u901A\u8FC7\u7BE1\u6539\u7F51\u9875\uFF0C\u5D4C\u5165\u6076\u610F\u811A\u672C\u7A0B\u5E8F\uFF0C\u5728\u7528\u6237\u6D4F\u89C8\u7F51\u9875\u65F6\uFF0C\u63A7\u5236\u7528\u6237\u6D4F\u89C8\u5668\u8FDB\u884C\u6076\u610F\u64CD\u4F5C\u7684\u4E00\u79CD\u653B\u51FB\u65B9\u5F0F\u3002</p><p>\u5047\u8BBE\u9875\u9762\u4E0A\u6709\u4E00\u4E2A\u8868\u5355</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input  type=&quot;text&quot; name=&quot;name&quot; value=&quot;Lusifer&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\uFF0C\u7528\u6237\u8F93\u5165\u7684\u4E0D\u662F\u4E00\u4E2A\u6B63\u5E38\u7684\u5B57\u7B26\u4E32\uFF0C\u800C\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;/&gt;&lt;script&gt;alert(&quot;haha&quot;)&lt;/script&gt;&lt;!-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\uFF0C\u9875\u9762\u53D8\u6210\u4E0B\u9762\u7684\u5185\u5BB9\uFF0C\u5728\u8F93\u5165\u6846 input \u7684\u540E\u9762\u5E26\u4E0A\u4E86\u4E00\u6BB5\u811A\u672C\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input type=&quot;text&quot; name=&quot;name&quot; value=&quot;Lusifer&quot;/&gt;&lt;script&gt;alert(&quot;haha&quot;)&lt;/script&gt;&lt;!-&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u7AEF\u811A\u672C\u7A0B\u5E8F\u53EA\u662F\u5F39\u51FA\u4E00\u4E2A\u6D88\u606F\u6846\uFF0C\u5E76\u4E0D\u4F1A\u9020\u6210\u4EC0\u4E48\u5371\u5BB3\uFF0C\u653B\u51FB\u7684\u5A01\u529B\u53D6\u51B3\u4E8E\u7528\u6237\u8F93\u5165\u4E86\u4EC0\u4E48\u6837\u7684\u811A\u672C\uFF0C\u53EA\u8981\u7A0D\u5FAE\u4FEE\u6539\uFF0C\u4FBF\u53EF\u4F7F\u653B\u51FB\u6781\u5177\u653B\u51FB\u6027\u3002</p><h3 id="\u5982\u4F55\u9632\u8303-xss-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9632\u8303-xss-\u653B\u51FB" aria-hidden="true">#</a> \u5982\u4F55\u9632\u8303 XSS \u653B\u51FB</h3><ol><li>\u524D\u7AEF\uFF0C\u670D\u52A1\u7AEF\uFF0C\u540C\u65F6\u9700\u8981\u5B57\u7B26\u4E32\u8F93\u5165\u7684\u957F\u5EA6\u9650\u5236\u3002</li><li>\u524D\u7AEF\uFF0C\u670D\u52A1\u7AEF\uFF0C\u540C\u65F6\u9700\u8981\u5BF9HTML\u8F6C\u4E49\u5904\u7406\u3002\u5C06\u5176\u4E2D\u7684 <code>&lt;</code> ,<code>&gt;</code> \u7B49\u7279\u6B8A\u5B57\u7B26\u8FDB\u884C\u8F6C\u4E49\u7F16\u7801\u3002</li></ol><h2 id="csrf-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#csrf-\u653B\u51FB" aria-hidden="true">#</a> CSRF \u653B\u51FB</h2><h3 id="\u4EC0\u4E48\u662F-csrf-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-csrf-\u653B\u51FB" aria-hidden="true">#</a> \u4EC0\u4E48\u662F CSRF \u653B\u51FB</h3><p>\u8DE8\u7AD9\u70B9\u8BF7\u6C42\u4F2A\u9020\uFF0C\u6307\u653B\u51FB\u8005\u901A\u8FC7\u8DE8\u7AD9\u8BF7\u6C42\uFF0C\u4EE5\u5408\u6CD5\u7684\u7528\u6237\u7684\u8EAB\u4EFD\u8FDB\u884C\u975E\u6CD5\u64CD\u4F5C\u3002\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3 CSRF \u653B\u51FB\uFF1A\u653B\u51FB\u8005\u76D7\u7528\u4F60\u7684\u8EAB\u4EFD\uFF0C\u4EE5\u4F60\u7684\u540D\u4E49\u5411\u7B2C\u4E09\u65B9\u7F51\u7AD9\u53D1\u9001\u6076\u610F\u8BF7\u6C42\u3002CRSF \u80FD\u505A\u7684\u4E8B\u60C5\u5305\u62EC\u5229\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u90AE\u4EF6\uFF0C\u53D1\u77ED\u4FE1\uFF0C\u8FDB\u884C\u4EA4\u6613\u8F6C\u8D26\uFF0C\u751A\u81F3\u76D7\u53D6\u8D26\u53F7\u4FE1\u606F\u3002</p><h3 id="\u5982\u4F55\u9632\u8303-csrf-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9632\u8303-csrf-\u653B\u51FB" aria-hidden="true">#</a> \u5982\u4F55\u9632\u8303 CSRF \u653B\u51FB</h3><ol><li>\u5B89\u5168\u6846\u67B6\uFF0C\u4F8B\u5982 Spring Security\u3002</li><li>token \u673A\u5236\u3002\u5728 HTTP \u8BF7\u6C42\u4E2D\u8FDB\u884C token \u9A8C\u8BC1\uFF0C\u5982\u679C\u8BF7\u6C42\u4E2D\u6CA1\u6709 token \u6216\u8005 token \u5185\u5BB9\u4E0D\u6B63\u786E\uFF0C\u5219\u8BA4\u4E3A CSRF \u653B\u51FB\u800C\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002</li><li>\u9A8C\u8BC1\u7801\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u9A8C\u8BC1\u7801\u80FD\u591F\u5F88\u597D\u7684\u904F\u5236 CSRF \u653B\u51FB\uFF0C\u4F46\u662F\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u51FA\u4E8E\u7528\u6237\u4F53\u9A8C\u8003\u8651\uFF0C\u9A8C\u8BC1\u7801\u53EA\u80FD\u4F5C\u4E3A\u4E00\u79CD\u8F85\u52A9\u624B\u6BB5\uFF0C\u800C\u4E0D\u662F\u6700\u4E3B\u8981\u7684\u89E3\u51B3\u65B9\u6848\u3002</li><li>referer \u8BC6\u522B\u3002\u5728 HTTP Header \u4E2D\u6709\u4E00\u4E2A\u5B57\u6BB5 Referer\uFF0C\u5B83\u8BB0\u5F55\u4E86 HTTP \u8BF7\u6C42\u7684\u6765\u6E90\u5730\u5740\u3002\u5982\u679C Referer \u662F\u5176\u4ED6\u7F51\u7AD9\uFF0C\u5C31\u6709\u53EF\u80FD\u662F CSRF \u653B\u51FB\uFF0C\u5219\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002\u4F46\u662F\uFF0C\u670D\u52A1\u5668\u5E76\u975E\u90FD\u80FD\u53D6\u5230 Referer\u3002\u5F88\u591A\u7528\u6237\u51FA\u4E8E\u9690\u79C1\u4FDD\u62A4\u7684\u8003\u8651\uFF0C\u9650\u5236\u4E86 Referer \u7684\u53D1\u9001\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u53D1\u9001 Referer\uFF0C\u4F8B\u5982 HTTPS \u8DF3\u8F6C\u5230 HTTP\u3002</li></ol><h2 id="\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E</h2><h3 id="\u4EC0\u4E48\u662F\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E</h3><p>\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E\uFF0C\u6307\u7684\u662F\u7528\u6237\u4E0A\u4F20\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u811A\u672C\u6587\u4EF6\uFF0C\u5E76\u901A\u8FC7\u6B64\u811A\u672C\u6587\u4EF6\u83B7\u5F97\u4E86\u6267\u884C\u670D\u52A1\u7AEF\u547D\u4EE4\u7684\u80FD\u529B\u3002</p><p>\u8BB8\u591A\u7B2C\u4E09\u65B9\u6846\u67B6\u3001\u670D\u52A1\uFF0C\u90FD\u66FE\u7ECF\u88AB\u7206\u51FA\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E\uFF0C\u6BD4\u5982\u5F88\u65E9\u4E4B\u524D\u7684 Struts2\uFF0C\u4EE5\u53CA\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7B49\u7B49\uFF0C\u53EF\u80FD\u88AB\u4E00\u65E6\u88AB\u653B\u51FB\u8005\u4E0A\u4F20\u6076\u610F\u4EE3\u7801\uFF0C\u6709\u53EF\u80FD\u670D\u52A1\u7AEF\u5C31\u88AB\u4EBA\u9ED1\u4E86\u3002</p><h3 id="\u5982\u4F55\u9632\u8303\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9632\u8303\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E" aria-hidden="true">#</a> \u5982\u4F55\u9632\u8303\u6587\u4EF6\u4E0A\u4F20\u6F0F\u6D1E</h3><ol><li>\u6587\u4EF6\u4E0A\u4F20\u7684\u76EE\u5F55\u8BBE\u7F6E\u4E3A\u4E0D\u53EF\u6267\u884C\u3002</li><li>\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\u3002\u5728\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528 <code>MIME Type</code>\uFF0C\u540E\u7F00\u68C0\u67E5\u7B49\u65B9\u5F0F\u3002\u56E0\u4E3A\u5BF9\u4E8E\u4E0A\u4F20\u6587\u4EF6\uFF0C\u4E0D\u80FD\u7B80\u5355\u5730\u901A\u8FC7\u540E\u7F00\u540D\u79F0\u6765\u5224\u65AD\u6587\u4EF6\u7684\u7C7B\u578B\uFF0C\u56E0\u4E3A\u653B\u51FB\u8005\u53EF\u4EE5\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u7684\u540E\u7F00\u540D\u79F0\u6539\u4E3A\u56FE\u7247\u6216\u5176\u4ED6\u540E\u7F00\u7C7B\u578B\uFF0C\u8BF1\u5BFC\u7528\u6237\u6267\u884C\u3002</li><li>\u5BF9\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u767D\u540D\u5355\u6821\u9A8C\uFF0C\u53EA\u5141\u8BB8\u4E0A\u4F20\u53EF\u9760\u7C7B\u578B\u3002</li><li>\u4E0A\u4F20\u7684\u6587\u4EF6\u9700\u8981\u8FDB\u884C\u91CD\u65B0\u547D\u540D\uFF0C\u4F7F\u653B\u51FB\u8005\u65E0\u6CD5\u731C\u60F3\u4E0A\u4F20\u6587\u4EF6\u7684\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u5C06\u6781\u5927\u5730\u589E\u52A0\u653B\u51FB\u6210\u672C\uFF0C\u540C\u65F6\u5411 <code>shell</code>, <code>php</code>, <code>rar</code>, <code>ara</code> \u8FD9\u79CD\u6587\u4EF6\uFF0C\u56E0\u4E3A\u91CD\u547D\u540D\u800C\u65E0\u6CD5\u6210\u529F\u5B9E\u65BD\u653B\u51FB\u3002</li><li>\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\u3002</li><li>\u5355\u72EC\u8BBE\u7F6E\u6587\u4EF6\u670D\u52A1\u5668\u7684\u57DF\u540D\u3002</li></ol><h2 id="\u8BBF\u95EE\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u63A7\u5236" aria-hidden="true">#</a> \u8BBF\u95EE\u63A7\u5236</h2><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u201C\u57FA\u4E8E URL \u7684\u8BBF\u95EE\u63A7\u5236\u201D\u662F\u6700\u5E38\u89C1\u7684\u3002</p><h3 id="\u5782\u76F4\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u5782\u76F4\u6743\u9650\u7BA1\u7406</h3><p>\u8BBF\u95EE\u63A7\u5236\u5B9E\u9645\u4E0A\u662F\u5EFA\u7ACB\u7528\u6237\u4E0E\u6743\u9650\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u5373\u201C\u57FA\u4E8E\u89D2\u8272\u7684\u8BBF\u95EE\u63A7\u5236\u201D\uFF0CRBAC\u3002\u4E0D\u540C\u89D2\u8272\u7684\u6743\u9650\u6709\u9AD8\u4F4E\u4E4B\u5206\u3002\u9AD8\u6743\u9650\u89D2\u8272\u8BBF\u95EE\u4F4E\u6743\u9650\u89D2\u8272\u7684\u8D44\u6E90\u5F80\u5F80\u662F\u88AB\u5141\u8BB8\u7684\uFF0C\u800C\u4F4E\u6743\u9650\u89D2\u8272\u8BBF\u95EE\u9AD8\u6743\u9650\u7684\u8D44\u6E90\u5F80\u5F80\u88AB\u7981\u6B62\u7684\u3002\u5728\u914D\u7F6E\u6743\u9650\u65F6\uFF0C\u5E94\u5F53\u4F7F\u7528\u201C\u6700\u5C0F\u6743\u9650\u539F\u5219\u201D\uFF0C\u5E76\u4F7F\u7528\u201C\u9ED8\u8BA4\u62D2\u7EDD\u201D\u7684\u7B56\u7565\uFF0C\u53EA\u5BF9\u6709\u9700\u8981\u7684\u4E3B\u4F53\u5355\u72EC\u914D\u7F6E\u201D\u5141\u8BB8\u201D\u7684\u7B56\u7565\uFF0C\u8FD9\u5728\u5F88\u591A\u65F6\u5019\u80FD\u591F\u907F\u514D\u53D1\u751F\u201C\u8D8A\u6743\u8BBF\u95EE\u201D\u3002</p><p>\u4F8B\u5982\uFF0CSpring Security\uFF0C Apache Shiro \u90FD\u53EF\u4EE5\u5EFA\u7ACB\u5782\u76F4\u6743\u9650\u7BA1\u7406\u3002</p><h3 id="\u6C34\u5E73\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6C34\u5E73\u6743\u9650\u7BA1\u7406</h3><p>\u6C34\u5E73\u6743\u9650\u95EE\u9898\u5728\u540C\u4E00\u4E2A\u89D2\u8272\u4E0A\uFF0C\u7CFB\u7EDF\u53EA\u9A8C\u8BC1\u4E86\u8BBF\u95EE\u6570\u636E\u7684\u89D2\u8272\uFF0C\u6CA1\u6709\u5BF9\u89D2\u8272\u5185\u7684\u7528\u6237\u505A\u7EC6\u5206\uFF0C\u7531\u4E8E\u6C34\u5E73\u6743\u9650\u7BA1\u7406\u662F\u7CFB\u7EDF\u7F3A\u4E4F\u4E00\u4E2A\u6570\u636E\u7EA7\u7684\u8BBF\u95EE\u63A7\u5236\u6240\u9020\u6210\u7684\uFF0C\u56E0\u6B64\u6C34\u5E73\u6743\u9650\u7BA1\u7406\u53C8\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u201C\u57FA\u4E8E\u6570\u636E\u7684\u8BBF\u95EE\u63A7\u5236\u201D\u3002</p><p>\u4E3E\u4E2A\u7406\u89E3\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E4B\u524D\u7684\u4E00\u4E2A\u52A9\u624B\u4EA7\u54C1\uFF0C\u5BA2\u6237\u7AEF\u7528\u6237\u5220\u9664\u8BC4\u8BBA\u529F\u80FD\uFF0C\u5982\u679C\u6CA1\u6709\u505A\u6C34\u5E73\u6743\u9650\u7BA1\u7406\uFF0C\u5373\u8BBE\u7F6E\u53EA\u6709\u672C\u4EBA\u624D\u53EF\u4EE5\u5220\u9664\u81EA\u5DF1\u7684\u8BC4\u8BBA\uFF0C\u90A3\u4E48\u7528\u6237\u901A\u8FC7\u4FEE\u6539\u8BC4\u8BBAid\u5C31\u53EF\u4EE5\u5220\u9664\u522B\u4EBA\u7684\u8BC4\u8BBA\u8FD9\u4E2A\u5C31\u5B58\u5728\u5371\u9669\u7684\u8D8A\u6743\u64CD\u4F5C\u3002</p><p>\u8FD9\u4E2A\u5C42\u9762\uFF0C\u57FA\u672C\u9700\u8981\u6211\u4EEC\u4E1A\u52A1\u5C42\u9762\u53BB\u5904\u7406\uFF0C\u4F46\u662F\u8FD9\u4E2A\u4E5F\u662F\u6700\u4E3A\u7ECF\u5E38\u9057\u843D\u7684\u5B89\u5168\u70B9\u3002</p>`,45),l=[d];function s(n,h){return a(),i("div",null,l)}const o=e(t,[["render",s],["__file","\u9632\u8303\u5E38\u89C1\u7684 Web \u653B\u51FB.html.vue"]]);export{o as default};
