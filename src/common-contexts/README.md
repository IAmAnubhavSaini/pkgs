# `@f0c1s/pkgs/common-contexts`

`npm install @f0c1s/pkgs`

```javascript
> const {commonContexts} = await import("@f0c1s/pkgs/common-contexts");
undefined
> commonContexts(["what is this"], ["what"])
[ 'what_is' ]
> commonContexts(["what is this"], ["what", "this"])
[]
> commonContexts(["what is this", "what the when", "when is this", "bro what!"], ["what"])
[ 'what_is', 'what_the' ]
```

Check [common-contexts.spec.ts](./common-contexts.spec.ts) for more examples.
