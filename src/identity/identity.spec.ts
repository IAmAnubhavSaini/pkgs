import {
    isBuffer,
    isInteger,
    isNotNullorEmptyString,
    isNumber,
    isObject,
    isString,
} from "./identity";

describe("identity", () => {
    describe("isBuffer", () => {
        it("works correctly", () => {
            const actual = isBuffer(Buffer.from("what"));
            expect(actual).toBeTrue();
        });

    });
    describe("isInteger", () => {
        it("works correctly", () => {
            const actual = isInteger(10);
            expect(actual).toBeTrue();
        });

    });
    describe("isNotNullorEmptyString", () => {
        it("works correctly", () => {
            const actual = isNotNullorEmptyString("str");
            expect(actual).toBeTrue();
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
