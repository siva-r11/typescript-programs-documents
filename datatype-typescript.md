# TypeScript Data Types

TypeScript provides several data types that help define what kind of
value a variable can hold.

## 1. Primitive Data Types

  Type          Example       Description
  ------------- ------------- -------------------------
  `string`      `"Siva"`      Text
  `number`      `100`         Integer or decimal
  `boolean`     `true`        True/false
  `undefined`   `undefined`   Value not assigned
  `null`        `null`        Intentional empty value
  `bigint`      `100n`        Very large integers
  `symbol`      `Symbol()`    Unique identifier

### Example

``` typescript
let name: string = "Siva";
let age: number = 30;
let isActive: boolean = true;

let result: undefined = undefined;
let data: null = null;

let bigNumber: bigint = 12345678901234567890n;

let id: symbol = Symbol("id");
```

------------------------------------------------------------------------

## 2. Array

An array stores multiple values.

``` typescript
let numbers: number[] = [10, 20, 30, 40];

let names: string[] = ["Siva", "Kiran", "Ravi"];
```

Alternative syntax:

``` typescript
let numbers: Array<number> = [10, 20, 30];
```

------------------------------------------------------------------------

## 3. Tuple

A tuple defines a fixed number of elements with specific types.

``` typescript
let employee: [number, string] = [101, "Siva"];
```

Here:

-   First value must be a `number`
-   Second value must be a `string`

Another example:

``` typescript
let user: [string, number, boolean] = ["Siva", 30, true];
```

------------------------------------------------------------------------

## 4. Object

You can define the structure of an object.

``` typescript
let employee: {
    id: number;
    name: string;
    active: boolean;
} = {
    id: 101,
    name: "Siva",
    active: true
};
```

------------------------------------------------------------------------

## 5. Enum

An `enum` defines a set of named constants.

``` typescript
enum Status {
    Pending,
    Approved,
    Rejected
}

let currentStatus: Status = Status.Approved;

console.log(currentStatus); // 1
```

### String Enum

``` typescript
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let role: Role = Role.Admin;
```

------------------------------------------------------------------------

## 6. Any

`any` disables TypeScript's type checking for a variable.

``` typescript
let value: any = "Siva";

value = 100;
value = true;
value = ["A", "B"];
```

> **Note:** Avoid `any` when possible because it removes TypeScript's
> type safety.

------------------------------------------------------------------------

## 7. Unknown

`unknown` is safer than `any`. You must check the type before using the
value.

``` typescript
let value: unknown = "Siva";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

------------------------------------------------------------------------

## 8. Void

`void` is commonly used for functions that don't return a value.

``` typescript
function printMessage(): void {
    console.log("Hello Siva");
}
```

------------------------------------------------------------------------

## 9. Never

`never` represents a value that never occurs.

It is commonly used for functions that always throw an error or never
complete.

``` typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

------------------------------------------------------------------------

## 10. Union Type

A union type allows a variable to contain more than one possible type.

``` typescript
let userId: number | string;

userId = 101;
userId = "USER101";
```

Another example:

``` typescript
function printId(id: number | string): void {
    console.log(id);
}

printId(101);
printId("USER101");
```

------------------------------------------------------------------------

## 11. Literal Type

A literal type allows only specific values.

``` typescript
let direction: "left" | "right" | "center";

direction = "left";
direction = "right";
```

The following produces a TypeScript error:

``` typescript
direction = "up"; // Error
```

------------------------------------------------------------------------

# Complete Example

``` typescript
// Primitive Types
let name: string = "Siva";
let age: number = 30;
let active: boolean = true;

let result: undefined = undefined;
let data: null = null;

let bigNumber: bigint = 12345678901234567890n;
let symbolId: symbol = Symbol("id");

// Array
let scores: number[] = [90, 80, 95];

// Tuple
let employee: [number, string] = [101, "Siva"];

// Object
let user: {
    name: string;
    age: number;
} = {
    name: "Siva",
    age: 30
};

// Enum
enum Status {
    Pending,
    Approved,
    Rejected
}

let status: Status = Status.Approved;

// Any
let value: any = "Hello";
value = 100;

// Unknown
let response: unknown = "Success";

if (typeof response === "string") {
    console.log(response.toUpperCase());
}

// Union
let id: number | string = 101;
id = "USER101";

// Void
function test(): void {
    console.log("Testing");
}

// Never
function error(): never {
    throw new Error("Failed");
}
```

------------------------------------------------------------------------

# Quick Reference

  Data Type     Example               Main Use
  ------------- --------------------- -------------------------
  `string`      `"Siva"`              Text
  `number`      `100`                 Numbers
  `boolean`     `true`                True/false
  `undefined`   `undefined`           Unassigned value
  `null`        `null`                Empty value
  `bigint`      `100n`                Large integers
  `symbol`      `Symbol()`            Unique identifiers
  `array`       `number[]`            Multiple values
  `tuple`       `[number, string]`    Fixed structure
  `object`      `{ name: string }`    Structured data
  `enum`        `Status.Approved`     Named constants
  `any`         `any`                 Disables type checking
  `unknown`     `unknown`             Safe unknown value
  `void`        `void`                No return value
  `never`       `never`               Never returns
  `union`       `number \| string`    Multiple allowed types
  `literal`     `"left" \| "right"`   Specific allowed values

## Interview Tip

The key difference to remember:

-   **`any`** → Type checking is disabled.
-   **`unknown`** → Type must be checked before use.
-   **`void`** → Function does not return a value.
-   **`never`** → Function never successfully returns.
-   **Union** → Variable can have one of multiple types.
-   **Tuple** → Fixed number of elements with fixed types.
