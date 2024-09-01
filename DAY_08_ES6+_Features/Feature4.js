/* Feature Request -> 4 :
    Default Parameters Script:
        - Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
*/

function greet(name = "Guest", age = 0) {
  return `Hello, my name is ${name}. I am ${age} years old.`;
}

console.log(greet("John Doe", 30));
console.log(greet(undefined, 30));
