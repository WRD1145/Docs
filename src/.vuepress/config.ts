import { defineUserConfig, Plugin } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "WRD1145 文档",
      description: "WRD1145 的文档",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
