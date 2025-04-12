import {
    isBuffer,
    isInteger,
    isNotNullOrEmptyString,
    isNullOrEmptyString,
    isNumber,
    isObject,
    isString,
} from "./identity";

describe("identity", () => {
    describe("isBuffer", () => {
        it("works correctly", () => {
            let actual = isBuffer(Buffer.from("what"));
            expect(actual).toBeTrue();
            actual = isBuffer(Buffer.alloc(42));
            expect(actual).toBeTrue();
        });
        it('should return false for non-Buffer values', () => {
            expect(isBuffer(undefined)).toBeFalse();
            expect(isBuffer(null)).toBeFalse();
            expect(isBuffer("")).toBeFalse();
            expect(isBuffer(true)).toBeFalse();
            expect(isBuffer(false)).toBeFalse();
            expect(isBuffer(-1)).toBeFalse();
            expect(isBuffer(-0)).toBeFalse();
            expect(isBuffer(0)).toBeFalse();
            expect(isBuffer(1)).toBeFalse();
            expect(isBuffer(4.2)).toBeFalse();
            expect(isBuffer('string')).toBeFalse();
            expect(isBuffer({})).toBeFalse();
            expect(isBuffer(new Set())).toBeFalse();
            expect(isBuffer(new Map())).toBeFalse();
            expect(isBuffer(new WeakMap())).toBeFalse();
            expect(isBuffer(function foo() { })).toBeFalse();
        });

    });
    describe("isInteger", () => {
        it("works correctly", () => {
            const actual = isInteger(10);
            expect(actual).toBeTrue();

            expect(isInteger(-1)).toBeTrue();
            expect(isInteger(-0)).toBeTrue();
            expect(isInteger(0)).toBeTrue();
            expect(isInteger(1)).toBeTrue();
        });
        it('should return false for non-Integer values', () => {
            expect(isInteger(undefined)).toBeFalse();
            expect(isInteger(null)).toBeFalse();
            expect(isInteger("")).toBeFalse();
            expect(isInteger(true)).toBeFalse();
            expect(isInteger(false)).toBeFalse();
            // expect(isInteger(-1)).toBeFalse();
            // expect(isInteger(-0)).toBeFalse();
            // expect(isInteger(0)).toBeFalse();
            // expect(isInteger(1)).toBeFalse();
            expect(isInteger(4.2)).toBeFalse();
            expect(isInteger('string')).toBeFalse();
            expect(isInteger({})).toBeFalse();
            expect(isInteger(new Set())).toBeFalse();
            expect(isInteger(new Map())).toBeFalse();
            expect(isInteger(new WeakMap())).toBeFalse();
            expect(isInteger(function foo() { })).toBeFalse();
        });
    });
    describe("isNotNullOrEmptyString", () => {
        it("works correctly", () => {
            const actual = isNotNullOrEmptyString("str");
            expect(actual).toBeTrue();
        });
        it('should return false empty, nullish, falsey values', () => {
            expect(isNotNullOrEmptyString(undefined)).toBeFalse();
            expect(isNotNullOrEmptyString(null)).toBeFalse();
            expect(isNotNullOrEmptyString("")).toBeFalse();
            expect(isNotNullOrEmptyString(true)).toBeFalse();
            expect(isNotNullOrEmptyString(false)).toBeFalse();
            expect(isNotNullOrEmptyString(-1)).toBeFalse();
            expect(isNotNullOrEmptyString(-0)).toBeFalse();
            expect(isNotNullOrEmptyString(0)).toBeFalse();
            expect(isNotNullOrEmptyString(1)).toBeFalse();
            expect(isNotNullOrEmptyString(4.2)).toBeFalse();
            // expect(isNotNullOrEmptyString('string')).toBeFalse();
            expect(isNotNullOrEmptyString({})).toBeFalse();
            expect(isNotNullOrEmptyString(new Set())).toBeFalse();
            expect(isNotNullOrEmptyString(new Map())).toBeFalse();
            expect(isNotNullOrEmptyString(new WeakMap())).toBeFalse();
            expect(isNotNullOrEmptyString(function foo() { })).toBeFalse();
        });
    });
    describe("isNullOrEmptyString", () => {
        it("works correctly", () => {
            let actual = isNullOrEmptyString("");
            expect(actual).toBeTrue();
            expect(isNullOrEmptyString('string')).toBeFalse();
            expect(isNullOrEmptyString(null)).toBeTrue();
        });
        it('should return false empty, nullish, falsey values', () => {
            expect(isNullOrEmptyString(undefined)).toBeFalse();
            // expect(isNullOrEmptyString(null)).toBeFalse();
            // expect(isNullOrEmptyString("")).toBeFalse();
            expect(isNullOrEmptyString(true)).toBeFalse();
            expect(isNullOrEmptyString(false)).toBeFalse();
            expect(isNullOrEmptyString(-1)).toBeFalse();
            expect(isNullOrEmptyString(-0)).toBeFalse();
            expect(isNullOrEmptyString(0)).toBeFalse();
            expect(isNullOrEmptyString(1)).toBeFalse();
            expect(isNullOrEmptyString(4.2)).toBeFalse();
            // expect(isNullOrEmptyString('string')).toBeFalse();
            expect(isNullOrEmptyString({})).toBeFalse();
            expect(isNullOrEmptyString(new Set())).toBeFalse();
            expect(isNullOrEmptyString(new Map())).toBeFalse();
            expect(isNullOrEmptyString(new WeakMap())).toBeFalse();
            expect(isNullOrEmptyString(function foo() { })).toBeFalse();
        });
    });
    describe("isNumber", () => {
        it("works correctly", () => {
            const actual = isNumber(19.12);
            expect(actual).toBeTrue();
        });

    });
    describe("isObject", () => {
        it("works correctly", () => {
            const actual = isObject({ "eh": "meh" });
            expect(actual).toBeTrue();
        });

    });
    describe("isString", () => {
        it("works correctly", () => {
            let actual = isString("a string");
            expect(actual).toBeTrue();
            actual = isString("");
            expect(actual).toBeTrue();
        });

    });

})
