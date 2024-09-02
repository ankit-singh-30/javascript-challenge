/** Activity 1: Variable Declaration */

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var number = 21;
console.log(number);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let str = "Namste Javascript";
console.log(str);

/** Activity 2: Constant Declaration */

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isLoggedIn = true;
console.log(isLoggedIn);

/** Activity 3: Data Types */

// Task 4: Create variables of different data types and log each variable's type using the typeof operator.

const maxNum = 256;
const greeting = "Namaste Bharat";
const isLoggedOut = false;
const bookObj = {
  id: 121,
  name: "Chacha Choudhary",
  author: "Pran Kumar Sharma",
};

const heroes = ["Hanuman", "Shaktiman"]; // array is also a object

console.log(typeof maxNum);
console.log(typeof greeting);
console.log(typeof isLoggedOut);
console.log(typeof bookObj);
console.log(typeof heroes);

/** Activity 4: Reassigning variables */

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let quote =
  "Success is not final, failure is not fatal: It is the courage to continue that counts.";
console.log(quote);

quote = "Your time is limited, so don’t waste it living someone else’s life.";

console.log(quote);

/** Activity 5: Understanding `cont` */

// Task 6: Try reassigning a variable declared with const and observe the error.

const constantVar = "Hello";
//constantVar = "Heelo World !";

console.log(constantVar);

// Uncommenting the above line will cause an error because constantVar is a constant and cannot be reassigned.
// TypeError: Assignment to constant variable.

/** Feature Request */

// Feature Request 1

console.log("Value : ", maxNum, "Type : ", typeof maxNum);
console.log("Value : ", greeting, "Type : ", typeof greeting);
console.log("Value : ", isLoggedOut, "Type : ", typeof isLoggedOut);
console.log("Value : ", bookObj, "Type : ", typeof bookObj);
console.log("Value : ", heroes, "Type : ", typeof heroes);

// Feature Request 2

let letVar = "Diiference";
letVar = "Both Diffrent";
console.log(letVar);

const constVariable = "Jungle";
// constVariable = "Simba";
console.log(constVariable);

// you can reassign value if you decalare a variable using 'let' keyword
// you can't reassign vaue if you declare a variable using 'const' keyword beacuse const is read only reference to a value.
// if you try to reassign value using 'const' keyword it will give you TypeError: Assignment to constant variable.
