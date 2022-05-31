<template><h1 id="撤销已经执行操作的文件" tabindex="-1"><a class="header-anchor" href="#撤销已经执行操作的文件" aria-hidden="true">#</a> 撤销已经执行操作的文件</h1>
<h2 id="已经add的文件" tabindex="-1"><a class="header-anchor" href="#已经add的文件" aria-hidden="true">#</a> 已经add的文件</h2>
<p>众所周知，Git把文件划分为三个区，分别是工作区、暂存区和本地仓库，那么add后的文件已经提交到暂存区了，这时候我们想要把add后的文件的还原到未添加以前的操作，那么我们该怎么办呢？</p>
<ol>
<li>
<p>如果还想保留修改内容的话，可以直接使用下面的命令把文件从暂存区删除掉：<code v-pre>git rm --cache -r 1.txt</code>，这时候还有点不一样的地方，</p>
<ul>
<li>如果是新创建的文件，使用这个命令，可以直接从暂存区删除掉，转到工作区。</li>
<li>如果是修改的文件，使用这个命令，那么文件会变成删除的状态，意思就是从本地仓库删除的意思，再执行一次commit，就会把文件从仓库删除掉，文件进入暂存区，文件修改的内容不会改变。</li>
</ul>
</li>
<li>
<p>如果不需要保留修改内容的话，可以直接使用版本还原命令：<code v-pre>git reset --hard &lt;版本号&gt;</code>，例如<code v-pre>git reset --hard c5775</code>(版本号一般写5位即可，要保证填写的这几位不出现重复即可)，特别特别注意，正如它的名字一样，这是很硬核的命令，<strong>这里会把整个工作区撤销到某个版本，会把这个版本以后你新增或者修改的内容全部删除掉，回收站和本地仓库都找不来的那种。</strong> 比较有意思的一点是未添加到版本控制的文件（即那些未执行add操作的文件不会被删除）。</p>
</li>
</ol>
<h2 id="已经commit的文件" tabindex="-1"><a class="header-anchor" href="#已经commit的文件" aria-hidden="true">#</a> 已经commit的文件</h2>
<p>这时候的文件已经进入本地仓库了，这时候的撤销就会出现不同的情况了，是要撤销到暂存区还是工作区呢？这时候多了不同的选择，具体的操作接着往下看。</p>
<ol>
<li>撤销文件到暂存区，这时<strong>只是撤销commit的操作</strong>，对应的命令是：<code v-pre>git reset --soft &lt;版本号&gt;</code>(例如<code v-pre>git reset --soft c5775</code>)，此时你会发现对应的文件被撤销了，但是修改内容还是存在的，并且文件在暂存区，此时如果你想再撤销add操作的话，可以参考第一种情况。</li>
<li>撤销文件到工作区，如果需要删除工作区改动的内容的话，可以使用命令：<code v-pre>git reset --hard &lt;版本号&gt;</code>(例如<code v-pre>git reset --hard c5775</code>)，正如第一种情况中提到的，在<strong>撤销commit操作的同时会撤销add操作，并且把你修改和新增的内容全部删除掉</strong>，可以试着先撤销到最近提交的版本，这样可以把文件的变动降低到最小。</li>
<li>撤销文件到工作区，并<strong>保留修改的内容，然后撤销commit，撤销add操作</strong>，这时候就要使用另外一个命令参数了：<code v-pre>git reset --mixed &lt;版本号&gt;</code>(例如<code v-pre>git reset --mixed c5775</code>)，此时该版本后面的的commit和add都会被撤回的，但是修改以后的内容并没有被删除掉。
<ul>
<li>所有新创建的文件都会回到工作区</li>
<li>所有提交后修改的文件会到暂存区</li>
<li>所有在这个版本以后提交并修改的文件，会回到工作区，并且修改内容不变。</li>
<li><strong>默认情况下，<code v-pre>git reset</code>后面不跟参数时，使用的是<code v-pre>--mixed</code></strong></li>
</ul>
</li>
</ol>
<p><strong>拓展知识：只修改提交的说明内容</strong></p>
<p>如果只是提交时的说明内容写错了，那么可以使用另外一条命令进行修改：<code v-pre>git commit --amend </code>，这条命令不需要跟版本号，只会修改最近一次commit的说明内容，执行以后会进入vim编辑器，后面的操作同vim的基础操作。</p>
<h2 id="已经push的文件" tabindex="-1"><a class="header-anchor" href="#已经push的文件" aria-hidden="true">#</a> 已经push的文件</h2>
<p>执行push的文件已经进入远程仓库，突然发现文件提交错了，这是不是感觉比较慌？不用紧张，当你掌握了前面的那些操作以后，你会发现此时的操作也没那么难嘛。</p>
<p>改变远程仓库的文件只要两步，首先撤销本地仓库的修改，然后推送到远程仓库即可。但是，这时候会遇到一个问题。</p>
<p>因为执行撤销操作以后，导致本地的版本号低于远程仓库的版本号，这时候执行推送的操作就会变错。就需要我们执行强制推送，命令如下所示：</p>
<ul>
<li><code v-pre>git push origin &lt;分支名&gt; –force （例如：git push origin master –force ）</code></li>
<li>或者使用：<code v-pre>git push -f origin master </code></li>
</ul>
<h2 id="git-reset-和-git-revert" tabindex="-1"><a class="header-anchor" href="#git-reset-和-git-revert" aria-hidden="true">#</a> git reset 和 git revert</h2>
<p>revert可以理解为复原，相当于对某些操作的逆转。关于<code v-pre>git revert</code>有以下几个注意点：</p>
<ul>
<li>基本的使用操作是<code v-pre>git revert &lt;版本号&gt;</code>，撤销某次提交</li>
<li><code v-pre>git revert</code>操作会产生一次新的commit</li>
</ul>
<p><strong>我们可不可以只产生一次新的commit完成批量撤销复原操作呢？</strong></p>
<p>嘿嘿，这也是可以的。撤销一串提交可以使用的命令是：<code v-pre>git revert --no-commit &lt;commit1&gt;..&lt;commit2&gt; </code>，<strong>这是一个前开后闭的区间选择</strong>，意思就是不包括commit1，但包括commit2。这个是连续性，会把<code v-pre>commit1</code>和<code v-pre>commit2</code>之间所有的修改都撤销了，包括<code v-pre>commit2t</code>提交记录的修改。而且revert对每个撤销的commit记录都会生成一个新的提交，产生一次提交记录。<code v-pre>--no-commit</code> 表示可以最后一起手动提交，避免产生太多提交记录。</p>
<p>那么问题又来了，<strong>如果你对某文件进行了多次修改，多次修改的是同一块代码，然后再撤销很久很久以前一次提交，那么会出现什么后果呢？</strong></p>
<p>这时候再使用revert的话，会出错的，提醒无法复原文件，但是git会把执行结果展示在文件中，git会把文件划分为两部分，**一部分包括文件现在的内容，一部分包括文件复原版本的上一个版本的内容。中间以<code v-pre>=======</code>划分。**最终的内容由用户自己决定。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
文件现在的内容
=======
文件在复原后，上一个版本的内容
>>>>>>> parent of e686989... modify 2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>修改完成以后，执行add和commit即可。</p>
<hr>
<p><code v-pre>git reset</code> 和<code v-pre>git revert</code>的区别可以用一句话概括下来：<code v-pre>git reset --hard</code> 撤销<font color=red>到</font>某次提交，<code v-pre>git revert</code>撤销某次提交 。</p>
</template>
