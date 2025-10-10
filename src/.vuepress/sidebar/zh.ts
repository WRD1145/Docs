import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
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
