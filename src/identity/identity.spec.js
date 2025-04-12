"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
describe("identity", () => {
    describe("isBuffer", () => {
        it("works correctly", () => {
            let actual = (0, identity_1.isBuffer)(Buffer.from("what"));
            expect(actual).toBeTrue();
            actual = (0, identity_1.isBuffer)(Buffer.alloc(42));
            expect(actual).toBeTrue();
        });
        it('should return false for non-Buffer values', () => {
            expect((0, identity_1.isBuffer)(undefined)).toBeFalse();
            expect((0, identity_1.isBuffer)(null)).toBeFalse();
            expect((0, identity_1.isBuffer)("")).toBeFalse();
            expect((0, identity_1.isBuffer)(true)).toBeFalse();
            expect((0, identity_1.isBuffer)(false)).toBeFalse();
            expect((0, identity_1.isBuffer)(-1)).toBeFalse();
            expect((0, identity_1.isBuffer)(-0)).toBeFalse();
            expect((0, identity_1.isBuffer)(0)).toBeFalse();
            expect((0, identity_1.isBuffer)(1)).toBeFalse();
            expect((0, identity_1.isBuffer)(4.2)).toBeFalse();
            expect((0, identity_1.isBuffer)('string')).toBeFalse();
            expect((0, identity_1.isBuffer)({})).toBeFalse();
            expect((0, identity_1.isBuffer)(new Set())).toBeFalse();
            expect((0, identity_1.isBuffer)(new Map())).toBeFalse();
            expect((0, identity_1.isBuffer)(new WeakMap())).toBeFalse();
            expect((0, identity_1.isBuffer)(function foo() { })).toBeFalse();
        });
    });
    describe("isInteger", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isInteger)(10);
            expect(actual).toBeTrue();
            expect((0, identity_1.isInteger)(-1)).toBeTrue();
            expect((0, identity_1.isInteger)(-0)).toBeTrue();
            expect((0, identity_1.isInteger)(0)).toBeTrue();
            expect((0, identity_1.isInteger)(1)).toBeTrue();
        });
        it('should return false for non-Integer values', () => {
            expect((0, identity_1.isInteger)(undefined)).toBeFalse();
            expect((0, identity_1.isInteger)(null)).toBeFalse();
            expect((0, identity_1.isInteger)("")).toBeFalse();
            expect((0, identity_1.isInteger)(true)).toBeFalse();
            expect((0, identity_1.isInteger)(false)).toBeFalse();
            // expect(isInteger(-1)).toBeFalse();
            // expect(isInteger(-0)).toBeFalse();
            // expect(isInteger(0)).toBeFalse();
            // expect(isInteger(1)).toBeFalse();
            expect((0, identity_1.isInteger)(4.2)).toBeFalse();
            expect((0, identity_1.isInteger)('string')).toBeFalse();
            expect((0, identity_1.isInteger)({})).toBeFalse();
            expect((0, identity_1.isInteger)(new Set())).toBeFalse();
            expect((0, identity_1.isInteger)(new Map())).toBeFalse();
            expect((0, identity_1.isInteger)(new WeakMap())).toBeFalse();
            expect((0, identity_1.isInteger)(function foo() { })).toBeFalse();
        });
    });
    describe("isNotNullOrEmptyString", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isNotNullOrEmptyString)("str");
            expect(actual).toBeTrue();
        });
        it('should return false empty, nullish, falsey values', () => {
            expect((0, identity_1.isNotNullOrEmptyString)(undefined)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(null)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)("")).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(true)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(false)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(-1)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(-0)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(0)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(1)).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(4.2)).toBeFalse();
            // expect(isNotNullOrEmptyString('string')).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)({})).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(new Set())).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(new Map())).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(new WeakMap())).toBeFalse();
            expect((0, identity_1.isNotNullOrEmptyString)(function foo() { })).toBeFalse();
        });
    });
    describe("isNullOrEmptyString", () => {
        it("works correctly", () => {
            let actual = (0, identity_1.isNullOrEmptyString)("");
            expect(actual).toBeTrue();
            expect((0, identity_1.isNullOrEmptyString)('string')).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(null)).toBeTrue();
        });
        it('should return false empty, nullish, falsey values', () => {
            expect((0, identity_1.isNullOrEmptyString)(undefined)).toBeFalse();
            // expect(isNullOrEmptyString(null)).toBeFalse();
            // expect(isNullOrEmptyString("")).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(true)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(false)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(-1)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(-0)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(0)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(1)).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(4.2)).toBeFalse();
            // expect(isNullOrEmptyString('string')).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)({})).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(new Set())).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(new Map())).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(new WeakMap())).toBeFalse();
            expect((0, identity_1.isNullOrEmptyString)(function foo() { })).toBeFalse();
        });
    });
    describe("isNumber", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isNumber)(19.12);
            expect(actual).toBeTrue();
        });
    });
    describe("isObject", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isObject)({ "eh": "meh" });
            expect(actual).toBeTrue();
        });
    });
    describe("isString", () => {
        it("works correctly", () => {
            let actual = (0, identity_1.isString)("a string");
            expect(actual).toBeTrue();
            actual = (0, identity_1.isString)("");
            expect(actual).toBeTrue();
        });
    });
});
//# sourceMappingURL=identity.spec.js.map