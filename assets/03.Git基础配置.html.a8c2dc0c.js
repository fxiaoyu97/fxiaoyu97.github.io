import{_ as e,o as a,c as n,a as s}from"./app.f0c02a19.js";const i={},l=s(`<h1 id="git\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#git\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> Git\u57FA\u7840\u914D\u7F6E</h1><h2 id="\u4E00\u3001\u7528\u6237\u4FE1\u606F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7528\u6237\u4FE1\u606F\u914D\u7F6E" aria-hidden="true">#</a> \u4E00\u3001\u7528\u6237\u4FE1\u606F\u914D\u7F6E</h2><h3 id="_1\u3001\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> 1\u3001\u7528\u6237\u540D\u548C\u90AE\u7BB1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E\u7528\u6237\u540D\u79F0</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;your_name&#39;</span>
<span class="token comment"># \u914D\u7F6E\u7528\u6237\u90AE\u7BB1</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;your_email&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u4E0D\u540C\u7684\u53C2\u6570\u5BF9\u5E94\u7684\u4F5C\u7528\u57DF\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E0D\u540C\u7684\u53C2\u6570\u5BF9\u5E94\u7684\u4F5C\u7528\u57DF\u4E0D\u540C" aria-hidden="true">#</a> 2\u3001\u4E0D\u540C\u7684\u53C2\u6570\u5BF9\u5E94\u7684\u4F5C\u7528\u57DF\u4E0D\u540C</h3><ul><li><code>git config --local</code>\uFF1A\u53EA\u5BF9\u5F53\u524D\u4ED3\u5E93\u751F\u6548</li><li><code>git config --global</code>\uFF1A\u5BF9\u5F53\u524D\u7528\u6237\u7684\u6240\u6709\u4ED3\u5E93\u751F\u6548</li><li><code>git config --system</code>\uFF1A\u5BF9\u7CFB\u7EDF\u6240\u6709\u767B\u5F55\u7684\u7528\u6237\u751F\u6548</li></ul><p><strong>\u5F53\u4E0D\u540C\u4F5C\u7528\u57DF\u5B58\u5728\u540C\u540D\u7684\u914D\u7F6E\u65F6\uFF0C\u5C0F\u4F5C\u7528\u57DF\u7684\u914D\u7F6E\u540E\u8986\u76D6\u4E0A\u5C42\u7684\u76F8\u540C\u914D\u7F6E\u3002\u4F8B\u5982\u5F53\u524D\u4ED3\u5E93\u7684\u914D\u7F6E\u4F1A\u8986\u76D6\u5F53\u524D\u7528\u6237\u7684\u914D\u7F6E\u3002</strong></p><h3 id="_3\u3001\u663E\u793A-config-\u914D\u7F6E-\u52A0-list" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u663E\u793A-config-\u914D\u7F6E-\u52A0-list" aria-hidden="true">#</a> 3\u3001\u663E\u793A config \u914D\u7F6E\uFF0C\u52A0 <code>--list</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--local</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--global</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u6587\u672C\u6362\u884C\u7B26\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6587\u672C\u6362\u884C\u7B26\u914D\u7F6E" aria-hidden="true">#</a> \u4E8C\u3001\u6587\u672C\u6362\u884C\u7B26\u914D\u7F6E</h2><h3 id="_1\u3001\u6362\u884C\u7B26\u7684\u81EA\u52A8\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6362\u884C\u7B26\u7684\u81EA\u52A8\u8F6C\u6362" aria-hidden="true">#</a> 1\u3001\u6362\u884C\u7B26\u7684\u81EA\u52A8\u8F6C\u6362</h3><p>\u5728\u4E0D\u540C\u7684\u7CFB\u7EDF\u4E0A\uFF0C\u884C\u5C3E\u7ED3\u675F\u7B26\u662F\u4E0D\u4E00\u6837\u7684\uFF0CWindows\u4F7F\u7528\u56DE\u8F66\u548C\u6362\u884C\u4E24\u4E2A\u5B57\u7B26\u7ED3\u675F\u4E00\u884C\uFF0C \u800CMac\u548CLinux\u4E4B\u4F7F\u7528\u6362\u884C\u4E00\u4E2A\u5B57\u7B26\u3002</p><p>\u7528<code>core.autocrlf</code>\u914D\u7F6E\u76F8\u5173\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u8BA9Git \u5728\u63D0\u4EA4\u4EE3\u7801\u65F6\u81EA\u52A8\u628A\u884C\u4F4D\u7ED3\u675F\u7B26<code>CRLF</code>\u8F6C\u6362\u6210<code>LF</code>\uFF0C\u83B7\u53D6\u4EE3\u7801\u65F6\u628A <code>LF</code> \u8F6C\u6362\u6210<code>CRLF</code>\u3002\u5B83\u603B\u5171\u6709\u4E09\u4E2A\u503C\u53EF\u4EE5\u8BBE\u7F6E\uFF1A<code>true,false,input</code></p><p>\u8BBE\u7F6E\u6210<code>true</code>\uFF0C\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0C\u5C06<code>CRLF</code>\u8F6C\u6362\u6210<code>LF</code>\uFF0C\u4E0B\u8F7D\u4EE3\u7801\u65F6\uFF0CLF \u4F1A\u88AB\u8F6C\u6362\u6210 CRLF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u4E3A<code>false</code>\u65F6\uFF0C\u63D0\u4EA4\u6216\u8005\u4E0B\u8F7D\u4EE3\u7801\u65F6\uFF0C\u6587\u672C\u6587\u4EF6\u4FDD\u6301\u539F\u6765\u7684\u6837\u5B50</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u4E3A<code>input</code>\u65F6\uFF0C\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0C\u628A<code>CRLF</code>\u8F6C\u6362\u6210<code>LF</code>\uFF0C\u4E0B\u8F7D\u4EE3\u7801\u65F6\u4E0D\u8F6C\u6362</p><p>Linux \u6216 Mac \u7CFB\u7EDF\u4F7F\u7528 <code>LF</code> \u4F5C\u4E3A\u884C\u7ED3\u675F\u7B26\uFF0C\u4E0B\u8F7D\u4EE3\u7801\u65F6\u4E0D\u60F3\u81EA\u52A8\u8F6C\u6362\uFF0C\u53EF\u4EE5\u8FD9\u6837\u8BBE\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2\u3001\u662F\u5426\u5141\u8BB8\u63D0\u4EA4\u5305\u542B\u4E0D\u540C\u6362\u884C\u7B26\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u662F\u5426\u5141\u8BB8\u63D0\u4EA4\u5305\u542B\u4E0D\u540C\u6362\u884C\u7B26\u7684\u6587\u4EF6" aria-hidden="true">#</a> 2\u3001\u662F\u5426\u5141\u8BB8\u63D0\u4EA4\u5305\u542B\u4E0D\u540C\u6362\u884C\u7B26\u7684\u6587\u4EF6</h3><p>\u62D2\u7EDD\u63D0\u4EA4\u5305\u542B\u6DF7\u5408\u6362\u884C\u7B26\u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.safecrlf <span class="token boolean">true</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5141\u8BB8\u63D0\u4EA4\u5305\u542B\u6DF7\u5408\u6362\u884C\u7B26\u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.safecrlf <span class="token boolean">false</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u5305\u542B\u6DF7\u5408\u6362\u884C\u7B26\u7684\u6587\u4EF6\u65F6\u7ED9\u51FA\u8B66\u544A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.safecrlf warn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u6587\u672C\u7F16\u7801\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6587\u672C\u7F16\u7801\u8BBE\u7F6E" aria-hidden="true">#</a> \u4E09\u3001\u6587\u672C\u7F16\u7801\u8BBE\u7F6E</h2><ul><li><code>core.quotepath</code>\uFF1A \u8DEF\u5F84\u662F\u5426\u8F6C\u4E49</li><li><code> gui.encoding</code>\uFF1A\u56FE\u5F62\u5316\u754C\u9762\u7F16\u7801</li><li><code>i18n.commitEncoding</code>\uFF1A<code>git commit log</code>\u5B58\u50A8\u65F6\uFF0C\u91C7\u7528\u7684\u7F16\u7801\uFF0C\u9ED8\u8BA4 UTF-8</li><li><code>i18n.logOutputEncoding</code>\uFF1A<code>git log</code>\u65F6\uFF0C\u663E\u793A\u91C7\u7528\u7684\u7F16\u7801\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E UTF-8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56FE\u5F62\u5316\u754C\u9762\u7F16\u7801</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> gui.encoding utf-8
<span class="token comment"># \u63D0\u4EA4\u4FE1\u606F\u7F16\u7801</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> i18n.commitencoding utf-8
<span class="token comment"># \u8F93\u51FA log \u7F16\u7801</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> i18.logoutputencoding utf-8
<span class="token comment"># \u8DEF\u5F84\u4E0D\u8F6C\u4E49\uFF0C\u53EF\u4EE5\u663E\u793A\u8DEF\u5F84\u4E2D\u7684\u4E2D\u6587</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539<code>etc\\config</code>\u6587\u4EF6\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[core]
    quotepath = false
[gui]
    encoding = utf-8
[i18n]
    commitencoding = utf-8
    logoutputencoding = utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001http-https-\u534F\u8BAE\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001http-https-\u534F\u8BAE\u8BA4\u8BC1" aria-hidden="true">#</a> \u56DB\u3001HTTP/HTTPS \u534F\u8BAE\u8BA4\u8BC1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u53E3\u4EE4\u7F13\u5B58\uFF0C\u81EA\u52A8\u8BB0\u5F55\u4E0A\u6B21\u8BA4\u8BC1\u7684\u7ED3\u679C</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.help store
<span class="token comment"># \u5173\u95EDssl\u6821\u9A8C</span>
<span class="token function">git</span> config http.sslverify <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u521B\u5EFA\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u521B\u5EFA\u4ED3\u5E93" aria-hidden="true">#</a> \u4E94\u3001\u521B\u5EFA\u4ED3\u5E93</h2><p>1\u3001\u5DF2\u6709\u9879\u76EE\u4EE3\u7801\u7EB3\u5165Git\u7BA1\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> \u9879\u76EE\u4EE3\u7801\u6240\u5728\u6587\u4EF6\u5939
<span class="token comment"># \u521D\u59CB\u5316\u4ED3\u5E93</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u65B0\u5EFA\u7684\u9879\u76EE\u76F4\u63A5\u7528Git\u7BA1\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728 project \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A test \u9879\u76EE\u4ED3\u5E93</span>
<span class="token builtin class-name">cd</span> project
<span class="token function">git</span> init <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u6307\u5B9A\u4E0D\u9700\u8981git\u7BA1\u7406\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u6307\u5B9A\u4E0D\u9700\u8981git\u7BA1\u7406\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u516D\u3001\u6307\u5B9A\u4E0D\u9700\u8981git\u7BA1\u7406\u7684\u6587\u4EF6</h2><p>\u4ED3\u5E93\u6839\u76EE\u5F55\u521B\u5EFA<code>.gitignore</code>\u6587\u4EF6\uFF0C\u6CE8\u610F\u70B9\uFF1A</p><ol><li>\u6587\u4EF6\u540D\u79F0\u4E0D\u53EF\u4FEE\u6539</li><li>\u6700\u540E\u52A0\u4E0D\u52A0\u659C\u7EBF\u533A\u5206\u6587\u4EF6\u5939\u548C\u6587\u4EF6\uFF0C\u6BD4\u5982<code>doc/</code>\u8868\u793A\u6587\u4EF6\u5939\uFF0C<code>doc</code>\u8868\u793A\u6587\u4EF6</li></ol>`,42),c=[l];function d(o,t){return a(),n("div",null,c)}const p=e(i,[["render",d],["__file","03.Git\u57FA\u7840\u914D\u7F6E.html.vue"]]);export{p as default};
