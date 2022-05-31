<template><h1 id="jdk8-新特性" tabindex="-1"><a class="header-anchor" href="#jdk8-新特性" aria-hidden="true">#</a> JDK8 新特性</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>以下列出两点重要特性：</p>
<ul>
<li>Lambda 表达式（匿名函数）</li>
<li>Stream 多线程并行数据处理（重要）</li>
</ul>
<h2 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h2>
<ul>
<li>接口的默认方法只需要使用 <code v-pre>default</code> 关键字即可，这个特征又叫做 <strong>扩展方法</strong></li>
<li>Lambda 表达式</li>
<li>Functional 接口 <strong>函数式接口</strong> 是指仅仅只包含一个抽象方法的接口，每一个该类型的 Lambda 表达式都会被匹配到这个抽象方法。你只需要给你的接口添加 <code v-pre>@FunctionalInterface</code> 注解</li>
<li>使用 <code v-pre>::</code> 双冒号关键字来传递方法(静态方法和非静态方法)</li>
<li>Predicate 接口和 Lambda 表达式</li>
<li>Function 接口
<ul>
<li>Function 有一个参数并且返回一个结果，并附带了一些可以和其他函数组合的默认方法</li>
<li>compose 方法表示在某个方法之前执行</li>
<li>andThen 方法表示在某个方法之后执行</li>
<li>注意：compose 和 andThen 方法调用之后都会把对象自己本身返回，这可以 <strong>方便链式编程</strong></li>
</ul>
</li>
<li>Supplier 接口，返回一个任意范型的值，和 Function 接口不同的是该接口 <strong>没有任何参数</strong></li>
<li>Consumer 接口，接收一个任意范型的值，和 Function 接口不同的是该接口 <strong>没有任何值</strong></li>
<li>Optional 类
<ul>
<li>Optional 不是接口而是一个类，这是个用来防止 <code v-pre>NullPointerException</code> 异常的辅助类型</li>
<li>Optional 被定义为一个简单的容器，其值可能是 null 或者不是 null。</li>
<li>在 Java8 之前一般某个函数应该返回非空对象但是偶尔却可能返回了 null，而在 Java8 中，不推荐你返回 null 而是返回 Optional。</li>
<li>这是一个可以为 null 的容器对象。</li>
<li>如果值存在则 <code v-pre>isPresent()</code> 方法会返回 true，调用 <code v-pre>get()</code> 方法会返回该对象。</li>
</ul>
</li>
</ul>
<h2 id="小栗子" tabindex="-1"><a class="header-anchor" href="#小栗子" aria-hidden="true">#</a> 小栗子</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>funtl<span class="token punctuation">.</span>jdk8<span class="token punctuation">.</span>feature<span class="token punctuation">.</span>lambda</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Lambda 基本用法
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Title: BaseLambda<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 *
 * <span class="token keyword">@author</span> Lusifer
 * <span class="token keyword">@version</span> 1.0.0
 * <span class="token keyword">@date</span> 2019/1/6 10:42
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseLambda</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">testForeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">testStreamDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Lambda 遍历
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testForeach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 定义一个数组</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">"尼尔机械纪元"</span><span class="token punctuation">,</span>
                <span class="token string">"关于我转生成为史莱姆这件事"</span><span class="token punctuation">,</span>
                <span class="token string">"实力至上主义教师"</span><span class="token punctuation">,</span>
                <span class="token string">"地狱少女"</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 转换成集合</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> acgs <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 传统的遍历方式</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"传统的遍历方式："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> acg <span class="token operator">:</span> acgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用 Lambda 表达式以及函数操作(functional operation)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Lambda 表达式以及函数操作："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        acgs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acg<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在 Java 8 中使用双冒号操作符(double colon operator)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"使用双冒号操作符："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        acgs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Stream 去重复
     * String 和 Integer 可以使用该方法去重
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testStreamDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Stream 去重复："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义一个数组</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">"尼尔机械纪元"</span><span class="token punctuation">,</span>
                <span class="token string">"尼尔机械纪元"</span><span class="token punctuation">,</span>
                <span class="token string">"关于我转生成为史莱姆这件事"</span><span class="token punctuation">,</span>
                <span class="token string">"关于我转生成为史莱姆这件事"</span><span class="token punctuation">,</span>
                <span class="token string">"实力至上主义教师"</span><span class="token punctuation">,</span>
                <span class="token string">"实力至上主义教师"</span><span class="token punctuation">,</span>
                <span class="token string">"地狱少女"</span><span class="token punctuation">,</span>
                <span class="token string">"地狱少女"</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 转换成集合</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> acgs <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Stream 去重复</span>
        acgs <span class="token operator">=</span> acgs<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 打印</span>
        acgs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div></template>
