# [numableJS](https://liuhaifengzzzzz.github.io/numable)

<img src="https://badgen.net/npm/v/numable"/>&nbsp;
<img src="https://badgen.net/npm/license/numable"/>&nbsp;
<img src="https://badgen.net/npm/dt/numable"/>&nbsp;
<img src="https://badgen.net/npm/types/numable"/>

## 介绍

用于格式化数字的 javascript 库。

[网站和文档](https://liuhaifengzzzzz.github.io/numable)

## 浏览器兼容性

numable.js 支持所有符合 ES5 的浏览器（不支持 IE8 及更低版本）。

## 文档

查看实时 [示例](https://liuhaifengzzzzz.github.io/numable/example.html) 和文档，访问 [numableJS](https://liuhaifengzzzzz.github.io/numable).

## 格式化

[有关详细的格式设置，请参阅文档](https://liuhaifengzzzzz.github.io/numable/example.html)

```js
const nnn = numable(123456.123456);
console.log(nnn.format("#,###"));
// console => 123,456

// format
// #,### => 123,456
// ￥#,#### => ￥12,3456
// $#,##0.000 => $123,456.000
// 00000#,###.000000 => 00000123,456.000000
// #.#% => 12.3%
// #.00% => 12.30%
// ...
```

## 致谢

numable.js 虽然不那么复杂，但受到[Numeral.js](http://numeraljs.com/)的启发和大量借鉴
