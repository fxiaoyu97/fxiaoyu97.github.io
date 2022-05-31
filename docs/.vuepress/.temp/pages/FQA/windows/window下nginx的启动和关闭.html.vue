<template><h1 id="window下nginx的启动和关闭" tabindex="-1"><a class="header-anchor" href="#window下nginx的启动和关闭" aria-hidden="true">#</a> Window下nginx的启动和关闭</h1>
<h2 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h2>
<ol>
<li>直接双击<code v-pre>nginx.exe</code>，双击后一个黑色的窗口一闪而过</li>
<li>打开cmd命令窗口，切换到nginx的根目录下面（也可以直接在资源管理器的地址栏输出cmd，然后敲回车，也能打开命令窗口），在命令窗口输入<code v-pre>nginx.exe</code>或者<code v-pre>start nginx</code>，接着敲回车</li>
<li>如果多点击了几次<code v-pre>nginx.exe</code>文件，或者在没有关闭nginx的情况下又执行了启动操作，那么有可能会启动多个nginx。</li>
</ol>
<h2 id="查询nginx是否启动成功" tabindex="-1"><a class="header-anchor" href="#查询nginx是否启动成功" aria-hidden="true">#</a> 查询nginx是否启动成功</h2>
<ol>
<li>直接在浏览器地址栏输入网址 <a href="http://localhost/" target="_blank" rel="noopener noreferrer">http://localhost:80<ExternalLinkIcon/></a> 回车，查看是否有<code v-pre>Welcome to nginx!</code>的页面出现，如果修改过配置文件中的端口号，使用修改后的端口号。</li>
<li>在命令行窗口输入命令：<code v-pre>tasklist /fi &quot;imagename eq nginx.exe&quot; </code></li>
</ol>
<h2 id="关闭nginx" tabindex="-1"><a class="header-anchor" href="#关闭nginx" aria-hidden="true">#</a> 关闭nginx</h2>
<p><strong>如果使用cmd命令窗口启动nginx，关闭cmd窗口是不能结束nginx进程的。</strong></p>
<ol>
<li>使用nginx命令：<code v-pre>nginx -s stop</code>（快速停止nginx）或 <code v-pre>nginx -s quit</code>（完整有序的停止nginx）</li>
<li>使用系统命令：<code v-pre>taskkill /f /t /im nginx.exe</code> （停止所有运行中的nginx）</li>
</ol>
</template>
