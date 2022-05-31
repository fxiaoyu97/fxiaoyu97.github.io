export const data = {
  "key": "v-1084c54a",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/05.%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E7%9A%84%E5%9C%BA%E6%99%AF%E4%B8%8E%E5%AE%9E%E7%8E%B0.html",
  "title": "分布式锁的场景与实现",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用场景",
      "slug": "使用场景",
      "children": []
    },
    {
      "level": 2,
      "title": "数据库实现",
      "slug": "数据库实现",
      "children": [
        {
          "level": 3,
          "title": "加 xx 锁",
          "slug": "加-xx-锁",
          "children": []
        },
        {
          "level": 3,
          "title": "唯一键",
          "slug": "唯一键",
          "children": []
        },
        {
          "level": 3,
          "title": "优点",
          "slug": "优点",
          "children": []
        },
        {
          "level": 3,
          "title": "缺点",
          "slug": "缺点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Zookeeper 实现",
      "slug": "zookeeper-实现",
      "children": [
        {
          "level": 3,
          "title": "获取锁",
          "slug": "获取锁",
          "children": []
        },
        {
          "level": 3,
          "title": "释放锁",
          "slug": "释放锁",
          "children": []
        },
        {
          "level": 3,
          "title": "优点",
          "slug": "优点-1",
          "children": []
        },
        {
          "level": 3,
          "title": "缺点",
          "slug": "缺点-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Redis 实现",
      "slug": "redis-实现",
      "children": [
        {
          "level": 3,
          "title": "简单实现 1",
          "slug": "简单实现-1",
          "children": []
        },
        {
          "level": 3,
          "title": "简单实现 2",
          "slug": "简单实现-2",
          "children": []
        },
        {
          "level": 3,
          "title": "错误实现",
          "slug": "错误实现",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Tair 实现",
      "slug": "tair-实现",
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
  "filePathRelative": "面试宝典/05.分布式/分布式锁的场景与实现.md"
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
