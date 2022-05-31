<template><h1 id="nginx屏蔽指定ip" tabindex="-1"><a class="header-anchor" href="#nginx屏蔽指定ip" aria-hidden="true">#</a> nginx屏蔽指定IP</h1>
<p>首先找到nginx的配置文件，只要在相关配置文件中添加一些配置语句即可。</p>
<h2 id="简单使用配置" tabindex="-1"><a class="header-anchor" href="#简单使用配置" aria-hidden="true">#</a> 简单使用配置</h2>
<ol>
<li>屏蔽单个IP地址，使用关键词deny，例如：<code v-pre>deny 10.11.12.13</code></li>
<li>允许单个IP地址，使用关键词allow，例如：<code v-pre>allow 10.11.12.14</code></li>
<li>屏蔽所有的IP地址：<code v-pre>deny all</code></li>
<li>允许所有IP地址：<code v-pre>allow all</code></li>
<li>屏蔽一定范围内IP地址，使用IP地址加子网掩码的组合。例如：
<ul>
<li>屏蔽10.0.0.1~10.255.255.254这个范围的ip地址：<code v-pre>deny 10.0.0.0/8</code></li>
<li>屏蔽10.11.0.1~10.11.255.254这个范围的IP地址：<code v-pre>deny 10.11.0.0/16</code></li>
<li>屏蔽10.11.12.1~10.11.12.254这个范围的IP地址：<code v-pre>deny 10.11.12.0/24</code></li>
</ul>
</li>
<li>允许一定范围内的IP地址访问，同上所示，关键词换成<code v-pre>allow</code>。</li>
</ol>
<p>以上只是最基本的使用方法，那么问题来了，nginx做代理的时候，可以监听多个地址或者指向不同的网站，那么该怎么只针对不同的网站做区分呢？</p>
<h2 id="指定代理网站添加屏蔽策略" tabindex="-1"><a class="header-anchor" href="#指定代理网站添加屏蔽策略" aria-hidden="true">#</a> 指定代理网站添加屏蔽策略</h2>
<p>针对上面的问题，我们只要把屏蔽IP的语句放在不同的位置就好了。在nginx的配置文件中，不同的语句块所产生的影响效果也是不一样的。</p>
<table>
<thead>
<tr>
<th>语句块</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>http{}</code></td>
<td>对nginx的所有服务生效，所有代理网站都会受到影响</td>
</tr>
<tr>
<td><code v-pre>server{}</code></td>
<td>指定的server服务，只对配置的代理网站起作用</td>
</tr>
<tr>
<td><code v-pre> location</code></td>
<td>指定的访问地址</td>
</tr>
<tr>
<td><code v-pre>limit_except</code></td>
<td>指定的http方法谓词</td>
</tr>
</tbody>
</table>
<p>如果现在有几百个不同的IP地址，它们又分布在不同的网段，这时候写在配置文件中，每个IP写一行，那这个配置文件岂不是要写的无比的长，可读性就太差了，修改起来也不方便。这时候我们该怎么办呢？</p>
<h2 id="写成单独的屏蔽策略配置文件" tabindex="-1"><a class="header-anchor" href="#写成单独的屏蔽策略配置文件" aria-hidden="true">#</a> 写成单独的屏蔽策略配置文件</h2>
<p>新建一个配置文件，例如<code v-pre>blockip.conf</code>，把所有的屏蔽ip策略可以写在这个文件中，最后我们只要在nginx的配置文件<code v-pre>nginx.conf</code>中引入即可，还可以在不同的语句块中引入，效果同上表所示。</p>
<p>屏蔽策略配置文件中可以写允许的IP地址，也可以写屏蔽的IP地址。但是有一点，<strong>当你只放开几个IP地址，然后屏蔽剩余所有IP地址时，一定要先写放行的ip地址。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 放行部分ip访问
allow 10.11.12.13;
allow 10.11.12.14;
allow 10.11.12.15;
 # 禁止其余ip访问
deny all; 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
