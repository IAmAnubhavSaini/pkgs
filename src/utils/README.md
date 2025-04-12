# `@f0c1s/pkgs/utils`

`npm install @f0c1s/pkgs`

```javascript
> const {iota} = await import("@f0c1s/pkgs/iota")
undefined
> iota(10)
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
> const {u31b} = await import("@f0c1s/pkgs/utils");
undefined
> u31b(-1)
0
> u31b(0)
0
> u31b(2**31)
0
> u31b(2**31-1)
2147483647
```
