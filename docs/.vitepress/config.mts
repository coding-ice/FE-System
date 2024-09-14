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
          items: [{ text: "Flex", link: "/css/flex" }],
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

    lastUpdated: {
      text: "Last Updated",
    },

    editLink: {
      pattern: "https://github.com/coding-ice/FE-System/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
