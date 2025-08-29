// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  /* ===== 站点基础 ===== */
  base: '',                         // 部署在根目录
  title: 'WRD1145 的文档',
  description: 'Hi, 欢迎来到我的文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  /* ===== Vite 插件：Git 信息 ===== */
  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/WRD1145/Docs' // 换成你的仓库
      }),
      GitChangelogMarkdownSection()
    ]
  },

  /* ===== 主题配置 ===== */
  themeConfig: {
    logo: '/favicon.ico',

    /* 控件翻译（中文） */
    darkModeSwitchLabel: '切换主题',
    docFooter: { prev: '上一篇', next: '下一篇' },
    outlineTitle: '页面内容',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',

    lastUpdated: { text: '最后更新于' }, // 需要 Git 历史

    notFound: {
      title: '页面未找到',
      quote: '哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！',
      linkText: '返回首页'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/Body/markdown-examples' },
      { text: '加入社区', link: '/Communiy/Group-norms' }
    ],

    editLink: {
      pattern: 'https://github.com/WRD1145/Docs/blob/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WRD1145' }
    ],

    /* ===== 侧边栏：英文文件夹 → 中文标题 ===== */
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      scanStartPath: '/',
      resolvePath: '/',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      sortFolderTo: 'top',
      collapsed: false,
      excludeByGlobPattern: ['**/README.md']
    })
  }
})