<template><h1 id="如何优雅的读取yml配置文件" tabindex="-1"><a class="header-anchor" href="#如何优雅的读取yml配置文件" aria-hidden="true">#</a> 如何优雅的读取yml配置文件？</h1>
<h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2>
<ol>
<li>数据通过缩进表示层级关系</li>
<li>缩进使用空格，空格个数不重要，但是同一层级的数据必须左对齐</li>
<li>区分大小写</li>
<li>数值和冒号之间使用空格隔开，<code v-pre>名称: 值</code></li>
<li>注释使用<code v-pre>#</code>，只能单行注释</li>
</ol>
<h2 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h2>
<ol>
<li>数字、字符串、<code v-pre>boolean</code>等</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>数组</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">project</span><span class="token punctuation">:</span>
  <span class="token key atrule">configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user <span class="token comment"># 服务名</span>
      <span class="token key atrule">Ip</span><span class="token punctuation">:</span> 192.168.2.136 <span class="token comment"># 请求的IP地址</span>

    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order <span class="token comment"># 服务名</span>
      <span class="token key atrule">Ip</span><span class="token punctuation">:</span> 192.168.2.137 <span class="token comment"># 请求的IP地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol>
<li>Map集合</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">project</span><span class="token punctuation">:</span>
  <span class="token key atrule">configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">urls</span><span class="token punctuation">:</span>
        <span class="token key atrule">key1</span><span class="token punctuation">:</span> val1
        <span class="token key atrule">key2</span><span class="token punctuation">:</span> val2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="获取步骤" tabindex="-1"><a class="header-anchor" href="#获取步骤" aria-hidden="true">#</a> 获取步骤</h2>
<ol>
<li>创建上述配置文件对应的实体类，获取peoject下的配置文件信息，封装成对象。首先添加注解<code v-pre>@ConfigurationProperties(prefix = &quot;project&quot;) </code>和<code v-pre>@Component</code>，<code v-pre>prefix</code>的值需要全部使用小写字母，不使用<code v-pre>@Component</code>注解，不能使用<code v-pre>@Autowired</code>获取对象。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"project"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestProperties</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 配置信息集合
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Configs</span><span class="token punctuation">></span></span> configs<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Configs</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * 服务名
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * ip地址
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> ip<span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 集合
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> urls<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>如果无法正常从yaml中获取相应的key和value时，给key和value加上单引号试试。</p>
</template>
