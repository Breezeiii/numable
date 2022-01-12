export interface __defaultModel {
  currentLocal: string;
  zeroFormat: null | string;
  nullFormat: null | string;
  defaultFormat: string;
  [key: string]: any;
}

export interface NumberalModel {
  input: number;
  value: number;
  [key: string]: any;
}

export interface NumberalConstructor {
  new (input: number, value: number): NumberalModel;
}

export interface localModel {
  decimal: string;
  delimiter: string;
}

export interface localsModel {
  [key: string]: localModel;
}

export interface formatsModel {
  [key: string]: {
    regexps: {
      format: RegExp;
    };
    format: (value: number, pattern: string) => string;
  };
}

// export interface numberalModel {
//   version: string;
//   options: __defaultModel;
//   formats: formatsModel;
//   locals: localsModel;
//   local: string;
//   localData: (key: string) => localModel;
//   reset: () => void;

//   defaultOptions: (options: __defaultModel) => __defaultModel;
//   register: (this: any, type: string, name: string, __obj: any) => any;
//   _: any;
//   fn: any;
// }
