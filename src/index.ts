/*
 * index.ts
 *
 * Copyright (c) 2024-2025 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/integer-ts
 */

const __integer_type__ = Symbol();
export type integer = number & { readonly [__integer_type__]: unique symbol };

export const Integer = Object.assign(
  (value: number): integer => (value | 0) as integer,
  Object.freeze({ MAX_INTEGER: 0x7fffffff | 0, MIN_INTEGER: 0x80000000 | 0 }),
);

declare global {
  export interface Number {
    toInteger: () => integer;
  }
}

Number.prototype.toInteger = function (this: number) {
  return Integer(this);
};

export default Integer;
