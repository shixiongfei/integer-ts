/*
 * index.test.ts
 *
 * Copyright (c) 2024 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/integer-ts
 */

import Integer, { integer } from "./index.js";

console.log(Integer.of(NaN));
console.log(Integer.of(Infinity));
console.log(Integer.of(-Infinity));
console.log(Integer.of(123));
console.log(Integer.of(3.14));
console.log(Integer.of((0.1 + 0.2) * 10));
console.log(Integer.of((0.1 + 0.2) * -10));
console.log(Integer.of((0.1 + 0.7) * 10));
console.log(Integer.of((-0.1 - 0.7) * 10));

const add = (a: integer, b: integer) => a + b;

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'integer'.
// console.log(add(2, 3));

console.log(add(Integer.of(2), Integer.of(3)));
