import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en-us": [
    "",
    {
      text: "Home",
      link: "README.md",
    },
  ],
  "/en-us/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "Body",
      children: [
        "README.md",
      ],
    },
  ],
  "/en-us/community/": [
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
