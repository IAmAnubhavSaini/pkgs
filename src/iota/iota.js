"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iota = iota;
const utils_1 = require("@f0c1s/pkgs/utils");
function iota(n) {
    return Array((0, utils_1.u31b)(n)).fill(0).map((_, i) => i);
}
//# sourceMappingURL=iota.js.map