"use strict";
exports.__esModule = true;
exports.zhSidebar = void 0;
var vuepress_theme_hope_1 = require("vuepress-theme-hope");
exports.zhSidebar = vuepress_theme_hope_1.sidebar({
    "/": [
    "",
    {
      text: "首页",
      link: "README.md",
    },
  ],
  "/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "正文",
      children: [
        "README.md",
      ],
    },
  ],
  "/community/": [
    {
      text: "社区",
      children: [
        "README.md",
        "AiBot.md",
        "question.md"
      ],
    },
  ],
});
