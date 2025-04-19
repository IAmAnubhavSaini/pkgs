"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dcnpf_1 = require("./dcnpf");
describe('dcnpf', () => {
    it('should clone primitives unchanged', () => {
        expect((0, dcnpf_1.dcnpf)(null)).toBe(null);
        expect((0, dcnpf_1.dcnpf)(undefined)).toBe(undefined);
        expect((0, dcnpf_1.dcnpf)(42)).toBe(42);
        expect((0, dcnpf_1.dcnpf)('str')).toBe('str');
        expect((0, dcnpf_1.dcnpf)(true)).toBe(true);
        expect((0, dcnpf_1.dcnpf)(Symbol.for('sym'))).toBe(Symbol.for('sym'));
    });
    it('should deeply clone plain objects with no prototype', () => {
        const obj = { a: 1, b: { c: 2 } };
        const cloned = (0, dcnpf_1.dcnpf)(obj);
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
        const cloned = (0, dcnpf_1.dcnpf)(arr);
        expect(cloned).toEqual(arr);
        expect(Array.isArray(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned[1])).toBeTrue();
        expect(cloned).not.toBe(arr);
        expect(cloned[1]).not.toBe(arr[1]);
    });
    it('should deeply clone Maps', () => {
        const map = new Map([['a', { x: 1 }]]);
        const cloned = (0, dcnpf_1.dcnpf)(map);
        expect(cloned instanceof Map).toBeTrue();
        expect(cloned.get('a')).toEqual({ x: 1 });
        expect(Object.getPrototypeOf(cloned.get('a'))).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned.get('a'))).toBeTrue();
        expect(cloned).not.toBe(map);
        expect(cloned.get('a')).not.toBe(map.get('a'));
    });
    it('should deeply clone Sets', () => {
        const set = new Set([{ y: 2 }]);
        const cloned = (0, dcnpf_1.dcnpf)(set);
        expect(cloned instanceof Set).toBeTrue();
        const [value] = cloned;
        expect(value).toEqual({ y: 2 });
        expect(Object.getPrototypeOf(value)).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(value)).toBeTrue();
        expect(cloned).not.toBe(set);
    });
    it('should handle circular references', () => {
        const obj = {};
        obj.self = obj;
        const cloned = (0, dcnpf_1.dcnpf)(obj);
        expect(cloned.self).toBe(cloned);
        expect(Object.getPrototypeOf(cloned)).toBe(null);
        expect(Object.isFrozen(cloned)).toBeTrue();
    });
    it('should freeze all nested objects', () => {
        const obj = { a: { b: { c: 123 } } };
        const cloned = (0, dcnpf_1.dcnpf)(obj);
        expect(Object.isFrozen(cloned)).toBeTrue();
        expect(Object.isFrozen(cloned.a)).toBeTrue();
        expect(Object.isFrozen(cloned.a.b)).toBeTrue();
    });
});
//# sourceMappingURL=dcnpf.spec.js.map