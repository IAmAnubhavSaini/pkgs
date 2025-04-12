import { u31b } from "./utils";

describe("utils", () => {
    it("clamps numbers to between 0 and 2**31-1 inclusively", () => {
        expect(u31b(-1)).toEqual(0);
        expect(u31b(0)).toEqual(0);
        expect(u31b(1)).toEqual(1);
        expect(u31b(2 ** 31 - 1)).toEqual(2 ** 31 - 1);
        expect(u31b(2 ** 31)).toEqual(0);
    });
});
