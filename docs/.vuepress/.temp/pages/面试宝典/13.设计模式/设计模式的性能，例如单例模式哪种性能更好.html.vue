<template><h1 id="设计模式的性能-例如单例模式哪种性能更好" tabindex="-1"><a class="header-anchor" href="#设计模式的性能-例如单例模式哪种性能更好" aria-hidden="true">#</a> 设计模式的性能，例如单例模式哪种性能更好</h1>
<p>单例模式是最常用到的设计模式之一，熟悉设计模式的朋友对单例模式都不会陌生。一般介绍单例模式的书籍都会提到 <strong>饿汉式</strong> 和 <strong>懒汉式</strong> 这两种实现方式。但是除了这两种方式，本文还会介绍其他几种实现单例的方式，让我们来一起看看吧。</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>单例模式是一种常用的软件设计模式，其定义是单例对象的类只能允许一个实例存在。</p>
<p>许多时候整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为。比如在某个服务器程序中，该服务器的配置信息存放在一个文件中，这些配置数据由一个单例对象统一读取，然后服务进程中的其他对象再通过这个单例对象获取这些配置信息。这种方式简化了在复杂环境下的配置管理。</p>
<h2 id="基本的实现思路" tabindex="-1"><a class="header-anchor" href="#基本的实现思路" aria-hidden="true">#</a> 基本的实现思路</h2>
<p>单例模式要求类能够有返回对象一个引用(永远是同一个)和一个获得该实例的方法（必须是静态方法，通常使用 <code v-pre>getInstance</code> 这个名称）。</p>
<p>单例的实现主要是通过以下两个步骤：</p>
<ol>
<li>将该类的构造方法定义为私有方法，这样其他处的代码就无法通过调用该类的构造方法来实例化该类的对象，只有通过该类提供的静态方法来得到该类的唯一实例；</li>
<li>在该类内提供一个静态方法，当我们调用这个方法时，如果类持有的引用不为空就返回这个引用，如果类保持的引用为空就创建该类的实例并将实例的引用赋予该类保持的引用。</li>
</ol>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<p>单例模式在多线程的应用场合下必须小心使用。如果当唯一实例尚未创建时，有两个线程同时调用创建方法，那么它们同时没有检测到唯一实例的存在，从而同时各自创建了一个实例，这样就有两个实例被构造出来，从而违反了单例模式中实例唯一的原则。 解决这个问题的办法是为指示类是否已经实例化的变量提供一个互斥锁(虽然这样会降低效率)。</p>
<h2 id="单例模式的八种写法" tabindex="-1"><a class="header-anchor" href="#单例模式的八种写法" aria-hidden="true">#</a> 单例模式的八种写法</h2>
<h3 id="一、饿汉式-静态常量-可用" tabindex="-1"><a class="header-anchor" href="#一、饿汉式-静态常量-可用" aria-hidden="true">#</a> 一、饿汉式（静态常量）[可用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private final static Singleton INSTANCE = new Singleton();

    private Singleton(){}

    public static Singleton getInstance(){
        return INSTANCE;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>优点：这种写法比较简单，就是在类装载的时候就完成实例化。避免了线程同步问题。</li>
<li>缺点：在类装载的时候就完成实例化，没有达到 Lazy Loading 的效果。如果从始至终从未使用过这个实例，则会造成内存的浪费。</li>
</ul>
<h3 id="二、饿汉式-静态代码块-可用" tabindex="-1"><a class="header-anchor" href="#二、饿汉式-静态代码块-可用" aria-hidden="true">#</a> 二、饿汉式（静态代码块）[可用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private static Singleton instance;

    static {
        instance = new Singleton();
    }

    private Singleton() {}

    public Singleton getInstance() {
        return instance;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>这种方式和上面的方式其实类似，只不过将类实例化的过程放在了静态代码块中，也是在类装载的时候，就执行静态代码块中的代码，初始化类的实例。优缺点和上面是一样的。</p>
<h3 id="三、懒汉式-线程不安全-不可用" tabindex="-1"><a class="header-anchor" href="#三、懒汉式-线程不安全-不可用" aria-hidden="true">#</a> 三、懒汉式(线程不安全)[不可用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private static Singleton singleton;

    private Singleton() {}

    public static Singleton getInstance() {
        if (singleton == null) {
            singleton = new Singleton();
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这种写法起到了 Lazy Loading 的效果，但是只能在单线程下使用。如果在多线程下，一个线程进入了 <code v-pre>if (singleton == null)</code> 判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。所以在多线程环境下不可使用这种方式。</p>
<h3 id="四、懒汉式-线程安全-同步方法-不推荐用" tabindex="-1"><a class="header-anchor" href="#四、懒汉式-线程安全-同步方法-不推荐用" aria-hidden="true">#</a> 四、懒汉式(线程安全，同步方法)[不推荐用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private static Singleton singleton;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (singleton == null) {
            singleton = new Singleton();
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>解决上面第三种实现方式的线程不安全问题，做个线程同步就可以了，于是就对 <code v-pre>getInstance()</code> 方法进行了线程同步。</p>
<ul>
<li>缺点：效率太低了，每个线程在想获得类的实例时候，执行 <code v-pre>getInstance()</code> 方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接 return 就行了。方法进行同步效率太低要改进。</li>
</ul>
<h3 id="五、懒汉式-线程安全-同步代码块-不可用" tabindex="-1"><a class="header-anchor" href="#五、懒汉式-线程安全-同步代码块-不可用" aria-hidden="true">#</a> 五、懒汉式(线程安全，同步代码块)[不可用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private static Singleton singleton;

    private Singleton() {}

    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                singleton = new Singleton();
            }
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>由于第四种实现方式同步效率太低，所以摒弃同步方法，改为同步产生实例化的的代码块。但是这种同步并不能起到线程同步的作用。跟第 3 种实现方式遇到的情形一致，假如一个线程进入了 <code v-pre>if (singleton == null)</code> 判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。</p>
<h3 id="六、双重检查-推荐用" tabindex="-1"><a class="header-anchor" href="#六、双重检查-推荐用" aria-hidden="true">#</a> 六、双重检查[推荐用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private static volatile Singleton singleton;

    private Singleton() {}

    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Double-Check 概念对于多线程开发者来说不会陌生，如代码中所示，我们进行了两次 <code v-pre>if (singleton == null)</code> 检查，这样就可以保证线程安全了。这样，实例化代码只用执行一次，后面再次访问时，判断 <code v-pre>if (singleton == null)</code>，直接 return 实例化对象。</p>
<ul>
<li>优点：线程安全；延迟加载；效率较高。</li>
</ul>
<h3 id="七、静态内部类-推荐用" tabindex="-1"><a class="header-anchor" href="#七、静态内部类-推荐用" aria-hidden="true">#</a> 七、静态内部类[推荐用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Singleton {

    private Singleton() {}

    private static class SingletonInstance {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonInstance.INSTANCE;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这种方式跟饿汉式方式采用的机制类似，但又有不同。两者都是采用了类装载的机制来保证初始化实例时只有一个线程。不同的地方在饿汉式方式是只要 <code v-pre>Singleton</code> 类被装载就会实例化，没有 <code v-pre>Lazy-Loading</code> 的作用，而静态内部类方式在 <code v-pre>Singleton</code> 类被装载时并不会立即实例化，而是在需要实例化时，调用 <code v-pre>getInstance</code> 方法，才会装载 <code v-pre>SingletonInstance</code> 类，从而完成 <code v-pre>Singleton</code> 的实例化。</p>
<p>类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM 帮助我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的。</p>
<ul>
<li>优点：避免了线程不安全，延迟加载，效率高。</li>
</ul>
<h3 id="八、枚举-推荐用" tabindex="-1"><a class="header-anchor" href="#八、枚举-推荐用" aria-hidden="true">#</a> 八、枚举[推荐用]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public enum Singleton {
    INSTANCE;
    public void whateverMethod() {

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>借助 JDK1.5 中添加的枚举来实现单例模式。不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象。可能是因为枚举在 JDK1.5 中才添加，所以在实际项目开发中，很少见人这么写过。</p>
<h2 id="单例模式的优点" tabindex="-1"><a class="header-anchor" href="#单例模式的优点" aria-hidden="true">#</a> 单例模式的优点</h2>
<p>系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能。</p>
<h2 id="单例模式的缺点" tabindex="-1"><a class="header-anchor" href="#单例模式的缺点" aria-hidden="true">#</a> 单例模式的缺点</h2>
<p>当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使用 new，可能会给其他开发人员造成困扰，特别是看不到源码的时候。</p>
<h2 id="适用场合" tabindex="-1"><a class="header-anchor" href="#适用场合" aria-hidden="true">#</a> 适用场合</h2>
<ul>
<li>需要频繁的进行创建和销毁的对象；</li>
<li>创建对象时耗时过多或耗费资源过多，但又经常用到的对象；</li>
<li>工具类对象；</li>
<li>频繁访问数据库或文件的对象。</li>
</ul>
</template>
