---
home: true
---

# [numable](https://liuhaifengzzzzz.github.io/numable)

<img src="https://badgen.net/npm/v/numable"/>&nbsp;
<img src="https://badgen.net/npm/license/numable"/>&nbsp;
<img src="https://badgen.net/npm/dt/numable"/>&nbsp;
<img src="https://badgen.net/npm/types/numable"/>

## Introduction

A javascript library for formatting numbers.

[Website and documentation](https://liuhaifengzzzzz.github.io/numable)

## Browser Compatibility

numable.js supports all browsers that are ES5-compliant (IE8 and below are not supported).

## Documentation

To check out live [examples](https://liuhaifengzzzzz.github.io/numable/example.html) and docs, visit [numableJS](https://liuhaifengzzzzz.github.io/numable).

## format

[See the documentation for detailed formatting Settings](https://liuhaifengzzzzz.github.io/numable/example.html)

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

## Acknowlegements

numable.js, while less complex, was inspired by and heavily borrowed from [Numeral.js](http://numeraljs.com/)
