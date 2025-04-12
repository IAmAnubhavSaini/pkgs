function isString(x: any): x is string {
    return x !== null && typeof x === "string";
}

function isNullOrEmptyString(x: any): boolean {
    return x === null || (typeof x === "string" && x.length === 0);
}

function isNotNullOrEmptyString(x: any): x is string {
    return x !== null && typeof x === "string" && x.length > 0;
}

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isBuffer(x: any): x is Buffer {
    return x !== undefined &&
        x !== null &&
        typeof x === "object" &&
        x.constructor !== null &&
        typeof x.constructor.isBuffer === "function" &&
        x.constructor.isBuffer(x);
}

function isInteger(x: any): x is number {
    return isNumber(x) &&
        (Math.floor(x) === x) &&
        x !== Infinity &&
        x !== -Infinity;
}

function isObject(x: any): x is Record<string, any> {
    return x !== undefined &&
        x !== null &&
        typeof x === "object";
}

export {
    isBuffer,
    isInteger,
    isNotNullOrEmptyString,
    isNullOrEmptyString,
    isNumber,
    isObject,
    isString,
};
