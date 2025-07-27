/*
 * index.test.ts
 *
 * Copyright (c) 2024-2025 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/integer-ts
 */

import assert from "node:assert";
import test from "node:test";
import int, { Integer, integer } from "./index.js";

const add = (a: integer, b: integer): integer => (a + b) as integer;

// add(2, 3)
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'integer'.

test("that int(NaN) is equal 0", () => {
  assert.strictEqual(int(NaN), 0);
});

test("that int(Infinity) is equal Number.MAX_SAFE_INTEGER", () => {
  assert.strictEqual(Number.MAX_SAFE_INTEGER, int(Infinity));
});

test("that int(-Infinity) is equal Number.MIN_SAFE_INTEGER", () => {
  assert.strictEqual(Number.MIN_SAFE_INTEGER, int(-Infinity));
});

test("that int(123) is equal 123", () => {
  assert.strictEqual(123, int(123));
});

test("that int(3.14) is equal 3", () => {
  assert.strictEqual(3, int(3.14));
});

test("that int(0xffffffff) is equal -1", () => {
  assert.strictEqual(-1, int(0xffffffff));
});

test("that int(12) + 3.14 is equal 15.14", () => {
  assert.strictEqual(15.14, int(12) + 3.14);
});

test("that (123.456).toInteger() + 241 is equal 364", () => {
  assert.strictEqual(364, (123.456).toInteger() + 241);
});

test("that add(Integer(2), Integer(3)) is equal 5", () => {
  assert.strictEqual(5, add(Integer(2), Integer(3)));
});

test("that Integer(12.34) + Integer(34.56) is equal 46", () => {
  assert.strictEqual(46, Integer(12.34) + Integer(34.56));
});
