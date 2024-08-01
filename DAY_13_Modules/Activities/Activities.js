/* Activity -> 1 : Creating and Exporting Modules */

// Task_1 - Create a module that exports a function to add two numbers. Import and use this module in another script.

import { add } from "./main.js";

console.log(add(5, 10));

// Task_2 - Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { personDetails } from "./main.js";

personDetails.FullName();

/* Activity -> 2 : Named and Default Exports */

// Task_3 - Create a module that exports multiple functions using named exportes. Imports and use these functions in another script.

import { subtract, sum, multiply, divide } from "./main.js";

console.log(subtract(10, 5));
console.log(sum(5, 10));
console.log(multiply(5, 10));
console.log(divide(10, 2));

// Task_4 - Create a module that exports a single function using default export. Import and use this function in another script.

import add1 from "./main.js";
console.log(add1(5, 1));

/* Activity -> 3 : Importing Entire Modules */

// Task_5 - Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as utils from "./Utils.js";

console.log("PI:", utils.PI);
console.log("E:", utils.E);

console.log("Add 5 and 3:", utils.add(5, 3));
console.log("Subtract 7 from 10:", utils.subtract(10, 7));
console.log("Multiply 4 by 6:", utils.multiply(4, 6));
console.log("Divide 20 by 4:", utils.divide(20, 4));

/* Activity -> 4 : Using Third-Party Modules */

// Task_6 - Install a third-party module (e.g.,lodash) using npm. Import and use a function from this module in a script.

import _ from "lodash";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = _.shuffle(numbers);

console.log("Original array :", numbers);
console.log("Shuffled array :", shuffledNumbers);

// Task_7 - Install a third-party module (e.g.,axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("data", response.data);
  } catch (error) {
    console.log("error : ", error);
  }
};

fetchData();
