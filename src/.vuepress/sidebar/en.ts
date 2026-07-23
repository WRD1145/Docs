import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/Docs/en-us": [
    "",
    {
      text: "Home",
      link: "README.md",
    },
  ],
  "/Docs/en-us/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "Body",
      children: [
        "README.md",
      ],
    },
  ],
  "/Docs/en-us/community/": [
    {
      text: "community",
      children: [
        "README.md",
        "question.md",
        "contributing.md"
      ],
    },
  ],
});
