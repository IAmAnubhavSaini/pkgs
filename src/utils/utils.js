"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u31b = u31b;
/**
 * Unsigned 31 bit number; think clamp
 * @param num number that we need to clamp to 31 bits
 * @returns Outputs a number [0, 2**31 -1] i.e. zero to 2147483647
 */
function u31b(num) {
    let x = num | 0;
    return x & ~(x >> 31);
}
//# sourceMappingURL=utils.js.map