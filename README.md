# @warmthsea/utils

[![NPM version](https://img.shields.io/npm/v/@warmthsea/utils?color=a1b858&label=)](https://www.npmjs.com/package/@warmthsea/utils)
[![NPM download](https://img.shields.io/npm/dm/@warmthsea/utils?color=50a36f&label=)](https://www.npmjs.com/package/@warmthsea/utils)
<img alt="Github License" src="https://img.shields.io/badge/License-MIT-green.svg" />

## 📦 Install

```bash
pnpm i @warmthsea/utils
```

## 🦄 Usage

-  `utilAwaitTime`
```typescript
async function testFun () {
  await utilAwaitTime(300) // =>  setTimeout(() => { ... }, 300)
  console.log('load')
}
```

-  `utilDelay`
```typescript
let num = 1

function continuousClickFun (){
  utilDelay(() => {
    num ++
    console.log(num)
  }, 300)
}
```

-  `utilGetSuffix`
```typescript
console.log(utilGetSuffix('test.pdf')) // =>  pdf
```

-  `utilFormData`
```typescript
const testObject = {
  a: 1,
  b: 'test'
  c: undefined
}

console.log(utilFormData(testObject)) // =>  { a: 1, b: 'test' }
```

-  `utilObjectFilter`
```typescript
const testObject = {
  a: 0,
  b: false
  c: undefined
}

console.log(utilObjectFilter(testObject)) // =>  { a: 0, b: false }
```

-  `utilDownBlobFile`
```typescript
// request responseType is 'blob'

utilDownBlobFile(fileBlob,'text.xlsx')
```

-  `utilObjectArrayIncludes`
```typescript
const list = [{
  num: 1
},{
  num: 2
}]
const item = {
  num: 1
}

utilObjectArrayIncludes(list, item) // =>  true
```
## License

[MIT](./LICENSE) License © 2023 [Warmthsea](https://github.com/warmthsea)
