export const data = {
  "key": "v-d01e0a5a",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/11.%E5%AE%89%E5%85%A8%E7%AF%87/HTTPS%20%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90.html",
  "title": "HTTPS 原理剖析",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么使用 HTTPS",
      "slug": "为什么使用-https",
      "children": []
    },
    {
      "level": 2,
      "title": "什么是 HTTPS",
      "slug": "什么是-https",
      "children": []
    },
    {
      "level": 2,
      "title": "HTTPS 原理剖析",
      "slug": "https-原理剖析-1",
      "children": []
    },
    {
      "level": 2,
      "title": "HTTPS 的相关场景",
      "slug": "https-的相关场景",
      "children": [
        {
          "level": 3,
          "title": "场景一，对 HTTPS 进行 CDN 加速",
          "slug": "场景一-对-https-进行-cdn-加速",
          "children": []
        },
        {
          "level": 3,
          "title": "场景二，对HTTPS 的域名通过 CNAME 绑定到另外一个 HTTPS 域名上",
          "slug": "场景二-对https-的域名通过-cname-绑定到另外一个-https-域名上",
          "children": []
        },
        {
          "level": 3,
          "title": "场景三，两台服务器的证书问题",
          "slug": "场景三-两台服务器的证书问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "HTTPS 设计上的借鉴",
      "slug": "https-设计上的借鉴",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652199780000,
    "contributors": [
      {
        "name": "calos",
        "email": "fxiaoyu97@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "面试宝典/11.安全篇/HTTPS 原理剖析.md"
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
