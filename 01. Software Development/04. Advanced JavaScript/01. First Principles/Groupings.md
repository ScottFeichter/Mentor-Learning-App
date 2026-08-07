# Groupings

&nbsp;

The syntactic parts of JS fall into distinct groups.

Each group answers a different question.

---

## Syntactic Parts Of Code

What you actually write.

- <span style="color: var(--heading-h3-color); font-weight: bold;">Keywords</span>
  - what you write to control the engine
- <span style="color: var(--heading-h3-color); font-weight: bold;">Identifiers</span>
  - what you write to name things
- <span style="color: var(--heading-h3-color); font-weight: bold;">Operators</span>
  - what you write to perform operations
- <span style="color: var(--heading-h3-color); font-weight: bold;">Operands</span>
  - what you write that operators act on
- <span style="color: var(--heading-h3-color); font-weight: bold;">Literals</span>
  - what you write to represent values directly
- <span style="color: var(--heading-h3-color); font-weight: bold;">Statements</span>
  - complete instructions
- <span style="color: var(--heading-h3-color); font-weight: bold;">Expressions</span>
  - pieces of statements that produce a value
  - the thing on the right-hand side of an assignment operator
    - `let x = "101.1"` — `"101.1"` is a literal expression on the RHS
    - `let x = getStation()` — `getStation()` is a function call expression on the RHS
    - `let x = a + b` — `a + b` is an arithmetic expression on the RHS
    - `let x = radio.station` — `radio.station` is a member expression on the RHS

---

## Values And Types

What values are and how they behave in memory.

- <span style="color: var(--heading-h3-color); font-weight: bold;">Primitives</span>
  - single immutable values stored directly in the binding
- <span style="color: var(--heading-h3-color); font-weight: bold;">References</span>
  - values stored on the heap, accessed through a memory address

---

## Execution Context

How the engine tracks and manages running code.

- <span style="color: var(--heading-h3-color); font-weight: bold;">Binding</span>
  - the connection between an identifier and its value
- <span style="color: var(--heading-h3-color); font-weight: bold;">Scope</span>
  - where an identifier is accessible
- <span style="color: var(--heading-h3-color); font-weight: bold;">`this`</span>
  - the object the current function is operating on

---

## Why Expression Not Value On The RHS

In the syntactic sense, what sits on the right-hand side of `=` is an **expression** — not a value.

The expression is what you write.
The value is what the engine produces from it.

```js
let x = "101.1"   // "101.1" is the expression — a string primitive is the value produced
let x = {}        // {} is the expression — an object reference is the value produced
```

Value belongs in the values and types group — not the syntax group.

---

## But In Everyday Speech — It's Called The Value

In everyday dev speech, everything on the right of `=` gets called "the value" — and that's fine for communication.

```js
let x = 5              // everyone calls 5 "the value"
let x = "hello"        // everyone calls "hello" "the value"
let x = {}             // everyone calls {} "the value"
let x = getStation()   // everyone calls the return "the value"
let x = a + b          // everyone calls the result "the value"
```

Precisely though, the same thing is three different things depending on which lens you use:

```
Syntax lens   → it is an expression
Type lens     → it is a primitive or a reference
Runtime lens  → it is a value
```

"Value" stuck in everyday speech because it is the most intuitive word for *the thing on the right*.

This is semantic drift — one word covering three distinct technical concepts.

---

## Why Literals Not Primitives In The Syntax Group

A literal is what you **write**.
A primitive is what you **get**.

The syntax group is about what appears in code — not what the engine produces from it.

Primitives belong in the values and types group alongside references — both answer the question *what kind of value is this and how is it stored*.

---

## Why References Are Not In The Syntax Group

References are a runtime and memory concept — not a syntax concept.

You never write a reference directly.
You write a literal or an expression, and the engine produces a reference from it.

```js
{ station: "101.1" }   // you write an object literal
                        // the engine stores it on the heap and gives you a reference
```
