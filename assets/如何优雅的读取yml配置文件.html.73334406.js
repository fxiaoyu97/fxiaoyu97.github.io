import{_ as n,o as s,c as a,a as e}from"./app.f0c02a19.js";const l={},i=e(`<h1 id="\u5982\u4F55\u4F18\u96C5\u7684\u8BFB\u53D6yml\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F18\u96C5\u7684\u8BFB\u53D6yml\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5982\u4F55\u4F18\u96C5\u7684\u8BFB\u53D6yml\u914D\u7F6E\u6587\u4EF6\uFF1F</h1><h2 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h2><ol><li>\u6570\u636E\u901A\u8FC7\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB</li><li>\u7F29\u8FDB\u4F7F\u7528\u7A7A\u683C\uFF0C\u7A7A\u683C\u4E2A\u6570\u4E0D\u91CD\u8981\uFF0C\u4F46\u662F\u540C\u4E00\u5C42\u7EA7\u7684\u6570\u636E\u5FC5\u987B\u5DE6\u5BF9\u9F50</li><li>\u533A\u5206\u5927\u5C0F\u5199</li><li>\u6570\u503C\u548C\u5192\u53F7\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00\uFF0C<code>\u540D\u79F0: \u503C</code></li><li>\u6CE8\u91CA\u4F7F\u7528<code>#</code>\uFF0C\u53EA\u80FD\u5355\u884C\u6CE8\u91CA</li></ol><h2 id="\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u683C\u5F0F</h2><ol><li>\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001<code>boolean</code>\u7B49</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u6570\u7EC4</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">project</span><span class="token punctuation">:</span>
  <span class="token key atrule">configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user <span class="token comment"># \u670D\u52A1\u540D</span>
      <span class="token key atrule">Ip</span><span class="token punctuation">:</span> 192.168.2.136 <span class="token comment"># \u8BF7\u6C42\u7684IP\u5730\u5740</span>

    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order <span class="token comment"># \u670D\u52A1\u540D</span>
      <span class="token key atrule">Ip</span><span class="token punctuation">:</span> 192.168.2.137 <span class="token comment"># \u8BF7\u6C42\u7684IP\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Map\u96C6\u5408</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">project</span><span class="token punctuation">:</span>
  <span class="token key atrule">configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">urls</span><span class="token punctuation">:</span>
        <span class="token key atrule">key1</span><span class="token punctuation">:</span> val1
        <span class="token key atrule">key2</span><span class="token punctuation">:</span> val2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6B65\u9AA4" aria-hidden="true">#</a> \u83B7\u53D6\u6B65\u9AA4</h2><ol><li>\u521B\u5EFA\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u5BF9\u5E94\u7684\u5B9E\u4F53\u7C7B\uFF0C\u83B7\u53D6peoject\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6\u4FE1\u606F\uFF0C\u5C01\u88C5\u6210\u5BF9\u8C61\u3002\u9996\u5148\u6DFB\u52A0\u6CE8\u89E3<code>@ConfigurationProperties(prefix = &quot;project&quot;) </code>\u548C<code>@Component</code>\uFF0C<code>prefix</code>\u7684\u503C\u9700\u8981\u5168\u90E8\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4E0D\u4F7F\u7528<code>@Component</code>\u6CE8\u89E3\uFF0C\u4E0D\u80FD\u4F7F\u7528<code>@Autowired</code>\u83B7\u53D6\u5BF9\u8C61\u3002</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;project&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestProperties</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u914D\u7F6E\u4FE1\u606F\u96C6\u5408
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Configs</span><span class="token punctuation">&gt;</span></span> configs<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Configs</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * \u670D\u52A1\u540D
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * ip\u5730\u5740
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> ip<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * \u96C6\u5408
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> urls<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u65E0\u6CD5\u6B63\u5E38\u4ECEyaml\u4E2D\u83B7\u53D6\u76F8\u5E94\u7684key\u548Cvalue\u65F6\uFF0C\u7ED9key\u548Cvalue\u52A0\u4E0A\u5355\u5F15\u53F7\u8BD5\u8BD5\u3002</p>`,14),c=[i];function t(o,p){return s(),a("div",null,c)}const u=n(l,[["render",t],["__file","\u5982\u4F55\u4F18\u96C5\u7684\u8BFB\u53D6yml\u914D\u7F6E\u6587\u4EF6.html.vue"]]);export{u as default};
