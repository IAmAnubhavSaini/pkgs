"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBuffer = isBuffer;
exports.isInteger = isInteger;
exports.isNotNullOrEmptyString = isNotNullOrEmptyString;
exports.isNullOrEmptyString = isNullOrEmptyString;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
function isString(x) {
    return x !== null && typeof x === "string";
}
function isNullOrEmptyString(x) {
    return x === null || (typeof x === "string" && x.length === 0);
}
function isNotNullOrEmptyString(x) {
    return x !== null && typeof x === "string" && x.length > 0;
}
function isNumber(x) {
    return typeof x === "number";
}
function isBuffer(x) {
    return x !== undefined &&
        x !== null &&
        typeof x === "object" &&
        x.constructor !== null &&
        typeof x.constructor.isBuffer === "function" &&
        x.constructor.isBuffer(x);
}
function isInteger(x) {
    return isNumber(x) &&
        (Math.floor(x) === x) &&
        x !== Infinity &&
        x !== -Infinity;
}
function isObject(x) {
    return x !== undefined &&
        x !== null &&
        typeof x === "object";
}
//# sourceMappingURL=identity.js.map