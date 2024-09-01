/* Feature Request -> 5 :
    Enhanced Object Literals Script:
        - Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
*/

let key1 = "name";
let key2 = "age";

let obj = {
  [key1]: "John Doe",
  [key2]: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
  },
};

obj.greet();
