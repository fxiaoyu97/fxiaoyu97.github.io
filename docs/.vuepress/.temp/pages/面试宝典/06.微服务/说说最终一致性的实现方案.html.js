export const data = {
  "key": "v-a178b5c0",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/06.%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%AF%B4%E8%AF%B4%E6%9C%80%E7%BB%88%E4%B8%80%E8%87%B4%E6%80%A7%E7%9A%84%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html",
  "title": "说说最终一致性的实现方案",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "问题的起源",
      "slug": "问题的起源",
      "children": [
        {
          "level": 3,
          "title": "强一致",
          "slug": "强一致",
          "children": []
        },
        {
          "level": 3,
          "title": "弱一致性",
          "slug": "弱一致性",
          "children": []
        },
        {
          "level": 3,
          "title": "最终一致性",
          "slug": "最终一致性",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "1. 规避分布式事务——业务整合",
      "slug": "_1-规避分布式事务——业务整合",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 经典方案 - eBay 模式",
      "slug": "_2-经典方案-ebay-模式",
      "children": [
        {
          "level": 3,
          "title": "BASE：一种 ACID 的替代方案",
          "slug": "base-一种-acid-的替代方案",
          "children": []
        },
        {
          "level": 3,
          "title": "BASE (basically available, soft state, eventually consistent)",
          "slug": "base-basically-available-soft-state-eventually-consistent",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3. 去哪儿网分布式事务方案",
      "slug": "_3-去哪儿网分布式事务方案",
      "children": [
        {
          "level": 3,
          "title": "优先使用异步消息",
          "slug": "优先使用异步消息",
          "children": []
        },
        {
          "level": 3,
          "title": "有的业务不适合异步消息的方式，事务的各个参与方都需要同步的得到结果",
          "slug": "有的业务不适合异步消息的方式-事务的各个参与方都需要同步的得到结果",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4. 蘑菇街交易创建过程中的分布式一致性方案",
      "slug": "_4-蘑菇街交易创建过程中的分布式一致性方案",
      "children": [
        {
          "level": 3,
          "title": "交易创建的一般性流程",
          "slug": "交易创建的一般性流程",
          "children": []
        },
        {
          "level": 3,
          "title": "面临的问题",
          "slug": "面临的问题",
          "children": []
        },
        {
          "level": 3,
          "title": "方案选型",
          "slug": "方案选型",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5. 支付宝及蚂蚁金融云的分布式服务 DTS 方案",
      "slug": "_5-支付宝及蚂蚁金融云的分布式服务-dts-方案",
      "children": [
        {
          "level": 3,
          "title": "分布式事务服务简介",
          "slug": "分布式事务服务简介",
          "children": []
        },
        {
          "level": 3,
          "title": "核心特性",
          "slug": "核心特性",
          "children": []
        },
        {
          "level": 3,
          "title": "实现",
          "slug": "实现",
          "children": []
        },
        {
          "level": 3,
          "title": "与 2PC 协议比较",
          "slug": "与-2pc-协议比较",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6. 农信网数据一致性方案",
      "slug": "_6-农信网数据一致性方案",
      "children": [
        {
          "level": 3,
          "title": "电商业务",
          "slug": "电商业务",
          "children": []
        },
        {
          "level": 3,
          "title": "用户信息变更",
          "slug": "用户信息变更",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652196821000,
    "contributors": [
      {
        "name": "calos",
        "email": "fxiaoyu97@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "面试宝典/06.微服务/说说最终一致性的实现方案.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
