"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe("utils", () => {
    it("clamps numbers to between 0 and 2**31-1 inclusively", () => {
        expect((0, utils_1.u31b)(-1)).toEqual(0);
        expect((0, utils_1.u31b)(0)).toEqual(0);
        expect((0, utils_1.u31b)(1)).toEqual(1);
        expect((0, utils_1.u31b)(2 ** 31 - 1)).toEqual(2 ** 31 - 1);
        expect((0, utils_1.u31b)(2 ** 31)).toEqual(0);
    });
});
//# sourceMappingURL=utils.spec.js.map