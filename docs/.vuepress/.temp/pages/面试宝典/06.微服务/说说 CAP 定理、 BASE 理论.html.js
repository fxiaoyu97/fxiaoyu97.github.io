export const data = {
  "key": "v-f4e49d5e",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/06.%E5%BE%AE%E6%9C%8D%E5%8A%A1/%E8%AF%B4%E8%AF%B4%20CAP%20%E5%AE%9A%E7%90%86%E3%80%81%20BASE%20%E7%90%86%E8%AE%BA.html",
  "title": "说说 CAP 定理、 BASE 理论",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "CAP 定理",
      "slug": "cap-定理",
      "children": [
        {
          "level": 3,
          "title": "一致性（Consistency）",
          "slug": "一致性-consistency",
          "children": []
        },
        {
          "level": 3,
          "title": "可用性（Availability）",
          "slug": "可用性-availability",
          "children": []
        },
        {
          "level": 3,
          "title": "分区容错性（Partition tolerance）",
          "slug": "分区容错性-partition-tolerance",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CAP 权衡",
      "slug": "cap-权衡",
      "children": []
    },
    {
      "level": 2,
      "title": "BASE 理论",
      "slug": "base-理论",
      "children": [
        {
          "level": 3,
          "title": "基本可用（Basically Available）",
          "slug": "基本可用-basically-available",
          "children": []
        },
        {
          "level": 3,
          "title": "软状态（Soft State）",
          "slug": "软状态-soft-state",
          "children": []
        },
        {
          "level": 3,
          "title": "最终一致性（Eventual Consistency）",
          "slug": "最终一致性-eventual-consistency",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "ACID 和 BASE 的区别与联系",
      "slug": "acid-和-base-的区别与联系",
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
  "filePathRelative": "面试宝典/06.微服务/说说 CAP 定理、 BASE 理论.md"
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
