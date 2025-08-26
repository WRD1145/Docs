// .vitepress/git-changelog-zh.ts
import type { Locale } from '@nolebase/vitepress-plugin-git-changelog/client'

export const gitChangelogLocales: Record<string, Locale> = {
  zh: {
    lastUpdated: '最后更新于',
    lastUpdatedTime: ' 时间',
    contributors: {
      title: '贡献者',
      noData: '暂无贡献者',
    },
    changelog: {
      title: '提交历史',
      noData: '暂无提交记录',
      lastEdited: '最后编辑于',
      lastEditedDateFnsLocaleName: 'zhCN',
      viewFullHistory: '查看完整历史',
      committedOn: '于',
    },
  },
}