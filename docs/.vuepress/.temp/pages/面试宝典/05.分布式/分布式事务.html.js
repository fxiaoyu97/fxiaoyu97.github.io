export const data = {
  "key": "v-2bc3f4ec",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/05.%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html",
  "title": "分布式事务",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "分布式一致性",
      "slug": "分布式一致性",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式事务",
      "slug": "分布式事务-1",
      "children": []
    },
    {
      "level": 2,
      "title": "XA 规范",
      "slug": "xa-规范",
      "children": []
    },
    {
      "level": 2,
      "title": "2PC",
      "slug": "_2pc",
      "children": [
        {
          "level": 3,
          "title": "准备阶段",
          "slug": "准备阶段",
          "children": []
        },
        {
          "level": 3,
          "title": "提交阶段",
          "slug": "提交阶段",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3PC",
      "slug": "_3pc",
      "children": [
        {
          "level": 3,
          "title": "CanCommit 阶段",
          "slug": "cancommit-阶段",
          "children": []
        },
        {
          "level": 3,
          "title": "PreCommit 阶段",
          "slug": "precommit-阶段",
          "children": []
        },
        {
          "level": 3,
          "title": "doCommit 阶段",
          "slug": "docommit-阶段",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2PC 与 3PC 的区别",
      "slug": "_2pc-与-3pc-的区别",
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
  "filePathRelative": "面试宝典/05.分布式/分布式事务.md"
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
