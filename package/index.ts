import _isNaN from "lodash/isNaN";
import { version } from "../package.json";

import {
  NumberalModel,
  NumberalConstructor,
  localModel,
  localsModel,
  formatsModel,
  __defaultModel
} from "./model";

import { locals, formats, options, __default } from "./variable";
import numberToFormat from "./format";
import init from "./init";

const Numberal = function (
  this: NumberalModel,
  input: number,
  value: number
): void {
  this._input = input;
  this._value = value;
} as unknown as NumberalConstructor;

function numberal(input: any): NumberalModel {
  let value;

  if (isNumberal(input)) {
    value = input.value();
  } else if (input === 0 || typeof input === "undefined") {
    value = 0;
  } else if (input === null || _isNaN(input)) {
    value = null;
  } else {
    value = Number(input) || null;
  }

  return new Numberal(input, value);
}

numberal.version = version;

function isNumberal(obj: any) {
  return obj instanceof Numberal;
}

numberal.options = <__defaultModel>options;
numberal.formats = <formatsModel>formats;
numberal.locals = <localsModel>locals;

numberal.local = function (key: string): string {
  if (key) {
    options.currentLocal = key.toLowerCase();
  }

  return options.currentLocal;
};

numberal.localData = function (key: string): localModel {
  if (!key) {
    return locals[options.currentLocale];
  }

  key = key.toLowerCase();
  if (!locals[key]) {
    throw new Error("Unknown locale : " + key);
  }

  return locals[key];
};

numberal.reset = function () {
  Object.keys(__default).forEach((key: string) => {
    options[key] = __default[key];
  });
};

numberal.defaultOptions = function (__options: __defaultModel): __defaultModel {
  Object.assign(options, __options);
  return options;
};

// numberal.zeroFormat = function (format?: string) {
//   options.zeroFormat = typeof format === "string" ? format : null;
// };

// numberal.nullFormat = function (format?: string) {
//   options.nullFormat = typeof format === "string" ? format : null;
// };

// numberal.defaultFormat = function (format?: string) {
//   options.defaultFormat = typeof format === "string" ? format : "#,###";
// };

numberal.register = function (
  this: any,
  type: string,
  name: string,
  __obj: any
) {
  // name = name.toLowerCase();

  if (this[type + "s"][name]) {
    throw new TypeError(name + " " + type + " already registered.");
  }

  this[type + "s"][name] = __obj;

  return __obj;
};

numberal._ = {
  numberToFormat
};

numberal.fn = Numberal.prototype = {
  clone: function (this: NumberalModel) {
    return numberal(this);
  },
  format: function (inputString: string) {
    var value: number = this._value,
      format: string = inputString || options.defaultFormat,
      kind,
      output,
      formatFunction;

    // format based on value
    if (value === 0 && options.zeroFormat !== null) {
      output = options.zeroFormat;
    } else if (value === null && options.nullFormat !== null) {
      output = options.nullFormat;
    } else {
      for (kind in formats) {
        if (format.match(formats[kind].regexps.format)) {
          formatFunction = formats[kind].format;

          break;
        }
      }

      formatFunction = formatFunction || numberToFormat;

      output = formatFunction(value, format);
    }

    return output;
  },
  value: function () {
    return this._value;
  },
  input: function () {
    return this._input;
  },
  set: function (value: any) {
    this._value = Number(value);

    return this;
  }
};

init(numberal);

export default numberal;
