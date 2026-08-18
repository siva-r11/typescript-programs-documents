# Looping Statements in TypeScript

Looping statements are used to **execute a block of code repeatedly** until a specified condition is met.

TypeScript provides several types of loops:

## 1. `for` Loop

The `for` loop is used when you know how many times you want to execute a block of code.

### Syntax

```typescript
for (initialization; condition; increment/decrement) {
    // code
}
```

### Example

```typescript
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}
```

**Output:**

```text
1
2
3
4
5
```

---

## 2. `while` Loop

The `while` loop executes a block of code as long as the condition is `true`.

### Syntax

```typescript
while (condition) {
    // code
}
```

### Example

```typescript
let i: number = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

**Output:**

```text
1
2
3
4
5
```

---

## 3. `do...while` Loop

The `do...while` loop executes the block **at least once**, even if the condition is initially `false`.

### Syntax

```typescript
do {
    // code
} while (condition);
```

### Example

```typescript
let i: number = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

**Output:**

```text
1
2
3
4
5
```

### Example where the condition is initially false

```typescript
let i: number = 10;

do {
    console.log(i);
} while (i < 5);
```

**Output:**

```text
10
```

---

## 4. `for...of` Loop

The `for...of` loop is used to iterate over the **values of an iterable**, such as an array or string.

### Example with Array

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**

```text
Apple
Banana
Mango
```

### Example with String

```typescript
let name: string = "Siva";

for (let character of name) {
    console.log(character);
}
```

**Output:**

```text
S
i
v
a
```

---

## 5. `for...in` Loop

The `for...in` loop is generally used to iterate over the **keys or indexes** of an object or array.

### Example with Object

```typescript
let student = {
    name: "Siva",
    age: 30,
    course: "TypeScript"
};

for (let key in student) {
    console.log(key, student[key as keyof typeof student]);
}
```

**Output:**

```text
name Siva
age 30
course TypeScript
```

### Example with Array

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index, fruits[index]);
}
```

**Output:**

```text
0 Apple
1 Banana
2 Mango
```

> **Note:** For arrays, `for...of` is generally preferred when you need the values. Use `for...in` primarily for object properties.

---

## 6. Nested Loop

A loop inside another loop is called a **nested loop**.

### Example

```typescript
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

**Output:**

```text
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
```

---

# Loop Control Statements

## 7. `break` Statement

The `break` statement stops the loop immediately.

```typescript
for (let i: number = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

**Output:**

```text
1
2
```

---

## 8. `continue` Statement

The `continue` statement skips the current iteration and moves to the next iteration.

```typescript
for (let i: number = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

**Output:**

```text
1
2
4
5
```

---

# Summary

| Loop | Purpose |
|---|---|
| `for` | Repeats code a specified number of times |
| `while` | Repeats while a condition is `true` |
| `do...while` | Executes at least once, then checks the condition |
| `for...of` | Iterates over values |
| `for...in` | Iterates over keys/indexes |
| Nested loop | Loop inside another loop |
| `break` | Stops the loop |
| `continue` | Skips the current iteration |

## Quick Example

```typescript
let numbers: number[] = [10, 20, 30, 40, 50];

for (let number of numbers) {
    if (number === 30) {
        continue;
    }

    console.log(number);
}
```

**Output:**

```text
10
20
40
50
```
