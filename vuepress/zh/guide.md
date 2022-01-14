## 使用

```
npm install numable -S
```

```js
var numable = require("numable");
// or;
import numable from "numable";
// or;
<script src="numable/dist/index.umd.js"></script>;
```

## 创建

```js
const nnn = numable(123456.123456);
```

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

## 设置

默认格式

```js
numable.defaultOptions({
  currentLocal: "zh-CN",
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: "#,###"
});
```

## 分隔符

修改默认分隔符

```js
numable.register("local", "custom-local", {
  decimal: ".",
  delimiter: ","
});

numable.local("custom-local");
```

## 自定义格式化

### 示例 1

```js
numable.register("format", "percent", {
  regexps: {
    format: /(%)/
  },
  format: function (value, pattern) {
    const scalePercentByValue = 100;

    return numable._.numberToFormat(value * scalePercentByValue, pattern);
  }
});
```

### 示例 2

More Flexible formatting

```js
numable(123.456).format("#,###", 1, 2, 3, 4, 5);

numable.register("format", "Example", {
  regexps: {
    format: /(@)/
  },
  format: function (value, pattern, ...args) {
    console.log(value, pattern, args);
    // console => 123.456, #,###, 1 , 1, 2, 3, 4, 5
  }
});
```
