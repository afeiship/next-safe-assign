# next-safe-assign
> Safe assign for next.

## installation
```bash
npm install -S @feizheng/next-safe-assign
```

## usage
```js
import '@feizheng/next-safe-assign';

const res = safeAssign(
  {
    a: 1,
    b: 2
  },
  {
    c: 2,
    a: ''
  },
  (key, value) => {
    // you can customize your ignore function
    return value == null;
  }
);

// { a: '', b: 2, c: 2 }
```

## resources
- https://github.com/zmen/safe-assign
