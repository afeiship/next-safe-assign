const nx = require('@feizheng/next-js-core2');
const safeAssign = require('../src/next-safe-assign');

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
    return value == null;
  }
);

console.log(res);
