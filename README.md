# next-safe-assign
> Safe assign for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-safe-assign
```

## usage
```js
import '@jswork/next-safe-assign';

const res = safeAssign(
  { a: 1, b: 2 },
  { c: 2, a: '' },
  (key, value) => {
    // you can customize your ignore function
    return value == null;
  }
);

// { a: '', b: 2, c: 2 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-safe-assign/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-safe-assign
[version-url]: https://npmjs.org/package/@jswork/next-safe-assign

[license-image]: https://img.shields.io/npm/l/@jswork/next-safe-assign
[license-url]: https://github.com/afeiship/next-safe-assign/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-safe-assign
[size-url]: https://github.com/afeiship/next-safe-assign/blob/master/dist/next-safe-assign.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-safe-assign
[download-url]: https://www.npmjs.com/package/@jswork/next-safe-assign
