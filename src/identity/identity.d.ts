﻿declare function isString(x: any): x is string;
declare function isNullOrEmptyString(x: any): boolean;
declare function isNotNullOrEmptyString(x: any): x is string;
declare function isNumber(x: any): x is number;
declare function isBuffer(x: any): x is Buffer;
declare function isInteger(x: any): x is number;
declare function isObject(x: any): x is Record<string, any>;
export { isBuffer, isInteger, isNotNullOrEmptyString, isNullOrEmptyString, isNumber, isObject, isString, };
//# sourceMappingURL=identity.d.ts.map