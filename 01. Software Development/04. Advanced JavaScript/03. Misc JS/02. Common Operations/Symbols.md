# Symbols

&nbsp;

A `Symbol` is a primitive value that is guaranteed to be unique. Every time you call `Symbol()` it creates a value that will never equal any other value — even another `Symbol()` call with the same description.

```js
const a = Symbol('id');
const b = Symbol('id');
console.log(a === b); // false — always unique
```

---

## Uses

### Unique Object Keys

Since symbols are unique they can be used as property keys that won't accidentally clash with other keys, including ones added by libraries or JS itself.

```js
const id = Symbol('id');
const user = { [id]: 123, name: 'Alice' };
console.log(user[id]); // 123
```

### Hidden Properties

Symbol keys don't show up in `for...in` loops or `Object.keys()`, so they're semi-private — not truly private like `#` fields, but not enumerable by default.

```js
const id = Symbol('id');
const user = { [id]: 123, name: 'Alice' };

console.log(Object.keys(user));   // ['name'] — symbol key hidden
console.log(user[id]);            // 123 — still accessible if you have the symbol
```

### Well-Known Symbols

JS itself uses built-in symbols like `Symbol.iterator` and `Symbol.toPrimitive` to let you hook into language behavior on your own objects.

```js
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}

console.log([...new Range(1, 3)]); // [1, 2, 3]
```

---

## Summary

Symbols are not commonly needed in everyday application code but come up in library design, metaprogramming, and when you need guaranteed uniqueness without the overhead of generating a UUID.
