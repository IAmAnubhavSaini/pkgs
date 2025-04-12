/**
 * Unsigned 31 bit number; think clamp
 * @param num number that we need to clamp to 31 bits
 * @returns Outputs a number [0, 2**31 -1] i.e. zero to 2147483647
 */
function u31b(num: number): number {
    let x = num | 0;
    return x & ~(x >> 31);
}

export { u31b };
