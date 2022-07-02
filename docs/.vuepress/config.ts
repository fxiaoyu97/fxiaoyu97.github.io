import { defaultTheme, defineUserConfig } from 'vuepress'
import { getChildren } from './autoSidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '三更编程',
  description: '三更编程，洛小豆',
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录
    // 即 docs/.vuepress/public/img/geass-bg.ico
    [
      'link',
      {
        rel: 'icon',
        href: '/img/geass-bg.ico'
      }
    ]
  ],
  base: '/', // 这是部署到github相关的配置
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: false,
    contributors: false,
    navbar: [
      // {
      //     text: '前端',
      //     children: ['/vue/']
      // },
      // {
      //     text: '后端',
      //     link: '/FQA/'
      // },
      {
        text: 'Java',
        children: [
          {
            text: 'Java基础',
            link: '/Java基础/',
            activeMatch: '^/Java基础/'
          }
        ]
      },
      {
        text: '编程工具',
        children: [
          {
            text: 'Git',
            link: '/git/',
            activeMatch: '^/git/'
          }
        ]
      },
      {
        text: '面试宝典',
        link: '/面试宝典/'
      },
      {
        text: '算法',
        link: '/算法/'
      },
      {
        text: '项目笔记',
        link: '/项目笔记/'
      }
      // {
      //     text: '关于我',
      //     link: '/FQA/'
      // },
    ],
    sidebar: {
      '/Java%E5%9F%BA%E7%A1%80/': getChildren(`Java基础`),
      '/FQA/': getChildren(`FQA`),
      '/git/': getChildren(`git`),
      '/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/': getChildren(`面试宝典`),
      '/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/': getChildren(`项目笔记`, 1)
    }
  })
})
