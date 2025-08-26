import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WRD1145的文档",
  description: "Hi,欢迎来到我的文档",
  base: '/Docs/',
  head: [
      // 添加图标
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
  //lastUpdated: true,
  vite: {
    plugins: [
      GitChangelog({ repoURL: () => 'https://github.com/WRD1145/Docs' }),
    ],
  },

  // 3. 这里新增 markdown 插件 ↓↓↓

  themeConfig: {
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    //Logo
    logo: '/favicon.ico',
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    
    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    //下面这个是搜索相关，我用的是algolia，local也可以用
    search: {
      //搜索用的啥引擎
      provider: "algolia",
      //具体配置，vscode 可以ctrl + 鼠标左键点进去看具体的参数
      options: {
        appId: "********",
        apiKey: "********",
        indexName: "********",
        //搜索框的占位符  Search docs  是点搜索框里面显示的那个
        placeholder: "搜索",

        translations: {
          //外面的搜索按钮  Search
          button: { buttonText: "搜索" },

          //这里就是点击导航栏上面的搜索弹出来的弹框  可以直接跟着改
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },

    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/Body/markdown-examples' }
    ],
    
  
    editLink: {
      pattern: 'https://github.com/WRD1145/Docs/blob/main/:path',
      text: '在GitHub上编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WRD1145' }
    ],
    sidebar: generateSidebar({
    // 侧边栏的根目录，默认为docs
    documentRootPath: "/docs",
    // 使用h1的标题作为侧边栏的标题
    useTitleFromFileHeading: true,
    // 使用文件夹的index.md
    useFolderTitleFromIndexFile: true,
    // 指向文件夹的链接
    useFolderLinkFromIndexFile: true,
    // 根据md文件的order进行排序
    sortMenusByFrontmatterOrder: true,
    // 排序之后将不是文件夹的放后面
    sortFolderTo: "top",
    // 菜单展开功能
    collapsed: false,
    excludeByGlobPattern:["**/README.md"],
    }),
  }
})
