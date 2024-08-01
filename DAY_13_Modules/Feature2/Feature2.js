/* Feature Request -> 2 :
    Named and Default Exports Script:
        - Create a script demonstarting both named and default exports and their usage.
*/

import multiply, { PI, add, subtract } from "./main.js";

const num1 = 10;
const num2 = 5;

console.log(`PI is : ${PI}`);
console.log(`The sum of ${num1} and ${num2} is : ${add(num1, num2)}`);
console.log(
  `The difference between ${num1} and ${num2} is : ${subtract(num1, num2)}`
);
console.log(`The product of ${num1} and ${num2} is : ${multiply(num1, num2)}`);
