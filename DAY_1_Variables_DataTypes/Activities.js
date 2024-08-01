/* Activity -> 1 : Variable Declaration */

// Task_1 - Declare a variable using 'var', assign it a number and log the value to console.

var assignee = 10;
console.log(`This is number ${assignee}`);

// Task_2 - Declare a variable using 'let', assign it a string and log the value to console.

let assignee2 = "Hello World";
console.log(`This is String ${assignee2}`);

/* Activity -> 2 : Constant Declaration */

// Task_3 - Declare a variable using 'const', assign it a boolean value and log the value to console.

const assignee3 = true; // booleanValue = 0{false} or 1{true}
console.log(`This is a Boolean value ${assignee3}`);

/* Activity -> 3 : Data Types */

// Task_4 - Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeOf operator.

let dataNum = 8;
console.log(`This is the Datatype ${typeof dataNum} of ${dataNum}`);

let dataStr = "Str";
console.log(`This is the Datatype ${typeof dataStr} of ${dataStr}`);

let dataBool = true;
console.log(`This is the Datatype ${typeof dataBool} of ${dataBool}`);

let dataObj = { name: "OBJ", language: "JS" };
console.log(
  `This is the Datatype ${typeof dataObj} of ${JSON.stringify(dataObj)}`
);

let dataArr = [1, 2, 3, function () {}];
console.log(`This is the Datatype ${typeof dataArr} of ${dataArr}`);

/* Activity -> 4 : Reassigning Variables */

// Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both values to console.

let letTest = "Hello";
console.log(`The Original value is ${letTest}`);

letTest = "World";
console.log(`The Reasigned value is ${letTest}`);

/* Activity -> 5 : Understanding 'Const' */

// Task_6 - Try reassigning a variable declared with 'const' and observe the error.

const constTest = "Hello";
console.log(`The original value is ${constTest}`);

constTest = "World";
console.log(`The Reassigned value is ${constTest}`); // type error
