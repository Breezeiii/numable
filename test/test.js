const format = require("../es/index");

const num = format(123456.123456, { pattern: "#,###.##" });

console.log(num);
