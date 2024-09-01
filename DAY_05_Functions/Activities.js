/* Activity -> 1 : Function Declaration */

// Task_1 - Write a function to check if a number is even or odd and log the result to the console.

function isEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an Even`);
  } else {
    console.log(`${num} is an Odd`);
  }
}

isEven(10);

// Task_2 - Write a function to calculate the square of a number and return the result.

function squareOf(num1) {
  sq = 2;
  square = num1 ** sq;
  console.log(square);
}
squareOf(5);

/* Activity -> 2 : Function Expression */

// Task_3 - Write a function expression to find the maximum of two numbers and log the result to the console.
function isMax(num2, num3) {
  if (num2 > num3) {
    console.log("the max number is ", num2);
  } else {
    console.log("the max number is ", num3);
  }
}

isMax(5, 10);

// Task_4 - Write a function expression to concatenete two strings and return the result.

function concat(str, str1) {
  return str + str1;
}

let result = concat("Good ", "Evening");
console.log(result);

/* Activity -> 3 : Arrow Functions */

// Task_5 - Write a arrow function to calculate the sum of two numbers and return the result.

let sum = (num4, num5) => {
  return num4 + num5;
};

console.log(sum(5, 10));

// Task_6 - Write a arrow function to check if a string contains a specific character and return a boolean value.

let containsChar = (str, char) => {
  return str.includes(char);
};

console.log(containsChar("Hello World", "l"));

/* Activity -> 4 : Function Parameters and Default Values */

// Task_7 - Write a function that takes two parameters and returns their product. Provide a Default value for the second parameter.

function multiply(num6, num7 = 10) {
  return num6 * num7;
}

console.log(multiply(5, 7));

// Task_8 - Write a function that takes a person's name and age and returns a greeting message. provide a default value for the age.

function Greet(name, age = 18) {
  return `Hello ${name} Who is ${age} years old`;
}

console.log(Greet("John Doe"));

/* Activity -> 5 : Higher-Order Functions */

// Task_9 - Write a higher-order function that takes a function and a number and calls the function that many times.

function repeatFunc(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

const sayHello = () => {
  console.log("Hello World");
};

repeatFunc(sayHello, 10);

// Task_10 - Write a higher-order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.

function applyFunc(fn1, fn2, value) {
  return fn2(fn1(value));
}

const mul = (x) => x * 2;

const add = (x) => x + 5;

let af = applyFunc(add, mul, 5);
console.log(af);
