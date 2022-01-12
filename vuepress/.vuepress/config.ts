const pkg = require("../../package.json");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: `${pkg.name}`,
  description: pkg.description,
  dest: "docs"
};
