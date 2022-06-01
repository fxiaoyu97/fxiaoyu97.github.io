import { defaultTheme, defineUserConfig } from 'vuepress'
import { getChildren } from './autoSidebar'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '三更编程',
    description: '瑾色流年，追梦少年',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/img/geass-bg.ico'
        }],
    ],
    base: '/calos/', // 这是部署到github相关的配置
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
                children: ['/Java基础/']
            },
            {
                text: '面试宝典',
                link: '/面试宝典/'
            },
            {
                text: '算法',
                link: '/算法/'
            },
            // {
            //     text: '关于我',
            //     link: '/FQA/'
            // },
        ],
        sidebar: {
            'Java%E5%9F%BA%E7%A1%80':getChildren(`Java基础`),
            '/FQA/': getChildren(`FQA`),
            '/%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8/': getChildren(`面试宝典`),
        }
    }),
})