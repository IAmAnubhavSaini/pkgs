"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iota_1 = require("./iota");
describe("iota", () => {
    it("generates 10 numbers correctly from 0 to 9", () => {
        const actual = (0, iota_1.iota)(10);
        expect(actual).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("generates no number when input number is negative", () => {
        const actual = (0, iota_1.iota)(-1);
        expect(actual).toEqual([]);
    });
    it("generates no number when input number is zero", () => {
        const actual = (0, iota_1.iota)(0);
        expect(actual).toEqual([]);
    });
});
//# sourceMappingURL=iota.spec.js.map