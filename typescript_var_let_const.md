# TypeScript `var`, `let`, and `const`

A practical comparison of `var`, `let`, and `const` with examples.

## Quick Comparison

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function scope | Block scope | Block scope |
| Reassignment | Allowed | Allowed | Forbidden |
| Redeclaration in same scope | Allowed | Forbidden | Forbidden |
| Hoisting | Yes — initialized as `undefined` | Yes — but uninitialized (Temporal Dead Zone) | Yes — but uninitialized (Temporal Dead Zone) |

---

## 1. `var` — Function Scope

`var` is function-scoped, not block-scoped.

```typescript
function exampleVar(): void {
  if (true) {
    var message = "Hello";
  }

  // Accessible outside the if block
  console.log(message);
}

exampleVar();
```

### Reassignment

```typescript
var age: number = 25;

age = 30; // Allowed

console.log(age); // 30
```

### Redeclaration

```typescript
var name: string = "Siva";

var name: string = "Kumar"; // Allowed

console.log(name); // Kumar
```

### Hoisting

```typescript
console.log(value); // undefined

var value: number = 100;
```

Conceptually, JavaScript behaves approximately like:

```typescript
var value;

console.log(value); // undefined

value = 100;
```

---

## 2. `let` — Block Scope

`let` is block-scoped. A variable declared inside `{ }` cannot be accessed outside that block.

```typescript
function exampleLet(): void {
  if (true) {
    let message = "Hello";

    console.log(message); // Hello
  }

  // Error: Cannot find name 'message'
  // console.log(message);
}

exampleLet();
```

### Reassignment

```typescript
let age: number = 25;

age = 30; // Allowed

console.log(age); // 30
```

### Redeclaration

Redeclaring a `let` variable in the same scope is not allowed.

```typescript
let name: string = "Siva";

// Error: Cannot redeclare block-scoped variable 'name'
// let name: string = "Kumar";
```

However, a new `let` variable can be declared in a different block:

```typescript
let name: string = "Siva";

if (true) {
  let name: string = "Kumar";

  console.log(name); // Kumar
}

console.log(name); // Siva
```

### Hoisting and Temporal Dead Zone

`let` declarations are hoisted, but they are not initialized before the declaration is reached.

```typescript
// Error at runtime: Cannot access 'value' before initialization

// console.log(value);

let value: number = 100;
```

The period between entering the scope and reaching the `let` declaration is called the **Temporal Dead Zone (TDZ)**.

---

## 3. `const` — Block Scope

`const` is also block-scoped.

```typescript
function exampleConst(): void {
  if (true) {
    const message = "Hello";

    console.log(message); // Hello
  }

  // Error: Cannot find name 'message'
  // console.log(message);
}

exampleConst();
```

### Reassignment

A `const` variable cannot be reassigned.

```typescript
const age: number = 25;

// Error: Cannot assign to 'age' because it is a constant
// age = 30;
```

### Redeclaration

Redeclaring a `const` variable in the same scope is not allowed.

```typescript
const name: string = "Siva";

// Error: Cannot redeclare block-scoped variable 'name'
// const name: string = "Kumar";
```

### Hoisting and Temporal Dead Zone

Like `let`, `const` is hoisted but remains uninitialized until its declaration is executed.

```typescript
// Error at runtime: Cannot access 'value' before initialization

// console.log(value);

const value: number = 100;
```

---

## 4. Important: `const` Does Not Make Objects Immutable

`const` prevents reassignment of the variable itself. It does not make the object's properties immutable.

```typescript
const user = {
  name: "Siva",
  age: 25
};

// Allowed
user.age = 30;

console.log(user.age); // 30
```

But assigning a completely new object is not allowed:

```typescript
const user = {
  name: "Siva",
  age: 25
};

// Error: Cannot assign to 'user' because it is a constant
// user = {
//   name: "Kumar",
//   age: 30
// };
```

---

## 5. Block Scope Example

```typescript
{
  let letValue = "let";
  const constValue = "const";
  var varValue = "var";

  console.log(letValue);    // let
  console.log(constValue);  // const
  console.log(varValue);    // var
}

// console.log(letValue);   // Error
// console.log(constValue); // Error

console.log(varValue);      // var
```

The important difference is that `let` and `const` respect block scope, while `var` does not.

---

## 6. `var` vs `let` vs `const`

```typescript
function test(): void {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10

  // Error
  // console.log(b);

  // Error
  // console.log(c);
}

test();
```

---

## 7. Practical TypeScript Example

In modern TypeScript/JavaScript development, prefer `const` by default.

Use `let` when the variable needs to be reassigned.

Avoid `var` in most modern TypeScript code unless you specifically need its function-scoping behavior.

```typescript
const employeeName: string = "Siva";
let loginAttempts: number = 0;

loginAttempts++;
loginAttempts++;

console.log(employeeName);  // Siva
console.log(loginAttempts); // 2
```

### Rule of Thumb

```text
Need reassignment?
    |
    +-- Yes --> use let
    |
    +-- No --> use const

Use var?
    |
    +-- Usually avoid it in modern TypeScript
```

## Summary

| Keyword | Scope | Reassign | Redeclare | Hoisting |
|---|---|---|---|---|
| `var` | Function | Yes | Yes | `undefined` |
| `let` | Block | Yes | No | TDZ |
| `const` | Block | No | No | TDZ |

### Easy Way to Remember

- **`var`** → Function scope + reassignment + redeclaration
- **`let`** → Block scope + reassignment
- **`const`** → Block scope + no reassignment
