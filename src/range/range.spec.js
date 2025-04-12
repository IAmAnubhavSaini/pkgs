"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("./range");
describe("range", () => {
    it("correctly generates range between 10(inclusive) and 20(exclusive)", () => {
        const actual = (0, range_1.range)(10, 20);
        expect(actual).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    });
    it("correctly returns range, even if the ends are twisted", () => {
        const actual = (0, range_1.range)(20, 10);
        expect(actual).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    });
});
//# sourceMappingURL=range.spec.js.map