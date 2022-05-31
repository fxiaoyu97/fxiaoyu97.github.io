export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/img/23.png",
    "heroText": "公众号：三更编程菌",
    "tagline": "化繁为简，大道归一",
    "actions": [
      {
        "text": "互联网工程师的面试宝典 →",
        "link": "/面试宝典/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "编程学习",
        "details": "记录编程学习过程中积累的知识点 整理，吸收，吐纳，归档。吾将上下而求索..."
      },
      {
        "title": "项目实践",
        "details": "专注记录做项目的过程，分享做项目的经历，记录整个过程的遇到的问题和解决方案，以及在这段时间内的收获和感悟"
      },
      {
        "title": "随笔",
        "details": "活着，是一件最能带来满足感的事。细细琢磨吧，人生啊，有意思的很..."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2020.05.26 Calos- All Rights Reserved"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1652115961000,
    "contributors": [
      {
        "name": "fxiaoyu97",
        "email": "fxiaoyu97@qq.com",
        "commits": 3
      },
      {
        "name": "calos",
        "email": "fxiaoyu97@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
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
