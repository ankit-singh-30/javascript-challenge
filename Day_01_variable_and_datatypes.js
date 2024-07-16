// Activity 1 : Variable Declaration

// Task 1
var number = 1236547;
console.log(number);

// Task 2
let fullName = "Ankit Singh";
console.log(fullName);

// Activity 2 : Constant Declaration

// Task 3

const isLoggedIn = false;
console.log(isLoggedIn);

// Activity 3 : Data Types

// Task 4

let age = 21; // number
console.log(typeof age);

let userName = "ankitsingh"; // string
console.log(typeof userName);

let isLoggedOut = true; // boolean
console.log(typeof isLoggedIn);

let books = {
  name: "",
  author: "Dr APJ Kalam",
}; //object

console.log(typeof books);

let superHeros = ["Shaktimaan", "Hanuman", "Superman", "Batman"]; // array
console.log(typeof superHeros); // object ,because array is also an object

// Activity 4 : Reassinging Variable

// Task 5

let amount = 11254;
console.log(amount);
amount = 100;
console.log(amount);

// Activity 5 : Understanding const

// Task 6

console.log();
const pi = 3.14; //TypeError: Assignment to constant variable. Because we cant'redeclare const variable
console.log(pi);
pi = 3.14159;
console.log(pi);
