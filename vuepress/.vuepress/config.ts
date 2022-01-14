const pkg = require("../../package.json");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  // 站点配置
  base: isDev ? "/" : `/${pkg.name}/`,
  lang: "zh-CN",
  title: `${pkg.name}`,
  description: pkg.description,
  dest: "docs",
  theme: "@vuepress/theme-default",
  plugins: [
    "vuepress-plugin-smooth-scroll",
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search"
          },
          "/zh/": {
            placeholder: "搜索"
          }
        }
      }
    ]
  ],
  themeConfig: {
    locales: {
      "/": {
        navbar: [
          {
            text: "Get Started",
            link: "/getting-started.html"
          },
          {
            text: "Guide",
            link: "/guide.html"
          },
          {
            text: "Format",
            link: "/format.html"
          }
        ]
      },
      "/zh/": {
        home: "/zh/",
        selectLanguageText: "选择语言",
        navbar: [
          {
            text: "介绍",
            link: "/zh/getting-started.html"
          },
          {
            text: "指南",
            link: "/zh/guide.html"
          },
          {
            text: "格式化",
            link: "/zh/format.html"
          }
        ]
      }
    }
  },
  locales: {
    "/": {
      lang: "en-US",
      title: `${pkg.name}JS`,
      description: `${pkg.description}`
    },
    "/zh/": {
      base: "/zh/",
      lang: "zh-CN",
      title: `${pkg.name}JS`,
      description: "用于格式化数字的javascript库。"
    }
  }
};
