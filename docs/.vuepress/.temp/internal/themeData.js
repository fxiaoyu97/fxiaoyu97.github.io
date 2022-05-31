export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "sidebarDepth": 1,
  "navbar": [
    {
      "text": "面试宝典",
      "link": "/面试宝典/"
    },
    {
      "text": "问题集锦",
      "link": "/FQA/"
    }
  ],
  "sidebar": {
    "/FQA/": [
      "/FQA/.DS_Store",
      {
        "text": "java",
        "collapsible": false,
        "children": [
          "/FQA/java/map、string、json互转.md",
          "/FQA/java/nginx屏蔽指定IP.md",
          "/FQA/java/如何优雅的读取yml配置文件.md"
        ]
      },
      {
        "text": "windows",
        "collapsible": false,
        "children": [
          "/FQA/windows/Windows中杀死占用某个端口的进程.md",
          "/FQA/windows/idea快捷键.md",
          "/FQA/windows/window下nginx的启动和关闭.md"
        ]
      }
    ],
    "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/": [
      "/面试宝典/.DS_Store",
      {
        "text": "java基础",
        "collapsible": false,
        "children": [
          "/面试宝典/00.java基础/HTTP 请求的 GET 与 POST 方式的区别.md",
          "/面试宝典/00.java基础/JDBC 流程.md",
          "/面试宝典/00.java基础/equals 与 == 的区别.md",
          "/面试宝典/00.java基础/final, finally, finalize 的区别.md",
          "/面试宝典/00.java基础/int 和 Integer 有什么区别.md",
          "/面试宝典/00.java基础/session 与 cookie 区别.md",
          "/面试宝典/00.java基础/session 分布式处理.md",
          "/面试宝典/00.java基础/抽象类和接口有什么区别.md",
          "/面试宝典/00.java基础/说说反射的用途及实现.md",
          "/面试宝典/00.java基础/说说自定义注解的场景及实现.md",
          "/面试宝典/00.java基础/重载和重写的区别.md",
          "/面试宝典/00.java基础/面向对象的特征.md"
        ]
      },
      {
        "text": "java集合",
        "collapsible": false,
        "children": [
          "/面试宝典/01.java集合/ArrayList 与 LinkedList 区别.md",
          "/面试宝典/01.java集合/ArrayList 与 Vector 区别.md",
          "/面试宝典/01.java集合/ConcurrentHashMap 的工作原理及代码实现.md",
          "/面试宝典/01.java集合/HashMap 和 ConcurrentHashMap 的区别.md",
          "/面试宝典/01.java集合/HashMap 和 HashTable 的区别.md",
          "/面试宝典/01.java集合/HashMap 的工作原理及代码实现.md",
          "/面试宝典/01.java集合/HashSet 和 HashMap 区别.md",
          "/面试宝典/01.java集合/List 和 Map 区别.md",
          "/面试宝典/01.java集合/List 和 Set 区别.md"
        ]
      },
      {
        "text": "Java 线程",
        "collapsible": false,
        "children": [
          "/面试宝典/02.Java 线程/ThreadLocal 原理分析.md",
          "/面试宝典/02.Java 线程/sleep()、join（）、yield（）有什么区别.md",
          "/面试宝典/02.Java 线程/创建线程的方式及实现.md",
          "/面试宝典/02.Java 线程/线程池的几种方式与使用场景.md",
          "/面试宝典/02.Java 线程/线程的生命周期.md",
          "/面试宝典/02.Java 线程/讲讲线程池的实现原理.md",
          "/面试宝典/02.Java 线程/说说 CountDownLatch 与 CyclicBarrier 区别.md",
          "/面试宝典/02.Java 线程/说说 CountDownLatch 原理.md",
          "/面试宝典/02.Java 线程/说说 CyclicBarrier 原理.md",
          "/面试宝典/02.Java 线程/说说 Exchanger 原理.md",
          "/面试宝典/02.Java 线程/说说 Semaphore 原理.md"
        ]
      },
      {
        "text": "Java 锁机制",
        "collapsible": false,
        "children": [
          "/面试宝典/03.Java 锁机制/01.说说线程安全问题.md",
          "/面试宝典/03.Java 锁机制/02.synchronize 实现原理.md",
          "/面试宝典/03.Java 锁机制/03.synchronized 与 lock 的区别.md",
          "/面试宝典/03.Java 锁机制/04.CAS 乐观锁.md",
          "/面试宝典/03.Java 锁机制/05.ABA 问题.md",
          "/面试宝典/03.Java 锁机制/06.乐观锁的业务场景及实现方式.md",
          "/面试宝典/03.Java 锁机制/07.volatile 实现原理.md"
        ]
      },
      {
        "text": "Spring",
        "collapsible": false,
        "children": [
          "/面试宝典/04.Spring/BeanFactory 和 ApplicationContext 有什么区别.md",
          "/面试宝典/04.Spring/Spring AOP 实现原理.md",
          "/面试宝典/04.Spring/Spring Bean 的生命周期.md",
          "/面试宝典/04.Spring/Spring IOC 如何实现.md",
          "/面试宝典/04.Spring/Spring MVC 启动流程.md",
          "/面试宝典/04.Spring/Spring MVC 运行流程.md",
          "/面试宝典/04.Spring/Spring 事务实现方式.md",
          "/面试宝典/04.Spring/Spring 事务底层原理.md",
          "/面试宝典/04.Spring/Spring 框架中用到了哪些设计模式.md",
          "/面试宝典/04.Spring/Spring 的单例实现原理.md",
          "/面试宝典/04.Spring/动态代理（CGLIB 与 JDK）.md",
          "/面试宝典/04.Spring/如何自定义注解实现功能.md",
          "/面试宝典/04.Spring/说说 Spring AOP.md"
        ]
      },
      {
        "text": "分布式",
        "collapsible": false,
        "children": [
          "/面试宝典/05.分布式/Session 分布式方案.md",
          "/面试宝典/05.分布式/分布式事务.md",
          "/面试宝典/05.分布式/分布式锁的场景与实现.md",
          "/面试宝典/05.分布式/谈谈业务中使用分布式的场景.md",
          "/面试宝典/05.分布式/集群与负载均衡的算法与实现.md"
        ]
      },
      {
        "text": "微服务",
        "collapsible": false,
        "children": [
          "/面试宝典/06.微服务/.DS_Store",
          "/面试宝典/06.微服务/你怎么理解 RESTful.md",
          "/面试宝典/06.微服务/你怎么理解 RPC 框架.md",
          "/面试宝典/06.微服务/前后端分离是如何做的.md",
          "/面试宝典/06.微服务/如何保证接口的幂等性.md",
          "/面试宝典/06.微服务/如何应对微服务的链式调用异常.md",
          "/面试宝典/06.微服务/如何拆分服务.md",
          "/面试宝典/06.微服务/如何理解 RESTful API 的幂等性.md",
          "/面试宝典/06.微服务/如何解决跨域.md",
          "/面试宝典/06.微服务/对于快速追踪与定位问题.md",
          "/面试宝典/06.微服务/微服务与 SOA 的区别.md",
          "/面试宝典/06.微服务/微服务哪些框架.md",
          "/面试宝典/06.微服务/微服务如何进行数据库管理.md",
          "/面试宝典/06.微服务/微服务的安全.md",
          "/面试宝典/06.微服务/怎么考虑数据一致性问题.md",
          "/面试宝典/06.微服务/说说 CAP 定理、 BASE 理论.md",
          "/面试宝典/06.微服务/说说 Dubbo 的实现原理.md",
          "/面试宝典/06.微服务/说说 RPC 的实现原理.md",
          "/面试宝典/06.微服务/说说如何设计一个良好的 API.md",
          "/面试宝典/06.微服务/说说最终一致性的实现方案.md"
        ]
      },
      {
        "text": "数据存储",
        "collapsible": false,
        "children": [
          "/面试宝典/07.数据存储/58 到家 MySQL 军规升级版.md",
          "/面试宝典/07.数据存储/MySQL 索引使用的注意事项.md",
          "/面试宝典/07.数据存储/MySQL 遇到的死锁问题.md",
          "/面试宝典/07.数据存储/ObjectId 规则.md",
          "/面试宝典/07.数据存储/limit 20000 加载很慢怎么解决.md",
          "/面试宝典/07.数据存储/为什么要用 B-Tree.md",
          "/面试宝典/07.数据存储/倒排索引.md",
          "/面试宝典/07.数据存储/分库与分表带来的分布式困境与应对之策.md",
          "/面试宝典/07.数据存储/存储引擎的 InnoDB 与 MyiSAM.md",
          "/面试宝典/07.数据存储/数据库索引的原理.md",
          "/面试宝典/07.数据存储/聊聊 ElasticSearch 使用场景.md",
          "/面试宝典/07.数据存储/聊聊 MongoDB 使用场景.md",
          "/面试宝典/07.数据存储/聚集索引与非聚集索引的区别.md",
          "/面试宝典/07.数据存储/说说 SQL 优化之道.md",
          "/面试宝典/07.数据存储/说说分库与分表设计.md",
          "/面试宝典/07.数据存储/说说反模式设计.md",
          "/面试宝典/07.数据存储/选择合适的分布式主键方案.md",
          "/面试宝典/07.数据存储/选择合适的数据存储方案.md"
        ]
      },
      {
        "text": "缓存",
        "collapsible": false,
        "children": [
          "/面试宝典/08.缓存/Redis 为什么是单线程的.md",
          "/面试宝典/08.缓存/Redis 内存淘汰机制.md",
          "/面试宝典/08.缓存/Redis 内部结构.md",
          "/面试宝典/08.缓存/Redis 持久化机制.md",
          "/面试宝典/08.缓存/Redis 有哪些类型.md",
          "/面试宝典/08.缓存/Redis 集群方案与实现.md",
          "/面试宝典/08.缓存/使用缓存的合理性问题.md",
          "/面试宝典/08.缓存/缓存崩溃.md",
          "/面试宝典/08.缓存/缓存降级.md",
          "/面试宝典/08.缓存/聊聊 Redis 使用场景.md"
        ]
      },
      {
        "text": "消息队列",
        "collapsible": false,
        "children": [
          "/面试宝典/09.消息队列/如何保证消息的有序性.md",
          "/面试宝典/09.消息队列/消息的堆积解决思路.md",
          "/面试宝典/09.消息队列/消息的幂等性解决思路.md",
          "/面试宝典/09.消息队列/消息的重发补偿解决思路.md",
          "/面试宝典/09.消息队列/消息队列的使用场景.md",
          "/面试宝典/09.消息队列/自己如何实现消息队列.md"
        ]
      },
      {
        "text": "Netty",
        "collapsible": false,
        "children": [
          "/面试宝典/10.Netty/Netty 内部执行流程.md",
          "/面试宝典/10.Netty/Netty 线程模型.md",
          "/面试宝典/10.Netty/Netty 重连实现.md",
          "/面试宝典/10.Netty/TCP 粘包拆包的解决办法.md",
          "/面试宝典/10.Netty/为什么选择 Netty.md",
          "/面试宝典/10.Netty/什么是 TCP 粘包拆包.md",
          "/面试宝典/10.Netty/原生的 NIO 在 JDK 1.7 版本存在 EPoll BUG.md",
          "/面试宝典/10.Netty/说说 Netty 的零拷贝.md",
          "/面试宝典/10.Netty/说说业务中 Netty 的使用场景.md"
        ]
      },
      {
        "text": "安全篇",
        "collapsible": false,
        "children": [
          "/面试宝典/11.安全篇/HTTPS 原理剖析.md",
          "/面试宝典/11.安全篇/HTTPS 降级攻击.md",
          "/面试宝典/11.安全篇/基于角色的访问控制.md",
          "/面试宝典/11.安全篇/安全要素与 STRIDE 威胁.md",
          "/面试宝典/11.安全篇/授权与认证.md",
          "/面试宝典/11.安全篇/防范常见的 Web 攻击.md"
        ]
      },
      {
        "text": "性能篇",
        "collapsible": false,
        "children": [
          "/面试宝典/12.性能篇/如何发现性能瓶颈.md",
          "/面试宝典/12.性能篇/性能指标有哪些.md",
          "/面试宝典/12.性能篇/性能调优的常见手段.md"
        ]
      },
      {
        "text": "设计模式",
        "collapsible": false,
        "children": [
          "/面试宝典/13.设计模式/23 种设计模式的设计理念.md",
          "/面试宝典/13.设计模式/设计模式之间的异同，例如策略模式与状态模式的区别.md",
          "/面试宝典/13.设计模式/设计模式之间的结合，例如策略模式 + 简单工厂模式的实践.md",
          "/面试宝典/13.设计模式/设计模式的性能，例如单例模式哪种性能更好.md",
          "/面试宝典/13.设计模式/说说你对设计原则的理解.md",
          "/面试宝典/13.设计模式/说说常用开源框架中设计模式使用分析.md"
        ]
      },
      {
        "text": "需求分析",
        "collapsible": false,
        "children": [
          "/面试宝典/14.需求分析/你如何对需求原型进行理解和拆分.md",
          "/面试宝典/14.需求分析/你如何理解用户痛点.md",
          "/面试宝典/14.需求分析/你针对产品提出哪些交互和改进意见.md",
          "/面试宝典/14.需求分析/说说你对功能性需求的理解.md",
          "/面试宝典/14.需求分析/说说你对非功能性需求的理解.md"
        ]
      },
      {
        "text": "设计能力",
        "collapsible": false,
        "children": [
          "/面试宝典/15.设计能力/你如何划分领域边界.md",
          "/面试宝典/15.设计能力/你如何考虑服务化.md",
          "/面试宝典/15.设计能力/你如何考虑组件化.md",
          "/面试宝典/15.设计能力/你如何进行领域建模.md",
          "/面试宝典/15.设计能力/说说你在项目中使用过的 UML 图.md",
          "/面试宝典/15.设计能力/说说概要设计.md"
        ]
      },
      {
        "text": "未分类",
        "collapsible": false,
        "children": [
          "/面试宝典/16.未分类/JDK8 新特性.md",
          "/面试宝典/16.未分类/JavaScript this 关键字.md",
          "/面试宝典/16.未分类/MySQL 优化.md",
          "/面试宝典/16.未分类/Zookeeper 假死脑裂.md",
          "/面试宝典/16.未分类/双亲委派模型.md",
          "/面试宝典/16.未分类/死信、延迟、重试队列.md",
          "/面试宝典/16.未分类/面试题补充.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
