/* Feature Request -> 3 :
    Object Iteration Script:
        - Write a script that demonstrates iterating over an object's properties using 'for...in' loop and 'Object.keys'/'Object.values'.
*/

const obj = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Using 'for...in' loop
for (let x in obj) {
  console.log(`${x} : ${obj[x]}`);
}

console.log(Object.keys(obj));
console.log(Object.keys(obj));
