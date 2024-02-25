# JavaScript Master Tutorial
_By Ajay Duraisamy_

Start Date: 24 Feb 2024  
Goal: Learn JavaScript from 0 to 100% end-to-end with real examples.

---

—————————————————————

# DAY 1 – WHAT IS JAVASCRIPT

##  Explanation

JavaScript is a programming language used to make web pages interactive.

HTML → Structure  
CSS → Design  
JavaScript → Logic + Actions

JavaScript also runs on backend using **Node.js**.

Use cases:
- Website interactivity
- APIs
- Mobile apps
- Games
- Automation
- AI workflows

---

## Example

```javascript
console.log("Hello JavaScript");

// 1. Variables
let name = "Ajay";
let age = 30;
let isMarried = true;

// 2. Data Types
let str = "Hello";
let num = 123;
let bool = true;
let arr = [1, 2, 3, 4];
let obj = { name: "Ajay", age: 30 };

// 3. Operators
let a = 10;
let b = 20;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;

// 4. Conditionals
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

// 5. Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 6. Functions
function add(a, b) {
    return a + b;

}