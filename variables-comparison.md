# JavaScript Variable Declarations Comparison

| Feature           | var                          | let                    | const                  |
|-------------------|------------------------------|------------------------|------------------------|
| Scope             | Function Scope               | Block Scope            | Block Scope            |
| Reassignment      | Allowed                      | Allowed                | Forbidden              |
| Redeclaration     | Allowed                      | Forbidden              | Forbidden              |
| Hoisting Behavior | Initialized as `undefined`   | Uninitialized (Error)  | Uninitialized (Error)  |

## Examples

### var

```javascript
var name = "John";

var name = "Jane"; // Redeclaration allowed
name = "Bob";      // Reassignment allowed

console.log(name); // Bob
```

### let

```javascript
let age = 25;

// let age = 30; // Error: Redeclaration not allowed
age = 30;         // Reassignment allowed

console.log(age); // 30
```

### const

```javascript
const PI = 3.14159;

// PI = 3.14; // Error: Reassignment not allowed

console.log(PI); // 3.14159
```

## Scope Example

```javascript
function demo() {
    var a = 1;

    if (true) {
        let b = 2;
        const c = 3;

        console.log(a); // 1
        console.log(b); // 2
        console.log(c); // 3
    }

    console.log(a); // 1
    // console.log(b); // Error
    // console.log(c); // Error
}
```

## Hoisting Example

```javascript
console.log(myVar); // undefined
var myVar = "Hello";

// console.log(myLet); // Error
let myLet = "Hello";

// console.log(myConst); // Error
const myConst = "Hello";
```
