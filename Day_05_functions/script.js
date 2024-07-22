// Activity 1 : Function Declaration

//Task 1

function checkNumberEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a even number`);
  } else {
    console.log(`${num} is a odd number`);
  }
}

//checkNumberEvenOdd(11);

// Task 2

function calculateSquare(num) {
  return num * num;
}

let result = calculateSquare(5);
//console.log(result);

// Activity 2 : Function Expression

// Task 3
const checkMaxNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is maximum number`);
  } else {
    console.log(`${num2} is maximum number`);
  }
};

//checkMaxNum(25, 12);

// Task 4

const concatenateString = function (str1, str2) {
  return `${str1} ${str2}`;
};

//console.log(concatenateString("ankit", "singh"));

// Activity 3: Arrow Function

// Task 5

const sumTwoNumber = (num1, num2) => {
  return num1 + num2;
};

//console.log(sumTwoNumber(10, 15));

// Task 6

const checkString = (str, char) => {
  return str.includes(char);
};

//console.log(checkString("Bharat", "k"));

// Activity 4 : Function Parameter and Default Values

// Task 7

function manageProduct(param1, param2 = 8000) {
  return `The price of ${param1} is ${param2} rupees`;
}

// console.log(manageProduct("Iphone"));

// Task 8

function greetMsg(name, age = 21) {
  return `Hey ! ${name} your is ${age} now`;
}

// console.log(greetMsg("Ankit"));

// Activity 5 : Higher-Order Functions

// Task 9

function highOrderFunc(func, num) {
  for (let k = 0; k < num; k++) {
    func(k);
  }
}

const callBackFun = (num) => {
  console.log(`Function called ${num}`);
};

// highOrderFunc(callBackFun, 5);

// Task 10

function myFunc(func1, func2, value) {
  func1(value);
}

const inputFunction = (value) => {
  outputFunction(value);
};

const outputFunction = (value) => {
  console.log(`${value * 2}`);
};

myFunc(inputFunction, outputFunction, 15);
