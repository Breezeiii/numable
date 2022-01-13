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
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search"
          }
          // "/zh/": {
          //   placeholder: "搜索"
          // }
        }
      }
    ]
  ],
  themeConfig: {
    navbar: [
      {
        text: "指南",
        link: "/"
      },
      {
        text: "示例",
        link: "/Example.md"
      }
    ]
  }
};
