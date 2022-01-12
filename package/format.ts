import _isNull from "lodash/isNull";
import _range from "lodash/range";
import _max from "lodash/max";

import { getCurrentLocal } from "./variable";

const DELIMITER = ",";
const DECIMAL = ".";
const PLACEHOLDER = ["0", "#"];

function formatNumber(value: string, pattern: string) {
  let patterns: string[] = pattern.split(DECIMAL);
  let values: string[] = value.split(DECIMAL);

  const [prefixPattern, suffixPattern] = patterns;
  const [prefixValue, suffixValue] = values;

  let delimiterIndex: number =
    prefixPattern.indexOf(DELIMITER) == -1
      ? -1
      : prefixPattern.length - prefixPattern.indexOf(DELIMITER);

  let prefixFormat = format(
    prefixPattern.replace(DELIMITER, ""),
    prefixValue,
    0
  );

  let suffixFormat = format(
    suffixPattern ? suffixPattern.split("").reverse().join("") : "",
    suffixValue ? suffixValue.split("").reverse().join("") : "",
    1
  );

  prefixFormat = prefixFormat.split("").reverse().join("");

  let vaildPrefix = new RegExp(
    "[0-9]{" + (delimiterIndex - 1) + DELIMITER + (delimiterIndex - 1) + "}",
    "gi"
  );
  let prefixData =
    delimiterIndex > -1 ? prefixFormat.match(vaildPrefix) : undefined;

  if (prefixData && prefixData.length > 0) {
    let __prefix = prefixFormat.replace(prefixData.join(""), "");

    prefixFormat =
      prefixData.join(DELIMITER) + (__prefix == "" ? "" : DELIMITER) + __prefix;
  }

  prefixFormat = prefixFormat.split("").reverse().join("");

  return (
    (prefixFormat == "" ? "0" : prefixFormat) +
    (suffixFormat != ""
      ? DECIMAL + suffixFormat.split("").reverse().join("")
      : "")
  );
}

function format(
  pattern: string,
  value: string,
  delimiterIndex: number
): string {
  let __length: number = <number>_max([pattern.length, value.length]);

  let __patterns: string[] = pattern.split("");
  let __values: string[] = value.split("");

  let flag: boolean = true,
    valueFormat: string = "";

  const __length_array: number[] = _range(__length);

  __length_array.forEach((i: number): void => {
    let __value: string = __values[__values.length - __length + i];
    let __pattern: string = __patterns[__patterns.length - __length + i];

    if (delimiterIndex == 0) {
      if (flag) {
        if (
          (__value && __pattern && (__value != "0" || __pattern == "0")) ||
          (__value && __value != "0" && !__pattern) ||
          (__pattern && __pattern == "0" && !__value)
        ) {
          valueFormat += __value ? __value : "0";
          flag = false;
        }
      } else {
        valueFormat += __value ? __value : "0";
      }
    } else {
      if (__pattern && (__pattern == "0" || (__pattern == "#" && __value)))
        valueFormat += __value ? __value : "0";
    }
  });

  return valueFormat;
}

function numberToFormat(value: number, pattern: string = "") {
  const local = getCurrentLocal();

  const __regexp = [...PLACEHOLDER, DELIMITER, DECIMAL].join("");

  let vaildPattern = new RegExp(`[${__regexp}]{1,}`, "gi");
  //   let vaildPattern = /[0#,.]{1,}/;
  let __pattern: null | string[] = pattern.match(vaildPattern);

  if (_isNull(__pattern)) {
    throw new TypeError("format 存在非法字符");
  } else {
    const __pattern_temp = __pattern[0];
    const valueFormat = formatNumber(String(value), __pattern_temp);

    return pattern
      .replace(__pattern_temp, valueFormat)
      .replace(DELIMITER, local.delimiter)
      .replace(DECIMAL, local.decimal);
  }
}

export default numberToFormat;
