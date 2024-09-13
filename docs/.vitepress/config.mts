import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-System",
  description: "This is FE-System Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 默认 /abc/ -> /abc/index
      { text: "CSS", link: "/css/" },
      { text: "JavaScript", link: "/js/" },
    ],

    sidebar: {
      "/css/": [
        {
          text: "布局",
          items: [
            { text: "Flex", link: "/css/flex" },
            { text: "Grid", link: "/css/grid" },
          ],
        },
      ],

      "/js/": [
        { text: "ES6", items: [{ text: "Promise", link: "/js/es6/promise" }] },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/coding-ice/FE-System" },
    ],

    outline: {
      level: [2, 4],
    },
  },
});
