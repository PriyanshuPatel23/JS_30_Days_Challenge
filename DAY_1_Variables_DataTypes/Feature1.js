/* Feature Request -> 1 :
    Variable Types Console Log:
        - Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
*/

let dataNum = 10;
let dataStr = "Hello World";
let dataBool = true;
let dataObj = { name: "John", age: 30 };
let dataArr = [1, 2, 3, "four"];

console.log(`The DataType of ${dataNum} is ${typeof dataNum}`);

console.log(`The DataType of ${dataStr} is ${typeof dataStr}`);

console.log(`The DataType of ${dataBool} is ${typeof dataBool}`);

console.log(`The DataType of ${JSON.stringify(dataObj)} is ${typeof dataObj}`);

console.log(`The DataType of ${dataArr} is ${typeof dataArr}`);
