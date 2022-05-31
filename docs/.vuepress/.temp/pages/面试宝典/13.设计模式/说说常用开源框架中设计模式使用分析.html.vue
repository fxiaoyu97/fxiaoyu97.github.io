<template><h1 id="说说常用开源框架中设计模式使用分析" tabindex="-1"><a class="header-anchor" href="#说说常用开源框架中设计模式使用分析" aria-hidden="true">#</a> 说说常用开源框架中设计模式使用分析</h1>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2>
<p>设计模式代表了软件设计的最佳实践，是经过不断总结提炼出来的代码设计经验的分类总结，这些模式或者可以简化代码，或者可以是代码逻辑开起来清晰，或者对功能扩展很方便</p>
<p>设计模式按照使用场景可以分为三大类：</p>
<ul>
<li>创建型模式（Creational Patterns）：对对象的实例化过程进行抽象，这使得一个系统可以不用关心这些对象是如何创建，组合，呈现的，对于类创建模式来说通过使用继承改变实例化的类，对于对象创建模式来说通过使用代理来实例化所需要的对象。
<ul>
<li>工厂模式</li>
<li>原型模式</li>
<li>构建者模式</li>
<li>单例模式</li>
</ul>
</li>
<li>结构型模式（Structural Patterns）：通过对多个类和对象进行组合得到复杂结构的类，一般使用继承继承或者成员变量引用形式来实现。
<ul>
<li>适配器模式</li>
<li>桥接模式</li>
<li>过滤器模式</li>
<li>组合模式</li>
<li>装饰者模式</li>
<li>门面模式</li>
<li>享元模式</li>
<li>代理模式</li>
</ul>
</li>
<li>行为型模式（Behavioral Patterns）：行为模式不仅表达了对象和类，还表达了他们之间的交互，涉及到了对象和算法的分配。
<ul>
<li>责任链模式</li>
<li>命令模式</li>
<li>解释器模式</li>
<li>迭代器模式</li>
<li>中介者模式</li>
<li>备忘录模式</li>
<li>观察者模式</li>
<li>状态模式</li>
<li>空对象模式</li>
<li>策略模式</li>
<li>模板方法模式</li>
<li>访问者模式</li>
</ul>
</li>
</ul>
<h2 id="二、责任链设计模式-chain-of-responsibility-pattern" tabindex="-1"><a class="header-anchor" href="#二、责任链设计模式-chain-of-responsibility-pattern" aria-hidden="true">#</a> 二、责任链设计模式（Chain of Responsibility Pattern）</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>责任链模式是把多个对象串联起来形成一个链状结构，让每个对象都有机会对事件发送者的请求进行处理。责任链模式是设计模式中的行为模式，设计意图是为了使事件发送者和事件接受者之间解耦。通常责任链链中的每个对象都有下一个对象的引入（例如 Tomcat 里面 <code v-pre>StandardPipeline</code> 用来管理 <code v-pre>valve</code>），或者有个同一个链管理工厂里面使用数组存放了所有的对象（例如 Tomcat 里面 <code v-pre>ApplicationFilterChain</code> 用来关系 filter）。</p>
<h3 id="tomcat-中-valve-链" tabindex="-1"><a class="header-anchor" href="#tomcat-中-valve-链" aria-hidden="true">#</a> Tomcat 中 Valve 链</h3>
<p>Tomcat 中 <code v-pre>StandardEngine</code>, <code v-pre>StandardHost</code>, <code v-pre>StandardContext</code> 里面都有自己 <code v-pre>StandardPipeline</code>,下面以 <code v-pre>StandardEngine</code> 里面 <code v-pre>StandardPipeline</code> 为例讲解</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-bf812e77605ba1a3.png" alt="img"></p>
<p>从上面类图可知道每个 <code v-pre>Valve</code> 都要继承 <code v-pre>ValveBase</code> 类，该类里面有一个 <code v-pre>Valve</code> 的引用，实际是链中下一个节点对象，<code v-pre>Valve</code> 就是通过每个 <code v-pre>Valve</code> 里面的 <code v-pre>next</code> 串联为链的。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-51ec28c227c785bd.png" alt="img"></p>
<p>每个 <code v-pre>valve</code> 的 <code v-pre>invoke</code> 方法里面调用 <code v-pre>next.invoke</code> 激活链中下一个节点,并且 <code v-pre>StandardEngine</code>, <code v-pre>StandardHost</code>, <code v-pre>StandardContext</code> 都有一个 <code v-pre>basic valve</code> 这个 <code v-pre>valve</code> 在链的末尾用来激活子容器的 <code v-pre>valve</code> 链。</p>
<h3 id="tomcat-中-filter-链" tabindex="-1"><a class="header-anchor" href="#tomcat-中-filter-链" aria-hidden="true">#</a> Tomcat 中 Filter 链</h3>
<p>Tomcat 中 <code v-pre>Filter</code> 链是使用 <code v-pre>ApplicationFilterChain</code> 来管理的，具体结构如下图：</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-a7ecb943aa15c858.png" alt="img"></p>
<p>可知 <code v-pre>Filter</code> 链不是像 <code v-pre>Valve</code> 一样在内部维护下个节点的引用，而是在 <code v-pre>ApplicationFilterChain</code> 中搞了个数组存放所有的 <code v-pre>Filter</code>，并通过 <code v-pre>n</code> 统计 <code v-pre>Filter</code> 总个数，<code v-pre>pos</code> 是当前 <code v-pre>filter</code> 的下标。</p>
<p><code v-pre>ApplicationFilterChain</code> 的 <code v-pre>doFilter</code> 代码如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public void doFilter(ServletRequest request, ServletResponse response)
        throws IOException, ServletException {
        ...
        internalDoFilter(request,response);
        ...
    }


private void internalDoFilter(ServletRequest request, ServletResponse response) throws IOException, ServletException {

        // Call the next filter if there is one
        if (pos &lt; n) {

            //获取filter链中下标为pos的filter
            ApplicationFilterConfig filterConfig = filters[pos++];
            Filter filter = null;
            try {
                filter = filterConfig.getFilter();
                support.fireInstanceEvent(InstanceEvent.BEFORE_FILTER_EVENT,
                                          filter, request, response);

                if (request.isAsyncSupported() &amp;&amp; "false".equalsIgnoreCase(
                        filterConfig.getFilterDef().getAsyncSupported())) {
                    request.setAttribute(Globals.ASYNC_SUPPORTED_ATTR,
                            Boolean.FALSE);
                }

                ...

                //调用自定义filter的dofilter方法
                filter.doFilter(request, response, this);


                support.fireInstanceEvent(InstanceEvent.AFTER_FILTER_EVENT,
                                          filter, request, response);
            } 
            ....

    }
   .....
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>当一个请求需要根据请求参数的不同由不同对象来处理时候。</li>
<li>当一个请求需要固定对象顺序处理，并且可扩展性的在固定顺序里面插入新的对象进行处理时候。</li>
</ul>
<h2 id="三、工厂模式-factory-pattern" tabindex="-1"><a class="header-anchor" href="#三、工厂模式-factory-pattern" aria-hidden="true">#</a> 三、工厂模式（Factory Pattern）</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<p>工厂模式是创建型模式，他封装了对象的创建过程，调用者使用具体的工厂方法根据参数就可以获取对应的对象。</p>
<h3 id="spring-框架中-beanfactory" tabindex="-1"><a class="header-anchor" href="#spring-框架中-beanfactory" aria-hidden="true">#</a> Spring 框架中 BeanFactory</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-2d102832375148ef.png" alt="img"></p>
<p>如图 <code v-pre>BeanFactory</code> 接口提供了 <code v-pre>getBean</code> 方法，在 <code v-pre>AbstractBeanFactory</code> 中实现了该方法，经过层层继承，实现，最后 <code v-pre>DefaultListableBeanFactory</code> 实现了 <code v-pre>BeanDefinitionRegistry</code> 接口用来保存 <code v-pre>bean</code> 定义，继承了 <code v-pre>AbstractAutowireCapableBeanFactory</code> 用来支撑 <code v-pre>autowired</code>。</p>
<h3 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> 举个例子</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Test
public void testBeanFactoy() throws NamingException, SQLException, ParseException, IOException {

    // 创建 Bean 工厂
    DefaultListableBeanFactory bf = new DefaultListableBeanFactory();

    // 给 Bean 工厂添加 Bean 定义, 解析 xml 里面的 Bean 放入 Bean 工厂
    loadBeanDefinitions(bf);

    // 根据名字从 Bean 工厂获取 Bean
    Hello hello = (Hello) bf.getBean("hello");
    hello.sayHello();

    Hello2 hello2 = (Hello2) bf.getBean("hello2");
    hello2.sayHello();


}

protected void loadBeanDefinitions(DefaultListableBeanFactory beanFactory) throws IOException {
    XmlBeanDefinitionReader beanDefinitionReader = new XmlBeanDefinitionReader(beanFactory);

    String[] configLocations = new String[] { "beans2.xml" };
    if (configLocations != null) {
        beanDefinitionReader.loadBeanDefinitions(configLocations);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>不同条件下创建不同实例，用于统一管理 Bean</li>
<li>不同条件下调用不同工厂方法获取不同场景下的 Bean</li>
</ul>
<h2 id="四、单例设计模式-singleton-pattern" tabindex="-1"><a class="header-anchor" href="#四、单例设计模式-singleton-pattern" aria-hidden="true">#</a> 四、单例设计模式（Singleton Pattern）</h2>
<h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3>
<p>单例模式是一种创建型模式，单例模式提供一个创建对象的接口，但是多次调用该接口返回的是同一个实例的引用，目的是为了保证只有一个实例，并且提供一个访问这个实例的统一接口。</p>
<h3 id="spring-中单例-bean-的创建" tabindex="-1"><a class="header-anchor" href="#spring-中单例-bean-的创建" aria-hidden="true">#</a> Spring 中单例 Bean 的创建</h3>
<p>Spring 中默认配置的 <code v-pre>bean</code> 的 <code v-pre>scope</code> 为 <code v-pre>singleton</code>，也就是单例作用域。那么看看它是如何做到的。在 <code v-pre>AbstractBeanFactory</code> 类里面的 <code v-pre>doGetBean</code> 方法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>protected Object doGetBean(
            final String name, final Class requiredType, final Object[] args, boolean typeCheckOnly) throws BeansException {

    final String beanName = transformedBeanName(name);
    Object bean = null;

    // 解决set循环依赖
    Object sharedInstance = getSingleton(beanName);
    if (sharedInstance != null &amp;&amp; args == null) {
        ...
    }

    else {
        ...
        // 创建单件bean.
        if (mbd.isSingleton()) {
            sharedInstance = getSingleton(beanName, new ObjectFactory() {
                public Object getObject() throws BeansException {
                    try {
                        return createBean(beanName, mbd, args);
                    }
                    catch (BeansException ex) {
                    ...
                        throw ex;
                    }
                }
            });
            bean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);
        }
       //创建原型bean
        else if (mbd.isPrototype()) {
            ...
        }
        //创建request作用域bean
        else {
            ...
        }
    }
            ...
    return bean;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>getSingleton 代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public Object getSingleton(String beanName, ObjectFactory singletonFactory) {
    Assert.notNull(beanName, "'beanName' must not be null");
    synchronized (this.singletonObjects) {
        Object singletonObject = this.singletonObjects.get(beanName);
        if (singletonObject == null) {
            ...
            beforeSingletonCreation(beanName);
            ...
            try {
                singletonObject = singletonFactory.getObject();
            }
            catch (BeanCreationException ex) {
                ...
            }
            finally {
                if (recordSuppressedExceptions) {
                    this.suppressedExceptions = null;
                }
                afterSingletonCreation(beanName);
            }
            addSingleton(beanName, singletonObject);
        }
        return (singletonObject != NULL_OBJECT ? singletonObject : null);
    }
}

protected void addSingleton(String beanName, Object singletonObject) {
    synchronized (this.singletonObjects) {
        this.singletonObjects.put(beanName, (singletonObject != null ? singletonObject : NULL_OBJECT));
        this.singletonFactories.remove(beanName);
        this.earlySingletonObjects.remove(beanName);
        this.registeredSingletons.add(beanName);
    }
}

private final Map singletonObjects = CollectionFactory.createConcurrentMapIfPossible(16);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>可知 Spring 内部四通过一个 <code v-pre>ConcurrentMap</code> 来管理单件 <code v-pre>bean</code> 的。获取 <code v-pre>bean</code> 时候会先看看 <code v-pre>singletonObjects</code> 中是否有，有则直接返回，没有则创建后放入。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-3013e4bf12ef0274.png" alt="img"></p>
<p>Spring 的 <code v-pre>bean</code> 工厂管理的单例模式管理的是多个 <code v-pre>bean</code> 实例的单例，是工厂模式管理所有的 <code v-pre>bean</code>,而每个 <code v-pre>bean</code> 的创建又使用了单例模式。</p>
<h3 id="使用场景-2" tabindex="-1"><a class="header-anchor" href="#使用场景-2" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>同一个 JVM 应用的不同模块需要使用同一个对象实例进行信息共享。</li>
<li>需要同一个实例来生成全局统一的序列号</li>
</ul>
<h2 id="五、原型设计模式-prototype-pattern" tabindex="-1"><a class="header-anchor" href="#五、原型设计模式-prototype-pattern" aria-hidden="true">#</a> 五、原型设计模式（Prototype Pattern）</h2>
<h3 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h3>
<p>相比单例设计模式，原型模式是每次创建一个对象，下面看下 Spring 是如何使用原型模式的</p>
<h3 id="spring-中原型-bean-的创建" tabindex="-1"><a class="header-anchor" href="#spring-中原型-bean-的创建" aria-hidden="true">#</a> Spring 中原型 bean 的创建</h3>
<p>创建原型 <code v-pre>bean</code> 需要在 <code v-pre>xml</code> 特别说明：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;bean id="hello" class="com.lusifer.demo.Hello" scope="prototype"/>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>protected &lt;T> T doGetBean(
        final String name, final Class&lt;T> requiredType, final Object[] args, boolean typeCheckOnly)
        throws BeansException {

    final String beanName = transformedBeanName(name);
    Object bean;

    // Eagerly check singleton cache for manually registered singletons.
    Object sharedInstance = getSingleton(beanName);
    if (sharedInstance != null &amp;&amp; args == null) {
     ...
    }

    else {
        ...

        try {
            ...

            // Create bean instance.
            if (mbd.isSingleton()) {
                ...
            }
            //创建原型bean
            else if (mbd.isPrototype()) {
                // It's a prototype -> create a new instance.
                Object prototypeInstance = null;
                try {
                    beforePrototypeCreation(beanName);
                    prototypeInstance = createBean(beanName, mbd, args);
                }
                finally {
                    afterPrototypeCreation(beanName);
                }
                bean = getObjectForBeanInstance(prototypeInstance, name, beanName, mbd);
            }

            else {
                ...
            }
        }
        catch (BeansException ex) {
            cleanupAfterBeanCreationFailure(beanName);
            throw ex;
        }
    }
 ...
    return (T) bean;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p><code v-pre>createBean</code> 函数里面则是根据 <code v-pre>bean</code> 定义创建新 <code v-pre>bean</code>，感兴趣的可以看看。</p>
<h3 id="使用场景-3" tabindex="-1"><a class="header-anchor" href="#使用场景-3" aria-hidden="true">#</a> 使用场景</h3>
<p>当有业务场景使用某个 <code v-pre>bean</code> 时候需要使用自己的一个拷贝的时候使用。</p>
<h2 id="六、策略模式-strategy-pattern" tabindex="-1"><a class="header-anchor" href="#六、策略模式-strategy-pattern" aria-hidden="true">#</a> 六、策略模式（Strategy Pattern）</h2>
<h3 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h3>
<p>策略模式属于行为性模式，它定义一系列的算法对象,使用时候可以使它们相互替换。</p>
<h3 id="spring-中-bean-实例化策略" tabindex="-1"><a class="header-anchor" href="#spring-中-bean-实例化策略" aria-hidden="true">#</a> Spring 中 bean 实例化策略</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-24f08d52b6fc7fba.png" alt="img"></p>
<p>从图知道：接口 <code v-pre>InstantiationStrategy</code> 是实例化策略接口类，它定义了三个实例化接口，然后 <code v-pre>SimpleInstantiationStrategy</code> 实现了该策略，它主要做一些简单的根据构造函数实例号 <code v-pre>bean</code> 的工作，然后 <code v-pre>CglibSubclassingInstantiationStrategy</code> 又继承了 <code v-pre>SimpleInstantiationStrategy</code> 新增了方法注入方式根据 <code v-pre>cglib</code> 生成代理类实例化方法。</p>
<p>在 <code v-pre>AbstractAutowireCapableBeanFactory</code> 中管理了该策略的一个对象，默认是 <code v-pre>CglibSubclassingInstantiationStrategy</code> 策略，运行时候可以通过 <code v-pre>setInstantiationStrategy</code> 改变实例化策略，如果你自己写个个策略的话。</p>
<h3 id="spring-中-aop-代理策略" tabindex="-1"><a class="header-anchor" href="#spring-中-aop-代理策略" aria-hidden="true">#</a> Spring 中 AOP 代理策略</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-7e0b0badc2deef53.png" alt="img"></p>
<p>首先看 <code v-pre>AopProxyFactory</code> 接口类提供了 <code v-pre>createAopProxy</code> 接口，这个是策略模式的接口方法。然后 <code v-pre>DefaultAopProxyFactory</code> 实现了该接口作为策略的实现者。然后 <code v-pre>ProxyCreatorSupport</code> 里面引用了 <code v-pre>AopProxyFactory</code>，并且提供了 <code v-pre>get</code>, <code v-pre>set</code> 方法用来运行时改变策略，这里 Spring 只实现了 <code v-pre>DefaultAopProxyFactory</code> 这一个策略，如果需要自己也可以写个。</p>
<p><code v-pre>DefaultAopProxyFactory</code> 里面的 <code v-pre>createAopProxy</code> 的逻辑如下，可以在运行时根据参数决定用 <code v-pre>Cglib</code> 策略还是 <code v-pre>JDK动态代理</code> 策略生成代理类：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public AopProxy createAopProxy(AdvisedSupport config) throws AopConfigException {
    // 如果 XML 打开了优化开关，或者设置为了代理目标类，或者目前类没有接口
    if (config.isOptimize() || config.isProxyTargetClass() || hasNoUserSuppliedProxyInterfaces(config)) {
        Class&lt;?> targetClass = config.getTargetClass();
        if (targetClass == null) {
            throw new AopConfigException("TargetSource cannot determine target class: " +
                    "Either an interface or a target is required for proxy creation.");
        }

        // 如果有接口，或者通过 Proxy.newProxyInstance 生成的，则使用 JDK动态代理
        if (targetClass.isInterface() || Proxy.isProxyClass(targetClass)) {
            return new JdkDynamicAopProxy(config);
        }

        // 使用 CGLIB
        return new ObjenesisCglibAopProxy(config);
    }
    else {
        // 使用 JDK动态代理
        return new JdkDynamicAopProxy(config);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>另外 <code v-pre>AopProxy</code> 也是一个策略接口类，具体实现的策略为 <code v-pre>JdkDynamicAopProxy</code>，<code v-pre>CglibAopProxy</code>，<code v-pre>ObjenesisCglibAopProxy</code></p>
<h3 id="tomcat-中-digester-解析-server-xml" tabindex="-1"><a class="header-anchor" href="#tomcat-中-digester-解析-server-xml" aria-hidden="true">#</a> Tomcat 中 Digester 解析 server.xml</h3>
<p>Tomcat 中的 <code v-pre>Digester</code> 是为了解析 <code v-pre>server.xml</code> 的，其中每个元素都有一个解析规则就是 <code v-pre>Rule</code>，DigestER 一开始先指定不同的解析策略（Rule），然后在具体解析 server.xml 时候根据节点不同使用不同解析策略来解析节点。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-2ef6c46b46d18914.png" alt="img"></p>
<p>如图在解析每个节点时候会先找到该节点对应的解析策略，然后循环去调用所有解析策略的方法去处理。</p>
<h3 id="使用场景-4" tabindex="-1"><a class="header-anchor" href="#使用场景-4" aria-hidden="true">#</a> 使用场景</h3>
<p>运行时根据条件的不同使用不同的策略处理一个事情，与责任链不同在于，责任链是一个链条，一个事情可以被责任链里面所有节点处理，而 策略模式则是只有有一个对象来处理。</p>
<h2 id="七、门面模式-facade-pattern" tabindex="-1"><a class="header-anchor" href="#七、门面模式-facade-pattern" aria-hidden="true">#</a> 七、门面模式（Facade Pattern）</h2>
<h3 id="介绍-5" tabindex="-1"><a class="header-anchor" href="#介绍-5" aria-hidden="true">#</a> 介绍</h3>
<p>门面模式是一种结构性模式，它通过新增一个门面类对外暴露系统提供的一部分功能，或者屏蔽了内部系统的复杂性，对外部仅仅暴露一个简单的接口，或者通过调用不同的服务对外提供统一的接口，让使用者对这些内部服务透明化。</p>
<h3 id="模板引擎-velocity-中门面模式使用" tabindex="-1"><a class="header-anchor" href="#模板引擎-velocity-中门面模式使用" aria-hidden="true">#</a> 模板引擎 Velocity 中门面模式使用</h3>
<p>Velocity 里面的 <code v-pre>VelocityEngine</code> 和 <code v-pre>Velocity</code> 类都是 <code v-pre>RuntimeInstance</code> 类的门面，后者提供了模板渲染的所有功能，前两者则是内部维护 <code v-pre>RuntimeInstance</code> 的实例，具体工作还是委托给 <code v-pre>RuntimeInstance</code> 来实现。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-66c15140bfe5ad36.png" alt="img"></p>
<p>如图 <code v-pre>RuntimeInstance</code> 提供了 <code v-pre>Velocity</code> 引擎的所用功能，<code v-pre>VelocityEngine</code> 内部直接引用了 <code v-pre>RuntimeInstance</code> 的一个实例，<code v-pre>VelocityEngine</code> 对外暴露的服务都是委托 <code v-pre>RuntimeInstance</code> 实现，并且每次 <code v-pre>new</code> 一个 <code v-pre>VelocityEngine</code> 内部都会有 <code v-pre>RuntimeInstance</code> 的一个实例被创建。而 <code v-pre>Velocity</code> 类调用了单例模式类 <code v-pre>RuntimeSingleton</code> 里面的方法，<code v-pre>RuntimeSingleton</code> 又是 <code v-pre>RuntimeInstance</code> 的一个单例模式。</p>
<h3 id="使用场景-5" tabindex="-1"><a class="header-anchor" href="#使用场景-5" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>当需要对外屏蔽一个系统的复杂性时候可以考虑使用门面模式对外提供简单可读性高的接口类</li>
<li>当需要对外部暴露系统一部分权限的接口时候可以考虑使用门面模式减少系统权限。</li>
<li>当系统需要调用不同服务汇总后在对外提供服务时候可以考虑使用门面模式对外屏蔽细节，之暴露一个接口。</li>
</ul>
<h2 id="八、装饰器模式-decorator-pattern" tabindex="-1"><a class="header-anchor" href="#八、装饰器模式-decorator-pattern" aria-hidden="true">#</a> 八、装饰器模式（Decorator Pattern）</h2>
<h3 id="介绍-6" tabindex="-1"><a class="header-anchor" href="#介绍-6" aria-hidden="true">#</a> 介绍</h3>
<p>装饰器模式是一种结构性模式，它作用是对对象已有功能进行增强，但是不改变原有对象结构。这避免了通过继承方式进行功能扩充导致的类体系臃肿。</p>
<h3 id="spring-中-beandefinitiondecorator" tabindex="-1"><a class="header-anchor" href="#spring-中-beandefinitiondecorator" aria-hidden="true">#</a> Spring 中 BeanDefinitionDecorator</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-f9a9a083d138e9d0.png" alt="img"></p>
<p>如图 <code v-pre>ScopedProxyBeanDefinitionDecorator</code> 实现了 <code v-pre>decorate</code> 方法用来对 <code v-pre>scope</code> 作用域为 <code v-pre>request</code> 的 <code v-pre>bean</code> 定义进行包装。具体时序图为：</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-cab488a963d04657.png" alt="img"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class ScopedProxyBeanDefinitionDecorator implements BeanDefinitionDecorator {

    private static final String PROXY_TARGET_CLASS = "proxy-target-class";


    @Override
    public BeanDefinitionHolder decorate(Node node, BeanDefinitionHolder definition, ParserContext parserContext) {
        boolean proxyTargetClass = true;
        if (node instanceof Element) {
            Element ele = (Element) node;
            if (ele.hasAttribute(PROXY_TARGET_CLASS)) {
                proxyTargetClass = Boolean.valueOf(ele.getAttribute(PROXY_TARGET_CLASS));
            }
        }

        // 创建scoped的代理类，并注册到容器
        BeanDefinitionHolder holder =
                ScopedProxyUtils.createScopedProxy(definition, parserContext.getRegistry(), proxyTargetClass);
        String targetBeanName = ScopedProxyUtils.getTargetBeanName(definition.getBeanName());
        parserContext.getReaderContext().fireComponentRegistered(
                new BeanComponentDefinition(definition.getBeanDefinition(), targetBeanName));
        return holder;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>关于 <code v-pre>ScopedProxyBeanDefinitionDecorator</code> 干啥用的呢：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;bean id="lavaPvgInfo" class="com.alibaba.lava.privilege.PrivilegeInfo"
    scope="request">
    &lt;property name="aesKey" value="666" />
    &lt;aop:scoped-proxy />
&lt;/bean>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其实就是处理 <code v-pre>&lt;aop:scoped-proxy /&gt;</code> 的，具体作用是包装 <code v-pre>lavaPvgInfo</code> 的 <code v-pre>bean</code> 定义为 <code v-pre>ScopedProxyFactoryBean</code>，作用是实现 <code v-pre>request</code> 作用域 <code v-pre>bean</code></p>
<h3 id="commons-collections-包中-listutils" tabindex="-1"><a class="header-anchor" href="#commons-collections-包中-listutils" aria-hidden="true">#</a> commons-collections 包中 ListUtils</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-afa39758e0c2213d.png" alt="img"></p>
<ul>
<li><code v-pre>ListUtils</code> 中的四个方法分别依赖 <code v-pre>list</code> 的四种装饰器类对 <code v-pre>List</code> 功能进行扩充和限制。</li>
<li>其中 <code v-pre>FixedSizeList</code> 类通过禁止 <code v-pre>add/remove</code> 操作保证 <code v-pre>list</code> 的大小固定，但是可以修改元素内容</li>
<li>其中 <code v-pre>UnmodifiableList</code> 类通过禁用 <code v-pre>add</code>, <code v-pre>clear</code>, <code v-pre>remove</code>, <code v-pre>set</code>,保证 <code v-pre>list</code> 的内容不被修改</li>
<li>其中 <code v-pre>SynchronizedList</code> 类通过使用 <code v-pre>Lock</code> 来保证 <code v-pre>add</code>, <code v-pre>set</code>, <code v-pre>get</code>, <code v-pre>remove</code> 等的同步安全</li>
<li>其中 <code v-pre>LazyList</code> 类则当调用 <code v-pre>get</code> 方法发现 <code v-pre>list</code> 里面不存在对象时候，自动使用 <code v-pre>factory</code> 创建对象.</li>
</ul>
<h3 id="使用场景-6" tabindex="-1"><a class="header-anchor" href="#使用场景-6" aria-hidden="true">#</a> 使用场景</h3>
<p>在不改变原有类结构基础上，新增或者限制或者改造功能时候。</p>
<h2 id="九、适配器模式-adapter-pattern" tabindex="-1"><a class="header-anchor" href="#九、适配器模式-adapter-pattern" aria-hidden="true">#</a> 九、适配器模式（Adapter Pattern）</h2>
<h3 id="介绍-7" tabindex="-1"><a class="header-anchor" href="#介绍-7" aria-hidden="true">#</a> 介绍</h3>
<p>适配器模式属于结构性模式，它为两个不同接口之间互通提供了一种手段。</p>
<h3 id="spring-中-methodinterceptor-适配器" tabindex="-1"><a class="header-anchor" href="#spring-中-methodinterceptor-适配器" aria-hidden="true">#</a> Spring 中 MethodInterceptor 适配器</h3>
<p>在 Spring Aop 框架中，<code v-pre>MethodInterceptor</code> 接口被用来拦截指定的方法，对方法进行增强。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-5eacbfe80fc60237.png" alt="img"></p>
<p>大家都知道在 AOP 中每个 <code v-pre>advistor</code> 里面会有一个 <code v-pre>advice</code> 具体做切面动作，Spring 提供了 <code v-pre>AspectJAfterReturningAdvice</code>，<code v-pre>AspectJMethodBeforeAdvice</code>，<code v-pre>AspectJAroundAdvice</code>，<code v-pre>AspectJAfterAdvice</code> 这几个 <code v-pre>advice</code>,在 XML 配置 AOP 时候会指定 <code v-pre>&lt;aop:after-returning/&gt;</code>, <code v-pre>&lt;aop:before/&gt;</code>, <code v-pre>&lt;aop:around/&gt;</code>, <code v-pre>&lt;aop:after/&gt;</code>, 其实内部就是创建上面对应的这些 <code v-pre>advice</code>。</p>
<p>从图知道 <code v-pre>AspectJAfterReturningAdvice</code> 和 <code v-pre>AspectJMethodBeforeAdvice</code> 没有实现 <code v-pre>MethodInterceptor</code> 接口，其他两者则实现了该接口。而 Spring Aop 的方法拦截器却必须是实现了 <code v-pre>MethodInterceptor</code> 的，所以 Spring 提供了对应的适配器来适配这个问题,分别是 <code v-pre>MethodBeforeAdviceAdapter</code> 和 <code v-pre>AfterReturningAdviceAdapter</code> 和 <code v-pre>ThrowsAdviceAdapter</code>。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-072d44bda8af7ef9.png" alt="img"></p>
<p>看下 <code v-pre>DefaultAdvisorAdapterRegistry</code> 的 <code v-pre>getInterceptors</code> 方法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public MethodInterceptor[] getInterceptors(Advisor advisor) throws UnknownAdviceTypeException {
    List&lt;MethodInterceptor> interceptors = new ArrayList&lt;MethodInterceptor>(3);

    //从advistor中获取advice
    Advice advice = advisor.getAdvice();

    //如果实现了MethodInterceptor则直接加入，比如AspectJAroundAdvice，AspectJAfterAdvice
    if (advice instanceof MethodInterceptor) {
        interceptors.add((MethodInterceptor) advice);
    }

    //否者看是否有当前advice的适配器，首先检验是否支持，支持则返回对应的适配器
    for (AdvisorAdapter adapter : this.adapters) {
        if (adapter.supportsAdvice(advice)) {
            interceptors.add(adapter.getInterceptor(advisor));
        }
    }
    if (interceptors.isEmpty()) {
        throw new UnknownAdviceTypeException(advisor.getAdvice());
    }
    return interceptors.toArray(new MethodInterceptor[interceptors.size()]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>以 <code v-pre>MethodBeforeAdviceAdapter</code> 为例子看下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class MethodBeforeAdviceAdapter implements AdvisorAdapter, Serializable {

    public boolean supportsAdvice(Advice advice) {
        return (advice instanceof MethodBeforeAdvice);
    }

    public MethodInterceptor getInterceptor(Advisor advisor) {
        MethodBeforeAdvice advice = (MethodBeforeAdvice) advisor.getAdvice();
        return new MethodBeforeAdviceInterceptor(advice);
    }

}

public class MethodBeforeAdviceInterceptor implements MethodInterceptor, Serializable {

    private MethodBeforeAdvice advice;


    /**
     * Create a new MethodBeforeAdviceInterceptor for the given advice.
     * @param advice the MethodBeforeAdvice to wrap
     */
    public MethodBeforeAdviceInterceptor(MethodBeforeAdvice advice) {
        Assert.notNull(advice, "Advice must not be null");
        this.advice = advice;
    }

    public Object invoke(MethodInvocation mi) throws Throwable {
        this.advice.before(mi.getMethod(), mi.getArguments(), mi.getThis() );
        return mi.proceed();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>可知 <code v-pre>MethodBeforeAdviceInterceptor</code> 继承了 <code v-pre>MethodInterceptor</code> 作为了一个适配器内部委托请求给 <code v-pre>MethodBeforeAdvice</code>。</p>
<h3 id="使用场景-7" tabindex="-1"><a class="header-anchor" href="#使用场景-7" aria-hidden="true">#</a> 使用场景</h3>
<ul>
<li>两个系统交互时候由于接口参数不一样没办法直接对接，则可以搞个适配器接口做参数转换。</li>
<li>适配器模式经常是在一个系统或者设计已经定型时候用的，而不是在初始设计时候。一般是因为不影响现在业务情况下，通过适配方式统一接口</li>
</ul>
<h2 id="十、模板方法模式-template-pattern" tabindex="-1"><a class="header-anchor" href="#十、模板方法模式-template-pattern" aria-hidden="true">#</a> 十、模板方法模式（Template Pattern）</h2>
<h3 id="介绍-8" tabindex="-1"><a class="header-anchor" href="#介绍-8" aria-hidden="true">#</a> 介绍</h3>
<p>模板设计模式是一种行为设计模式，它使用一个抽象类定义了一个模板，这个模板里面定义了一系列的接口，子类则只需要继承该抽象类并且根据需要重写一部分接口。</p>
<h3 id="ibatis2-中-abstractdaotemplate" tabindex="-1"><a class="header-anchor" href="#ibatis2-中-abstractdaotemplate" aria-hidden="true">#</a> ibatis2 中 AbstractDAOTemplate</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-27b737718c1a71bc.png" alt="img"></p>
<p>如图 <code v-pre>AbstractDAOTemplate</code> 是抽象模板类，里面定义了 <code v-pre>configure</code> 方法，<code v-pre>configure</code> 方法里面定义了好多 <code v-pre>protected</code> 方法，其中就有些是抽象方法。类 <code v-pre>SpringDAOTemplate</code>，<code v-pre>IbatisDAOTemplate</code>，<code v-pre>GenericCIDAOTemplate</code>，<code v-pre>GenericSIDAOTemplate</code> 则继承了 <code v-pre>AbstractDAOTemplate</code> 类并重写了一部分方法。</p>
<h3 id="tomcat-中-digester-里面的-rule" tabindex="-1"><a class="header-anchor" href="#tomcat-中-digester-里面的-rule" aria-hidden="true">#</a> Tomcat 中 Digester 里面的 Rule</h3>
<p>Tomcat 中的 <code v-pre>Digester</code> 是为了解析 <code v-pre>server.xml</code> 的，其中每个元素都有一个解析规则就是 <code v-pre>Rule</code> ,类图如下：</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-d5e4f335d709ab29.png" alt="img"></p>
<p>如图：Rule 是抽象类，对于每个解析的节点来说 Rule 提供了解析所需所有的方法，而他的子类则根据自己的特殊性重写一部分方法来支持自己的特性。</p>
<h3 id="tomcat-中-endpoint" tabindex="-1"><a class="header-anchor" href="#tomcat-中-endpoint" aria-hidden="true">#</a> Tomcat 中 Endpoint</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-bd4bb3f72e7da976.png" alt="img"></p>
<p>如图 <code v-pre>AbstractEndpoint</code> 是个抽象类，定义了 <code v-pre>Endpoint</code> 的所有接口，然后 <code v-pre>JIoEndpoint</code> 继承了该类并且重写了一部分重要的方法实现了 <code v-pre>BIO</code> 方式 <code v-pre>endpoint</code> , <code v-pre>NioEndpoint</code> 则重写了方法实现了 <code v-pre>NIO</code> 的 <code v-pre>endpoint</code>.</p>
<h3 id="使用场景-8" tabindex="-1"><a class="header-anchor" href="#使用场景-8" aria-hidden="true">#</a> 使用场景</h3>
<p>当多个子类具有共同的操作流程逻辑，并且其中某些流程节点操作需要自己定制化时候。</p>
<h2 id="十一、建造者模式-builder-pattern" tabindex="-1"><a class="header-anchor" href="#十一、建造者模式-builder-pattern" aria-hidden="true">#</a> 十一、建造者模式（Builder Pattern）</h2>
<h3 id="介绍-9" tabindex="-1"><a class="header-anchor" href="#介绍-9" aria-hidden="true">#</a> 介绍</h3>
<p>建造者模式是一种创建型模式，将一个复制对象的创建屏蔽到接口内部，用户使用时候只需要传递固定的参数，内部就会执行复杂逻辑后返回会用户需要的对象，用户不需要知道创建的细节。</p>
<h3 id="mybatis-中的-sqlsessionfactorybuilder" tabindex="-1"><a class="header-anchor" href="#mybatis-中的-sqlsessionfactorybuilder" aria-hidden="true">#</a> Mybatis 中的 SqlSessionFactoryBuilder</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-96342ae1a578c8c6.png" alt="img"></p>
<p>如图 MyBaits 中的 <code v-pre>SqlSessionFactoryBuilder</code> 就是典型的创建者模式，他内部有多个 <code v-pre>build</code> 方法，根据参数的不同创建出 <code v-pre>SqlSessionFactory</code> 对象，使用者只需要传递具体参数而不用关系内部是如何创建出需要的对象的。<code v-pre>SqlSessionFactoryBean</code> 大家应该很熟悉，在 xml 里面配置的。</p>
<h3 id="使用场景-9" tabindex="-1"><a class="header-anchor" href="#使用场景-9" aria-hidden="true">#</a> 使用场景</h3>
<p>当一个对象比较复杂并且容易出错时候，可以考虑这种模式去屏蔽创造细节。</p>
<h2 id="十二、观察者模式-observer-pattern" tabindex="-1"><a class="header-anchor" href="#十二、观察者模式-observer-pattern" aria-hidden="true">#</a> 十二、观察者模式（Observer Pattern）</h2>
<h3 id="介绍-10" tabindex="-1"><a class="header-anchor" href="#介绍-10" aria-hidden="true">#</a> 介绍</h3>
<p>观察者模式是一种行为模式，它定义了当一个对象的状态或者属性发生变化时候，通通知其他对这些状态感兴趣的对象。观察者模式也叫发布-订阅模式，就是说当你订阅了摸一个主体时候，如果发布者改变了主题内容，那么所有订阅这个主体者都会受到通知。</p>
<h3 id="spring-中-applicationlistener" tabindex="-1"><a class="header-anchor" href="#spring-中-applicationlistener" aria-hidden="true">#</a> Spring 中 ApplicationListener</h3>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-eee8a0c0437a83d5.png" alt="img"></p>
<p>如图 黄色部分的 <code v-pre>listener</code> 们可以认为是订阅者，红色的 <code v-pre>context</code> 是发布者，<code v-pre>context</code> 在 <code v-pre>IOC</code> 不同状态会给这些订阅者发布不同的消息通知订阅者容器状态。蓝色的为具体的事件（这里为容器不同状态），其中 <code v-pre>ContextRefreshedEvent</code> 是 <code v-pre>IOC</code> 刷新完成（也就是 <code v-pre>bean</code> 解析完成，创建完毕并且 <code v-pre>autowired</code> 完成）后的事件这个经常用。 。这里 <code v-pre>context</code> 并不是直接来管理黄色的 <code v-pre>listener</code> 订阅者的，而是委托给了绿色的部分，该部分是可以增加删除订阅者，并且发布事件给订阅者。</p>
<p>其实 Tomcat 中的 <code v-pre>Lifecycle</code> 也是这种机制</p>
<h3 id="使用场景-10" tabindex="-1"><a class="header-anchor" href="#使用场景-10" aria-hidden="true">#</a> 使用场景</h3>
<p>满足发布-订阅条件的，当一个对象状态或者属性变化，需要把这种变化通知到订阅者时候。</p>
<h2 id="十三、命令模式-command-pattern" tabindex="-1"><a class="header-anchor" href="#十三、命令模式-command-pattern" aria-hidden="true">#</a> 十三、命令模式（Command Pattern）</h2>
<h3 id="介绍-11" tabindex="-1"><a class="header-anchor" href="#介绍-11" aria-hidden="true">#</a> 介绍</h3>
<p>命令模式是一种行为模式，通过把命令封装为一个对象，命令发送者把命令对象发出后，就不去管是谁来接受处理这个命令，命令接受者接受到命令对象后进行处理，也不用管命令是谁发出的，所以命令模式实现了发送者与接受者之间的解耦，而具体把命令发送给谁还需要一个控制器。</p>
<h3 id="tomcat-中命令模式" tabindex="-1"><a class="header-anchor" href="#tomcat-中命令模式" aria-hidden="true">#</a> Tomcat 中命令模式</h3>
<p>Tomcat 作为一个服务器本身会接受外部大量请求，当一个请求过来后 Tomcat 根据域名去找对应的 host,找到 host 后会根据应用名去找具体的 context(应用)，然后具体应用处理请求。对于具体 host 来说他不关心这个请求是谁给的，对应请求来说他不必关心谁来处理，但是两者是通过 request 封装请求对象进行关联起来。</p>
<p><img src="@source/面试宝典/13.设计模式/img/5879294-f9e90281b20fe688.png" alt="img"></p>
<p>Tomcat 中 <code v-pre>Connector</code> 作为命令发出者，<code v-pre>Connector</code> 接受到请求后把请求内容封装为 <code v-pre>request</code> 对象（命令对象），然后使用 <code v-pre>CoyoteAdapter</code> 作为分发器把请求具体发配到具体的 <code v-pre>host</code>, <code v-pre>host</code> 在根据 <code v-pre>request</code> 对象找到具体的 <code v-pre>context</code>,至此找到了具体的应用，交给具体应用处理。</p>
<p>另外对于使用 SpringMVC 的应用来说，上面找到具体应用，但是具体交给那个 controller 来处理那，这是不是也是命令模式的使用那。</p>
<h3 id="使用场景-11" tabindex="-1"><a class="header-anchor" href="#使用场景-11" aria-hidden="true">#</a> 使用场景</h3>
<p>当事件发送者和接受者直接需要完全解耦（直接并不存在引用关系）时候。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>设计模式中每一个模式都描述了在我们工作中不断重复发生的问题，以及问题的解决方案，所以真正掌握设计模式可以避免我们做不必要的重复劳动。</p>
</template>
