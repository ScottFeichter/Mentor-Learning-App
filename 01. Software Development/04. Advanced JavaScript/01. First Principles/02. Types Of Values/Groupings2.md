# Groupings 2

&nbsp;

Clarifying the relationship between literals, primitives, values, and what is stored in memory.

---

## A Value Is Not Always A Literal

A value is what an identifier is bound to at runtime.

It can come from many places — not just a literal:

```js
const x = 5              // value comes from a literal
const y = getStation()   // value comes from a function call
const z = a + b          // value comes from an expression
const w = new Date()     // value comes from a constructor call
```

The precise relationship:

- a **literal** is always a value — it directly represents one
- a **value** is not always a literal — it can be produced by any expression

---

## Literal Belongs Inside Values, Not Alongside It

A literal is technically a syntax concept but it is not a useful standalone topic.

What a student needs to understand is:

- what a **value** is
- where values come from
- how they are stored and used

A literal is just one answer to "where does a value come from".

That answer fits naturally inside a **Values** file as a sub-topic — not as its own peer concept in the syntax list.

```
Values  ← covers what a value is, where it comes from
  └── one source is a literal — mentioned here, not as a top-level item
```

---

## Are All Primitives Literals?

No — and the issue is broader than just `symbol`.

A **primitive** is a type of value.
A **literal** is a syntax form.

They do not map cleanly onto each other.

| Type | Can be written as a literal |
|---|---|
| `string` | yes — `"hello"` |
| `number` | yes — `42` |
| `boolean` | yes — `true`, `false` |
| `null` | yes — `null` |
| `bigint` | yes — `42n` |
| `undefined` | no — global property, not a literal |
| `symbol` | no — no literal syntax, must call `Symbol()` |

---

## Are All Strings, Numbers, And Booleans Literals?

No — they can be produced without a literal in sight.

```js
String(42)              // type conversion — produces a primitive string
Number("42")            // type conversion — produces a primitive number
Boolean(0)              // type conversion — produces a primitive boolean
"hello".toUpperCase()   // method call — produces a primitive string
Math.random()           // function call — produces a primitive number
x > 5                   // expression — produces a primitive boolean
```

All of these produce primitive values — none of them are literals.

A literal is only when the value is written directly in code:

```js
"hello"   // string literal
42        // number literal
true      // boolean literal
```

---

## Primitive Wrapper Objects

`String()`, `Number()`, `Boolean()` called **without** `new` are type conversion functions.
They produce **primitive values**.

Called **with** `new` they produce wrapper objects — not primitives:

```js
new String("hello")  // wrapper object
new Number(42)       // wrapper object
new Boolean(true)    // wrapper object
```

---

## What Is Stored In Memory

A literal is a **source code concept only**.

It ceases to exist the moment the engine evaluates it.

What lives in memory is always either a **primitive** or a **reference** — never a literal.

```js
let x = 42        // you write a literal
                  // engine stores the number 42 in the binding

let y = 21 + 21   // you write an expression — no literal for 42
                  // engine stores the number 42 in the binding
```

Both end up with identical things in memory.
The engine does not remember or care that one came from a literal.

---

## The Precise Distinction

- a **literal** is what you **write** in source code
- an **evaluated value** is what the engine **produces** at runtime

```
Source code   →   literal (syntax)
Runtime       →   primitive or reference (memory)
```

- **Primitives** are stored directly in the binding on the call stack
- **References** store the address in the binding, the object on the heap


---

## Are All Primitives Literals?

No — and the issue is broader than just `symbol`.

A **primitive** is a type of value.
A **literal** is a syntax form.

They do not map cleanly onto each other.

| Type | Can be written as a literal |
|---|---|
| `string` | yes — `"hello"` |
| `number` | yes — `42` |
| `boolean` | yes — `true`, `false` |
| `null` | yes — `null` |
| `bigint` | yes — `42n` |
| `undefined` | no — global property, not a literal |
| `symbol` | no — no literal syntax, must call `Symbol()` |

---

## Are All Strings, Numbers, And Booleans Literals?

No — they can be produced without a literal in sight.

```js
String(42)              // type conversion — produces a primitive string
Number("42")            // type conversion — produces a primitive number
Boolean(0)              // type conversion — produces a primitive boolean
"hello".toUpperCase()   // method call — produces a primitive string
Math.random()           // function call — produces a primitive number
x > 5                   // expression — produces a primitive boolean
```

All of these produce primitive values — none of them are literals.

A literal is only when the value is written directly in code:

```js
"hello"   // string literal
42        // number literal
true      // boolean literal
```

---

## Primitive Wrapper Objects

`String()`, `Number()`, `Boolean()` called **without** `new` are type conversion functions.
They produce **primitive values**.

Called **with** `new` they produce wrapper objects — not primitives:

```js
new String("hello")  // wrapper object
new Number(42)       // wrapper object
new Boolean(true)    // wrapper object
```

---

## What Is Stored In Memory

A literal is a **source code concept only**.

It ceases to exist the moment the engine evaluates it.

What lives in memory is always either a **primitive** or a **reference** — never a literal.

```js
let x = 42        // you write a literal
                  // engine stores the number 42 in the binding

let y = 21 + 21   // you write an expression — no literal for 42
                  // engine stores the number 42 in the binding
```

Both end up with identical things in memory.
The engine does not remember or care that one came from a literal.

---

## The Precise Distinction

- a **literal** is what you **write** in source code
- an **evaluated value** is what the engine **produces** at runtime

```
Source code   →   literal (syntax)
Runtime       →   primitive or reference (memory)
```

- **Primitives** are stored directly in the binding on the call stack
- **References** store the address in the binding, the object on the heap
