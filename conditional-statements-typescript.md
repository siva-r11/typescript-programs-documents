# Conditional Statements in TypeScript

Conditional statements are used to **execute different blocks of code depending on whether a condition is true or false**.

## 1. `if` Statement

Executes code only when the condition is `true`.

```typescript
let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}
```

**Output:**

```text
You are eligible to vote
```

---

## 2. `if...else` Statement

Executes one block when the condition is `true` and another when it is `false`.

```typescript
let age: number = 16;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```

**Output:**

```text
Not eligible to vote
```

---

## 3. `if...else if...else` Statement

Used when there are **multiple conditions** to check.

```typescript
let marks: number = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

**Output:**

```text
Grade A
```

---

## 4. Nested `if` Statement

An `if` statement inside another `if` statement.

```typescript
let age: number = 25;
let hasLicense: boolean = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a driving license");
    }
} else {
    console.log("You are underage");
}
```

**Output:**

```text
You can drive
```

---

## 5. `switch` Statement

Used when you want to compare a value against multiple possible cases.

```typescript
let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}
```

**Output:**

```text
Wednesday
```

The `break` prevents execution from continuing into the next case.

---

## 6. Ternary Operator

The ternary operator is a **short form of `if...else`**.

### Syntax

```typescript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```typescript
let age: number = 20;

let result: string = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

**Output:**

```text
Adult
```

---

## Summary

| Statement | Purpose |
|---|---|
| `if` | Checks one condition |
| `if...else` | Chooses between two conditions |
| `if...else if...else` | Checks multiple conditions |
| Nested `if` | `if` inside another `if` |
| `switch` | Compares one value with multiple cases |
| Ternary `? :` | Short form of `if...else` |

For TypeScript, the most commonly used conditional structures are **`if...else` and `switch`**, while the **ternary operator** is useful for simple conditions.
