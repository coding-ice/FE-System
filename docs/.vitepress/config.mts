import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-System",
  description: "This is FE-System Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "CSS", link: "/css/flex" },
      { text: "JavaScript", link: "/js/" },
    ],

    sidebar: {
      "/css/": [
        {
          items: [{ text: "Flex", link: "/css/flex" }],
        },
      ],

      "/js/": [
        { text: "数据类型", link: "/js/data-types" },
        { text: "ES6", items: [{ text: "Promise", link: "/js/es6/promise" }] },
      ],
    },

    footer: {
      message: "转载请注明出处，违者必究",
      copyright:
        "Copyright © 2024-present <a href='https://github.com/coding-ice'>ice</a>",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/coding-ice/FE-System" },
    ],

    outline: {
      level: [2, 5],
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
