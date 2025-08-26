// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { gitChangelogLocales } from '../git-changelog-zh'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
  enhanceApp({ app }) {
    // 注册插件时直接塞翻译
    app.use(NolebaseGitChangelogPlugin, {
      locales: gitChangelogLocales,
    })
  },
} satisfies Theme