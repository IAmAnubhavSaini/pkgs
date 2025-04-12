"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = range;
const utils_1 = require("../utils/utils");
function range(m, n) {
    [m, n] = [(0, utils_1.u31b)(m), (0, utils_1.u31b)(n)];
    if (m > n) {
        return range(n, m);
    }
    return Array(n - m).fill(m).map((v, i) => v + i);
}
//# sourceMappingURL=range.js.map