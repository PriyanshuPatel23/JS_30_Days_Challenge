/* Feature Request -> 2 :
    Comparison and Logical Operators Script:
        - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
*/

let num1 = 10;
let num2 = 5;

// Comparison Operator
let isEqual = num1 == num2;
let isStrictEqal = num1 === num2;
let isGreater = num1 > num2;
let isLesser = num1 < num2;
let isGreaterEqual = num1 >= num2;
let isLessEqual = num1 <= num2;
let isNotEqual = num1 != num2;
let isNotStrictEqual = num1 !== num2;

// Logical Operator
let isAnd = isEqual && isStrictEqal;
let isOr = isEqual || isStrictEqal;

console.log(`The answer of ${num1} == ${num2} is ${isEqual}`);
console.log(`The answer of ${num1} === ${num2} is ${isStrictEqal}`);
console.log(`The answer of ${num1} > ${num2} is ${isGreater}`);
console.log(`The answer of ${num1} < ${num2} is ${isLesser}`);
console.log(`The answer of ${num1} >= ${num2} is ${isGreaterEqual}`);
console.log(`The answer of ${num1} <= ${num2} is ${isLessEqual}`);
console.log(`The answer of ${num1}!= ${num2} is ${isNotEqual}`);
console.log(`The answer of ${num1}!== ${num2} is ${isNotStrictEqual}`);

console.log(
  `The answer of ${num1} == ${num2} && ${num1} === ${num2} is ${isAnd}`
);
console.log(
  `The answer of ${num1} == ${num2} || ${num1} === ${num2} is ${isOr}`
);
