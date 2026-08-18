# Operators in TypeScript

Operators are symbols used to perform operations on values and variables.

## 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Description | Example |
|---|---|---|
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Modulus | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

```typescript
let a: number = 10;
let b: number = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

a++;
console.log(a);      // 11

b--;
console.log(b);      // 2
```

---

## 2. Assignment Operators

Used to assign or update values.

| Operator | Example | Equivalent |
|---|---|---|
| `=` | `x = 10` | Assign |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `%=` | `x %= 5` | `x = x % 5` |
| `**=` | `x **= 2` | `x = x ** 2` |

```typescript
let x: number = 10;

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2
```

---

## 3. Comparison Operators

Used to compare two values. They return `true` or `false`.

| Operator | Description |
|---|---|
| `==` | Equal |
| `===` | Strictly equal |
| `!=` | Not equal |
| `!==` | Strictly not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

```typescript
let a: number = 10;
let b: number = 20;

console.log(a == b);   // false
console.log(a === b);  // false
console.log(a != b);   // true
console.log(a !== b);  // true
console.log(a > b);    // false
console.log(a < b);    // true
console.log(a >= b);   // false
console.log(a <= b);   // true
```

### `==` vs `===`

```typescript
let x: any = 10;

console.log(x == "10");   // true
console.log(x === "10");  // false
```

`==` performs type conversion, while `===` checks both **value and type**.

> In TypeScript/JavaScript, prefer `===` and `!==` in most cases.

---

## 4. Logical Operators

Used to combine conditions.

| Operator | Description |
|---|---|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

```typescript
let age: number = 25;
let hasLicense: boolean = true;

console.log(age >= 18 && hasLicense);
// true

console.log(age >= 18 || hasLicense);
// true

console.log(!hasLicense);
// false
```

### AND `&&`

Both conditions must be `true`.

```typescript
let username: string = "Siva";
let password: string = "12345";

if (username === "Siva" && password === "12345") {
    console.log("Login successful");
}
```

### OR `||`

At least one condition must be `true`.

```typescript
let role: string = "admin";

if (role === "admin" || role === "manager") {
    console.log("Access granted");
}
```

### NOT `!`

Reverses a boolean value.

```typescript
let isLoggedIn: boolean = true;

console.log(!isLoggedIn);
// false
```

---

## 5. Bitwise Operators

Operate on binary representations of numbers.

| Operator | Description |
|---|---|
| `&` | Bitwise AND |
| `\|` | Bitwise OR |
| `^` | Bitwise XOR |
| `~` | Bitwise NOT |
| `<<` | Left shift |
| `>>` | Right shift |
| `>>>` | Unsigned right shift |

```typescript
let a: number = 5; // 0101
let b: number = 3; // 0011

console.log(a & b); // 1
console.log(a | b); // 7
console.log(a ^ b); // 6
```

---

## 6. Ternary Operator

A shorthand for `if...else`.

### Syntax

```typescript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```typescript
let age: number = 20;

let result: string = age >= 18 ? "Adult" : "Minor";

console.log(result);
// Adult
```

Instead of:

```typescript
let result: string;

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
```

---

## 7. Nullish Coalescing Operator `??`

Returns the right-hand value when the left-hand value is `null` or `undefined`.

```typescript
let username: string | undefined;

let name = username ?? "Guest";

console.log(name);
// Guest
```

### `??` vs `||`

```typescript
let value = 0;

console.log(value ?? 100); // 0
console.log(value || 100); // 100
```

`??` only checks for `null` or `undefined`, while `||` treats other falsy values such as `0`, `""`, and `false` as false.

---

## 8. Optional Chaining Operator `?.`

Used to safely access properties or methods when an object may be `null` or `undefined`.

```typescript
interface User {
    name: string;
    address?: {
        city: string;
    };
}

let user: User = {
    name: "Siva"
};

console.log(user.address?.city);
// undefined
```

Without optional chaining:

```typescript
console.log(user.address.city);
```

This can cause an error because `address` is undefined.

---

## 9. Type Operators

TypeScript provides operators such as `typeof` and `instanceof`.

### `typeof`

Returns the type of a value at runtime.

```typescript
let name: string = "Siva";
let age: number = 30;

console.log(typeof name);
// string

console.log(typeof age);
// number
```

### `instanceof`

Checks whether an object belongs to a particular class.

```typescript
class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let employee = new Employee("Siva");

console.log(employee instanceof Employee);
// true
```

---

## 10. String Concatenation Operator

The `+` operator can also join strings.

```typescript
let firstName: string = "Siva";
let lastName: string = "R";

let fullName: string = firstName + " " + lastName;

console.log(fullName);
// Siva R
```

You can also use template literals:

```typescript
let name: string = "Siva";
let age: number = 30;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

# Quick Summary

| Category | Operators |
|---|---|
| Arithmetic | `+ - * / % ** ++ --` |
| Assignment | `= += -= *= /= %= **=` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& \|\| !` |
| Bitwise | `& \| ^ ~ << >> >>>` |
| Ternary | `? :` |
| Nullish | `??` |
| Optional Chaining | `?.` |
| Type | `typeof`, `instanceof` |
| String | `+` |

## Important Operators for Interviews

For TypeScript interviews, the most important operators to understand deeply are:

- `===`
- `!==`
- `&&`
- `||`
- `!`
- `??`
- `?.`
- Ternary `?:`
- `typeof`
- `instanceof`
