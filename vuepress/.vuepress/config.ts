const pkg = require("../../package.json");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  // 站点配置
  base: isDev ? "/" : "./",
  lang: "zh-CN",
  title: `${pkg.name}`,
  description: pkg.description,
  dest: "docs"
};
