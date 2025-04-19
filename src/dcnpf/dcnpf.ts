function dcnpf<T>(cloneable: T): T {
    const seen = new WeakMap();
    function clone(val: any): any {
        if (val === undefined || val === null || typeof val !== 'object') {
            return val;
        }

        if (seen.has(val)) {
            return seen.get(val);
        }

        if (Array.isArray(val)) {
            return Object.freeze(val.map(clone));
        }

        if (val instanceof Map) {
            const map = new Map();
            seen.set(val, map);
            for (const [k, v] of val.entries()) {
                map.set(clone(k), clone(v));
            }
            return Object.freeze(map);
        }

        if (val instanceof Set) {
            const set = new Set();
            seen.set(val, set);
            for (const v of val.values()) {
                set.add(clone(v));
            }
            return Object.freeze(set);
        }

        if (val && typeof val === 'object') {
            const o = Object.create(null);
            seen.set(val, o);
            for (const key of Object.keys(val)) {
                o[key] = clone(val[key]);
            }
            return Object.freeze(o);
        }

        return val;
    }

    return clone(cloneable);
}


export { dcnpf };
