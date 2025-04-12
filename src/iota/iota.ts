function iota(n: number): Array<number> {
    return Array(n | 0).fill(0).map((_, i) => i);
}

export { iota };
