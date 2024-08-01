/* Activity -> 1 : Arithmetic Operations */

// Task_1 - Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 10;

let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Task_2 - Write a program to substract two numbers and log the result to the console.

let num3 = 20;
let num4 = 40;

let sub = num3 - num4;
console.log(`The Sub of ${num3} and ${num4} is ${sub}`);

// Task_3 - Write a program to multiply two numbers and log the result to the console.

let num5 = 5;
let num6 = 10;

let mul = num5 * num6;
console.log(`The Mul of ${num5} and ${num6} is ${mul}`);

// Task_4 - Write a program to divide two numbers and log the result to the console.

let num7 = 100;
let num8 = 10;

let div = num7 / num8;
console.log(`The Quotient of ${num7} and ${num8} is ${div}`);

// Task_5 - Write a program to find the reminder when one number is divided by another and log the result to the console.

let num9 = 500;
let num10 = 100;

let mod = num9 % num10;
console.log(`The Remainder of ${num9} and ${num10} is ${mod}`);

/* Activity -> 2 : Assignment Operators */

// Task_6 - Use the '+=' operator to add a number to a variable and log the result to the console.

let num11 = 10;
let inc = 5;

inc += num11;
console.log(`The Incremented value is ${inc}`);

// Task_7 - Use the '-=' operator to substract a number to a variable and log the result to the console.

let num12 = 20;
let dec = 10;

dec -= num12;
console.log(`The Decremented value is ${dec}`);

/* Activity -> 3 : Comparison Operators */

// Task_8 - Write a program to compare two numbers using '>' and '<' and log the result to the console.

let num13 = 10;
let num14 = 5;

let isGreater = num13 > num14;
let isSmaller = num13 < num14;

console.log(`The value of ${num13} > ${num14} is `, isGreater);
console.log(`The value of ${num13} < ${num14} is `, isSmaller);

// Task_9 - Write a program to compare two numbers using '>=' and '<=' and log the result to the console.

let num15 = 15;
let num16 = 20;

let isGreaterEqual = num15 >= num16;
let isSmallerEqual = num15 <= num16;

console.log(`The value of ${num15} >= ${num16} is `, isGreaterEqual);
console.log(`The value of ${num15} <= ${num16} is `, isSmallerEqual);

// Task_10 - Write a program to compare two numbers using '==' and '===' and log the result to the console.

let num17 = 10;
let num18 = "10";

let isEqual = num17 == num18;
let isStrictEqual = num17 === num18;

console.log(`The value of ${num17} == ${num18} is `, isEqual);
console.log(`The value of ${num17} === ${num18} is `, isStrictEqual);

/* Activity -> 4 : Logical Operators */

// Task_11 - Write a program that uses the '&&' operator to combine two conditions and log the result to the console.

let isTrue1 = true;
let isTrue2 = false;

let andResult = isTrue1 && isTrue2;
console.log(`The result of ${isTrue1} && ${isTrue2} is `, andResult);

// Task_12 - Write a program that uses the '||' operator to combine two conditions and log the result to the console.

let isTrue3 = true;
let isTrue4 = false;

let orResult = isTrue3 || isTrue4;
console.log(`The result of ${isTrue3} || ${isTrue4} is `, orResult);

// Task_13 - Write a program that uses the '!' operator to negate a condition and log the result to the console.

let isTrue5 = true;

let notResult = !isTrue5;
console.log(`The result of !${isTrue5} is `, notResult);

/* Activity -> 5 : Ternary Operators */

// Task_13 - Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num19 = -35;

let isPositive = num19 > 0 ? "Positive" : "Negative";
console.log(`The value of ${num19} is ${isPositive}`);
