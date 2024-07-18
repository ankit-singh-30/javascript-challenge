// Activity 1 : If-else statement

//Task 1

let num = 20;
if (num > 0) {
  console.log(`Number is positive`);
} else if (num < 0) {
  console.log(`Number is negative`);
} else {
  console.log(`Number is zero`);
}

// Task 2

let age = 23;

if (age >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("You are not eligible for vote");
}

// Activity 2 : Nested If-else statement

// Task 3

let x = 15;
let y = 20; // largest number
let z = 12;

if (x > y) {
  if (x > z) {
    console.log(`${x} is largest`);
  } else {
    console.log(`${z} is largest`);
  }
} else {
  if (y > z) {
    console.log(`${y} is largest`);
  } else {
    console.log(`${z} is largest`);
  }
}

// Activity 3 : Switch Case

// Task 4

let day = 4;

switch (day) {
  case 1:
    console.log("Day is Monday");
    break;
  case 2:
    console.log("Day is Tuesday");
    break;
  case 3:
    console.log("Day is Wednesday");
    break;
  case 4:
    console.log("Day is Thursday");
    break;
  case 5:
    console.log("Day is Friday");
    break;
  case 6:
    console.log("Day is Saturday");
    break;
  case 7:
    console.log("Day is Sunday");
    break;

  default:
    console.log("Invalid day");
    break;
}

// Task 5
let score = 85;

switch (true) {
  case score >= 85:
    console.log("Grade is = A");
    break;
  case score >= 70:
    console.log("Grade is = B");
    break;
  case score >= 50:
    console.log("Grade is = C");
    break;
  case score >= 33:
    console.log("Grade is = D");
    break;

  default:
    console.log("Grade is = F");
    break;
}

// Activity 4 : Conditional(Ternary) Operator

// Task 6
let number = 21; // odd number

number % 2 === 0
  ? console.log(`${number} is even`)
  : console.log(`${number} is odd`);

// Activity 5 : Combining Consitions

// Task 7

let year = 2024; //  leap year

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not leap year`);
}
