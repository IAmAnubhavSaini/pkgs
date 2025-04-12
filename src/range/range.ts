import { u31b } from "../utils/utils";

function range(m: number, n: number): Array<number> {
    [m, n] = [u31b(m), u31b(n)];
    return Array(n - m).fill(m).map((v, i) => v + i);
}

export { range };
