<template><h1 id="git如何忽略不需要提交的文件或目录" tabindex="-1"><a class="header-anchor" href="#git如何忽略不需要提交的文件或目录" aria-hidden="true">#</a> git如何忽略不需要提交的文件或目录</h1>
<p>有时候一些有关编辑器的配置文件，打包输出的文件等，不需要提交到远程仓库，这时候我们就需要把文件或者目录添加到忽略文件<code v-pre>.gitignore</code>，但是 <strong><code v-pre>.gitignore</code>只对没有版本控制的文件起作用</strong>。即还没有执行过add操作的文件，只要把名字添加到<code v-pre>.gitignore</code>文件即可。另外注意一点，**<code v-pre>.gitignore</code>对添加的文件名或者目录名支持正则表达式的匹配。如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>忽略 a.txt 文件
a.txt
忽略a文件夹下a开头的txt文件
/a/a*.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>接下来我们看看下面几种具体情况来分析：</p>
<ol>
<li>已经add未commit的文件</li>
<li>已经commit未push的文件</li>
<li>已经push的文件</li>
</ol>
<p>遇到以上情况时，可以考虑先把文件还原到工作区，脱离版本控制。然后再添加到<code v-pre>.gitignore</code>文件中。</p>
<p>如何把文件还原到工作区可以参考《<a href="/git/%E6%92%A4%E9%94%80%E5%B7%B2%E7%BB%8F%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E7%9A%84%E6%96%87%E4%BB%B6" title="撤销已经执行操作的文件">如何撤销已经添加、提交、推送的文件或者目录</a>》</p>
</template>
