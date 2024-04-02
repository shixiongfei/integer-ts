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
  static of(value: number): integer {
    if (Number.isInteger(value)) {
      return value as integer;
    }

    if (Number.isFinite(value)) {
      return Math.floor(Math.round(value * 10) / 10) as integer;
    }

    if (value === Number.POSITIVE_INFINITY) {
      return Number.MAX_SAFE_INTEGER as integer;
    }

    if (value === Number.NEGATIVE_INFINITY) {
      return Number.MIN_SAFE_INTEGER as integer;
    }

    return 0 as integer;
  }
}

declare global {
  export interface NumberConstructor {
    ofInteger(value: number): integer;
  }

  export interface Number {
    toInteger: () => integer;
  }
}

Number.ofInteger = function (value: number) {
  return Integer.of(value);
};

Number.prototype.toInteger = function (this: number) {
  return Integer.of(this);
};

export default Integer;
