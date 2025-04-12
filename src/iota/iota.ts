import { u31b } from "@f0c1s/pkgs/utils";

function iota(n: number): Array<number> {
    return Array(u31b(n)).fill(0).map((_, i) => i);
}

export { iota };
