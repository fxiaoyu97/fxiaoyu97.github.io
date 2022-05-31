<template><h1 id="windows中杀死占用某个端口的进程" tabindex="-1"><a class="header-anchor" href="#windows中杀死占用某个端口的进程" aria-hidden="true">#</a> Windows中杀死占用某个端口的进程</h1>
<ol>
<li>根据端口号查找对应的进程号</li>
</ol>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code><span class="token operator">/</span><span class="token operator">/</span> 列出进程极其占用的端口，且包含 80
netstat <span class="token operator">-</span>ano <span class="token punctuation">|</span> findstr 8081
<span class="token operator">/</span><span class="token operator">/</span> 显示如下所示，pid进程号为15888
C:\Users\calos>netstat <span class="token operator">-</span>ano <span class="token punctuation">|</span> findstr 8081
  TCP    0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0:8081           0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0:0              LISTENING       15888
  TCP    <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:8081              <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:0                 LISTENING       15888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>执行杀死命令</li>
</ol>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>taskkill <span class="token operator">-</span>PID &lt;进程号> <span class="token operator">-</span>F <span class="token operator">/</span><span class="token operator">/</span>强制关闭某个进程
<span class="token operator">/</span><span class="token operator">/</span> 杀死pid为15888的进程
taskkill <span class="token operator">-</span>PID 15888 <span class="token operator">-</span>F 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
