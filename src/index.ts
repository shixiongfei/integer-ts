/*
 * index.ts
 *
 * Copyright (c) 2024 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/integer-ts
 */

const __integer_type__ = Symbol();
export type integer = number & { readonly [__integer_type__]: unique symbol };

export class Integer {
  static of(x: number): integer {
    if (Number.isInteger(x)) {
      return x as integer;
    }

    if (Number.isFinite(x)) {
      return Math.floor(Math.round(x * 10) / 10) as integer;
    }

    if (x === Number.POSITIVE_INFINITY) {
      return Number.MAX_SAFE_INTEGER as integer;
    }

    if (x === Number.NEGATIVE_INFINITY) {
      return Number.MIN_SAFE_INTEGER as integer;
    }

    return 0 as integer;
  }
}

export default Integer;
