export const data = {
  "key": "v-5c848448",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/09.%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/%E6%B6%88%E6%81%AF%E7%9A%84%E5%B9%82%E7%AD%89%E6%80%A7%E8%A7%A3%E5%86%B3%E6%80%9D%E8%B7%AF.html",
  "title": "消息的幂等性解决思路",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "查询操作",
      "slug": "查询操作",
      "children": []
    },
    {
      "level": 2,
      "title": "删除操作",
      "slug": "删除操作",
      "children": []
    },
    {
      "level": 2,
      "title": "唯一索引，防止新增脏数据",
      "slug": "唯一索引-防止新增脏数据",
      "children": []
    },
    {
      "level": 2,
      "title": "Token 机制",
      "slug": "token-机制",
      "children": []
    },
    {
      "level": 2,
      "title": "悲观锁",
      "slug": "悲观锁",
      "children": []
    },
    {
      "level": 2,
      "title": "乐观锁",
      "slug": "乐观锁",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式锁",
      "slug": "分布式锁",
      "children": []
    },
    {
      "level": 2,
      "title": "select + insert",
      "slug": "select-insert",
      "children": []
    },
    {
      "level": 2,
      "title": "状态机幂等",
      "slug": "状态机幂等",
      "children": []
    },
    {
      "level": 2,
      "title": "对外提供接口的 API 如何保证幂等",
      "slug": "对外提供接口的-api-如何保证幂等",
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
  "filePathRelative": "面试宝典/09.消息队列/消息的幂等性解决思路.md"
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
