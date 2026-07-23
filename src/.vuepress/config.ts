import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Docs/",  // 如果部署在 /Docs/ 子路径下
  bundler: viteBundler(),
  theme,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "文档",
      description: "文档站点",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs",
      description: "Documentation site",
    },
  },
});
