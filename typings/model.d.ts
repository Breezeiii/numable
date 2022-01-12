export interface __defaultModel {
    currentLocal: string;
    zeroFormat: null | string;
    nullFormat: null | string;
    defaultFormat: string;
    [key: string]: any;
}
export interface numableModel {
    input: number;
    value: number;
    [key: string]: any;
}
export interface numableConstructor {
    new (input: number, value: number): numableModel;
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
