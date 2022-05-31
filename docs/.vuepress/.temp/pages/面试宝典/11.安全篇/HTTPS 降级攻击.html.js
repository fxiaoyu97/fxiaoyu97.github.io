export const data = {
  "key": "v-16304a48",
  "path": "/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/11.%E5%AE%89%E5%85%A8%E7%AF%87/HTTPS%20%E9%99%8D%E7%BA%A7%E6%94%BB%E5%87%BB.html",
  "title": "HTTPS 降级攻击",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "HTTPS",
      "slug": "https",
      "children": []
    },
    {
      "level": 2,
      "title": "HTTPS 协议降级",
      "slug": "https-协议降级",
      "children": []
    },
    {
      "level": 2,
      "title": "SSLv3.0 的 AES 加密原理",
      "slug": "sslv3-0-的-aes-加密原理",
      "children": [
        {
          "level": 3,
          "title": "加密过程",
          "slug": "加密过程",
          "children": []
        },
        {
          "level": 3,
          "title": "解密过程",
          "slug": "解密过程",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "CBC 模式加密的 Padding Oracle 攻击",
      "slug": "cbc-模式加密的-padding-oracle-攻击",
      "children": []
    },
    {
      "level": 2,
      "title": "Padding Oracle 攻击的防范",
      "slug": "padding-oracle-攻击的防范",
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
  "filePathRelative": "面试宝典/11.安全篇/HTTPS 降级攻击.md"
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
