import { numableModel, localModel, localsModel, formatsModel, __defaultModel } from "./model";
import numberToFormat from "./format";
declare function numable(input: any): numableModel;
declare namespace numable {
    var version: string;
    var options: __defaultModel;
    var formats: formatsModel;
    var locals: localsModel;
    var local: (key: string) => string;
    var localData: (key: string) => localModel;
    var reset: () => void;
    var defaultOptions: (__options: __defaultModel) => __defaultModel;
    var register: (this: any, type: string, name: string, __obj: any) => any;
    var _: {
        numberToFormat: typeof numberToFormat;
    };
    var fn: {
        clone: (this: numableModel) => numableModel;
        format: (inputString: string) => string;
        value: () => any;
        input: () => any;
        set: (value: any) => any;
    };
}
export default numable;
