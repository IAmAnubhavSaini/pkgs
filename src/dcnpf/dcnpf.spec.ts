import { dcnpf } from './dcnpf';

describe('dcnpf', () => {
    it('should clone primitives unchanged', () => {
        expect(dcnpf(null)).toBe(null);
        expect(dcnpf(undefined)).toBe(undefined);
        expect(dcnpf(42)).toBe(42);
        expect(dcnpf('str')).toBe('str');
        expect(dcnpf(true)).toBe(true);
        expect(dcnpf(Symbol.for('sym'))).toBe(Symbol.for('sym'));
    });

    it('should deeply clone plain objects with no prototype', () => {
        const obj = { a: 1, b: { c: 2 } };
        const cloned = dcnpf(obj);
        expect(cloned).toEqual(obj);
        expect(Object.getPrototypeOf(cloned)).toBe(null);
        expect(Object.getPrototypeOf(cloned.b)).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned.b)).toBeTrue();
        expect(cloned).not.toBe(obj);
        expect(cloned.b).not.toBe(obj.b);
    });

    it('should deeply clone arrays', () => {
        const arr = [1, [2, 3]];
        const cloned = dcnpf(arr);
        expect(cloned).toEqual(arr);
        expect(Array.isArray(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned[1])).toBeTrue();
        expect(cloned).not.toBe(arr);
        expect(cloned[1]).not.toBe(arr[1]);
    });

    it('should deeply clone Maps', () => {
        const map = new Map<any, any>([['a', { x: 1 }]]);
        const cloned = dcnpf(map);
        expect(cloned instanceof Map).toBeTrue();
        expect(cloned.get('a')).toEqual({ x: 1 });
        expect(Object.getPrototypeOf(cloned.get('a'))).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned.get('a'))).toBeTrue();
        expect(cloned).not.toBe(map);
        expect(cloned.get('a')).not.toBe(map.get('a'));
    });

    it('should deeply clone Sets', () => {
        const set = new Set<any>([{ y: 2 }]);
        const cloned = dcnpf(set);
        expect(cloned instanceof Set).toBeTrue();
        const [value] = cloned;
        expect(value).toEqual({ y: 2 });
        expect(Object.getPrototypeOf(value)).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(value)).toBeTrue();
        expect(cloned).not.toBe(set);
    });

    it('should handle circular references', () => {
        const obj: any = {};
        obj.self = obj;
        const cloned = dcnpf(obj);
        expect(cloned.self).toBe(cloned);
        expect(Object.getPrototypeOf(cloned)).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
    });

    it('should freeze all nested objects', () => {
        const obj = { a: { b: { c: 123 } } };
        const cloned = dcnpf(obj);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned.a)).toBeTrue();
        expect(Object.isFrozen(cloned.a.b)).toBeTrue();
    });
});
