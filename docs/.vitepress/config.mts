import { defineConfig } from "vitepress";
import container from "markdown-it-container";
import { renderSandbox } from "vitepress-plugin-sandpack";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-System",
  description: "This is FE-System Site",
  markdown: {
    config(md) {
      md.use(container, "sandbox", {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, "sandbox");
        },
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "CSS", link: "/css/flex" },
      { text: "JavaScript", link: "/js/" },
      { text: "React", link: "/react/reduce-rerender" },
      { text: "Next", link: "/next/basic/app-router" },
      { text: "算法", link: "/algorithm/index" },
      { text: "手写题", link: "/write/basic/apply-call-bind" },
      { text: "八股文", link: "/interview/html-css/" },
    ],

    sidebar: {
      "/css/": [
        {
          items: [{ text: "Flex", link: "/css/flex/" }],
        },
      ],

      "/js/": [
        {
          text: "基础",
          collapsed: false,
          items: [
            { text: "数据类型", link: "/js/basic/data-types" },
            { text: "Dom & Event", link: "/js/basic/dom-event/" },
            { text: "Bom", link: "/js/basic/bom/" },
            { text: "This", link: "/js/basic/this" },
            { text: "运行原理 & 作用域", link: "/js/basic/run-scope-chain/" },
            { text: "内存 & 闭包", link: "/js/basic/memory-closure/" },
            { text: "浏览器渲染原理", link: "/js/basic/populating/" },
            { text: "类与继承", link: "/js/basic/class-extends/" },
            { text: "客户端存储", link: "/js/basic/client-storage/" },
          ],
        },
        {
          text: "ES6 +",
          collapsed: false,
          items: [
            { text: "Proxy & Reflect", link: "/js/es6/proxy-reflect/" },
            {
              text: "Iterator & Generator",
              link: "/js/es6/iterator-generator/",
            },
            { text: "Promise", link: "/js/es6/promise" },
          ],
        },
      ],

      "/react/": [
        {
          text: "不必要的渲染",
          link: "/react/reduce-rerender/",
        },
      ],

      "/next/": [
        {
          text: "基础",
          collapsed: false,
          items: [
            { text: "App Router", link: "/next/basic/app-router/" },
            {
              text: "动态路由 & 平行路由 & 拦截路由",
              link: "/next/basic/routes-dynamic-group-parallel-intercept/",
            },
            {
              text: "渲染策略",
              link: "/next/basic/rendering-strategy/",
            },
          ],
        },
      ],

      "/write/": [
        {
          text: "基础实现类",
          collapsed: false,
          items: [
            {
              text: "apply & call & bind",
              link: "/write/basic/apply-call-bind/",
            },
            {
              text: "防抖",
              link: "/write/basic/debounce/",
            },
            {
              text: "截流",
              link: "/write/basic/throttle/",
            },
            {
              text: "深浅拷贝",
              link: "/write/basic/deep-shallow-clone/",
            },
            {
              text: "new",
              link: "/write/basic/new/",
            },
            {
              text: "instanceof",
              link: "/write/basic/instanceof/",
            },
          ],
        },
        {
          text: "异步编程",
          collapsed: false,
          items: [
            {
              text: "PromiseA+",
              link: "/write/async/promise-a/",
            },
          ],
        },
      ],

      "/interview/": [
        {
          text: "HTML-CSS",
          link: "/interview/html-css/",
        },
        {
          text: "JS",
          link: "/interview/js/",
        },
        {
          text: "前端安全",
          link: "/interview/security/",
        },
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
