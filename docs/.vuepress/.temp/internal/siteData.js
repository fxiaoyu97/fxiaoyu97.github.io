export const siteData = {
  "base": "/calos/",
  "lang": "zh-CN",
  "title": "三更编程",
  "description": "瑾色流年，追梦少年",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/geass-bg.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
