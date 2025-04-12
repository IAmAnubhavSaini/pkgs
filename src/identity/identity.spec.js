"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
describe("identity", () => {
    describe("isBuffer", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isBuffer)(Buffer.from("what"));
            expect(actual).toBeTrue();
        });
    });
    describe("isInteger", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isInteger)(10);
            expect(actual).toBeTrue();
        });
    });
    describe("isNotNullorEmptyString", () => {
        it("works correctly", () => {
            const actual = (0, identity_1.isNotNullorEmptyString)("str");
            expect(actual).toBeTrue();
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