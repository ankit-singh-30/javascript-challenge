// Activity 1 : For Loop

//Task 1
let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(`Number is ${i}`);
}

// Task 2

const table = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}

// Activity 2 : While Loop

// Task 3
let n = 1;

let sum = 0;
while (n <= 10) {
  sum += n;
  n++;
}

console.log(`Sum of numbers = ${sum}`);
// Expected output:55

// Task 4

let i = 10;
while (i >= 1) {
  console.log(`${i}`);
  i--;
}

// Activity 3 : Do...While Loop

// Task5

let k = 1;
do {
  console.log(`Print number = ${k}`);
  k++;
} while (k <= 5);

// Task 6

let j = 5;
let factorialNum = 1;
do {
  factorialNum = factorialNum * j;
  // 5*5 = 25

  j--;
} while (j >= 1);

console.log(`Factorial of number = ${factorialNum}`);

// Activity 4 : Nested Loops

// Task 7
let nums = 5;
let pattern = "";
for (let p = 0; p < nums; p++) {
  for (let q = 1; q < p; q++) {
    pattern += "*";
    console.log(`${pattern}`);
  }
}

// Activity 5 : Loop Control Statements

// Task 8
let x = 10;
for (let index = 1; index <= x; index++) {
  if (index === 5) {
    //console.log(`skip number = ${index}`);
    continue;
  }
  //console.log(`${index}`);
}

// Task 8

for (let index = 1; index <= x; index++) {
  if (index === 7) {
    console.log(`skip number = ${index}`);
    break;
  }
  console.log(`${index}`);
}
