// Activity 1 : Arthmetic Operations

// Task 1

let a = 15;
let b = 25;

console.log(`sum of a + b = ${a + b}`);

// Task 2

let x = 26;
let y = 25;

console.log(`substract of x - y = ${x - y}`);

// Task 3

let p = 15;
let q = 25;

console.log(`multiplication of p * q = ${p * q}`);

// Task 4

let m = 26;
let n = 2;

console.log(`Divide of m / n = ${m / n}`);

// Task 5

let num1 = 17;
let num2 = 8;

console.log(`Remider of num1 % num2 = ${num1 % num2}`);

// Activity 2 : Assignment Operators

// Task 6

let number = 10;

number += 12;
console.log(`value of number += ${number}`);

// Task 7

let number1 = 65;
number1 -= 12;
console.log(`value of number1 -= ${number1}`);

// Activity 3 : Comparison Operators

// Task 8

let num3 = 10;
let num4 = 25;

console.log(num3 > num4); // false
console.log(num3 < num4); // true

// Task 9

console.log(num3 >= num4); // false
console.log(num3 <= num4); // true

// Task 10

let nums1 = 11;
let nums2 = "11";
console.log(nums1 == nums2); // true = it compare only values
console.log(nums1 === nums2); // false = it compares value with datatypes

console.log(`-------------------------------------------------------------`);
// Activity 4 : Logical Operators

// Task 11

let nums3 = 67;
let nums4 = 23;

console.log(num3 > num4 && nums3 !== 67); // false : both conditions should be true

// Task 12

console.log(num3 < num4 || nums3 !== 67); // true : both of one condition should be true

// Task 13

console.log(!(num3 > num4)); // true : it changes the values from (true > false & false > true)

// Activity 5 : Ternary Operators

// Task 14

let checkNumber = -21;

console.log(
  checkNumber > 0
    ? `${checkNumber} is a positive number`
    : `${checkNumber} is a negative number`
);
