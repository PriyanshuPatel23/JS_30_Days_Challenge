/* Activity -> 1 : Template Literals */

// Task_1 - Use the template literals to create a string that includes variables for a person's name and age and log the string to the console.

let name = "John Doe";
let age = 30;

console.log(`Hello ${name} your age is ${age}`);

// Task_2 - Create a multi-line string using template literals and log it to the console.

let multiLineString = `
This is a multi-line string
with multiple lines.
`;

console.log(multiLineString);

/* Activity -> 2 : Destructuring */

// Task_3 - Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5, 6];

const [firstelement, secondelement] = arr;

console.log(`${firstelement}`);
console.log(`${secondelement}`);

// Task_4 - Use object destructuring to extract the title and author form a book object and log them to the console.

let books = {
  title: "Harry Potter",
  author: "J.K. Rowling",
};

const { title, author } = books;

console.log(`${title}`);
console.log(`${author}`);

/* Activity -> 3 : Spread and Rest Operators */

// Task_5 - Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console.

const existing = [1, 2, 3];
const additional = [4, 5, 6];

const newArray = [...existing, ...additional, 7, 8, 9];

console.log(newArray);

// Task_6 - Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.

function sum(...args) {
  return args.reduce((total, value) => total + value);
}

console.log(sum(1, 2, 3, 4, 5));

/* Activity -> 4 : Default Parameters */

// Task_7 - Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num, num1 = 1) {
  return num * num1;
}

console.log(product(2));
console.log(product(2, 3));

/* Activity -> 5 : Enhanced Object Literals */

// Task_8 - Use enhanced object literals to create an object with methods and properties and log the object to the console.

const person = {
  Fname: "John",
  Lname: "Doe",
  age: 30,
  greet() {
    return `Hello, my name is ${this.Fname} ${this.Lname}. I am ${this.age} years old.`;
  },
};

console.log(person);
console.log(person.greet());

// Task_9 - Create an object with computed property names based on variables and log the object to the console.

const key1 = "name";
const key2 = "age";

const person1 = {
  [key1]: "John",
  [key2]: 21,
};

console.log(person1);
