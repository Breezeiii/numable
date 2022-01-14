## numable

<img src="https://badgen.net/npm/v/numable"/>&nbsp;
<img src="https://badgen.net/npm/license/numable"/>&nbsp;
<img src="https://badgen.net/npm/dt/numable"/>&nbsp;
<img src="https://badgen.net/npm/types/numable"/>

## use

```
npm install numable -S
```

```js
var numable = require("numable");
or;
import numable from "numable";
```

## Create

```js
const nnn = numable(123456.123456);
```

## Format

[demo](https://liuhaifengzzzzz.github.io/numable/example.html)

```js
const nnn = numable(123456.123456);

console.log(nnn.format("#,###"));
// console => 123,456
```

## Settings

Default Formatting

```js
numable.defaultOptions({
  currentLocal: "zh-CN",
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: "#,###"
});
```

## Local

```js
numable.register("local", "custom-local", {
  decimal: ".",
  delimiter: ","
});

numable.local("custom-local");
```

## Custom Format

```js
numable.register("format", "percent", {
  regexps: {
    format: /(%)/
  },
  format: function (value, pattern = "") {
    const scalePercentByValue = 100;

    return numable._.numberToFormat(value * scalePercentByValue, pattern);
  }
});
```
