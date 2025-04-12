# `@f0c1s/pkgs/concordance`

`npm install @f0c1s/pkgs`

```javascript
> const {concordance} = await import("./src/concordance/concordance.js")
undefined
> concordance(["what the when", "when is what", "What?"], "what")
[ [ 'what the when', 'when is what' ], [ 0, 1 ] ]
```

See [./concordance.spec.ts](./concordance.spec.ts) for more examples.
