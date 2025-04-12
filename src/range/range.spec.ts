import { range } from "./range";

describe("range", () => {
    it("correctly generates range between 10(inclusive) and 20(exclusive)", () => {
        const actual = range(10, 20);
        expect(actual).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    });
    it("correctly returns range, even if the ends are twisted", () => {
        const actual = range(20, 10);
        expect(actual).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
    });
});
