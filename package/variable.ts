import { __defaultModel, localsModel, formatsModel } from "./model";

export const formats: formatsModel = {};
export const locals: localsModel = {};

export const __default = <__defaultModel>{
  currentLocal: "zh-CN",
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: "#,###"
};

export const options = <__defaultModel>{
  currentLocal: __default.currentLocal,
  zeroFormat: __default.zeroFormat,
  nullFormat: __default.nullFormat,
  defaultFormat: __default.defaultFormat
};

export function getCurrentLocal() {
  return locals[options.currentLocal];
}
