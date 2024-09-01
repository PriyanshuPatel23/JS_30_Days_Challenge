/* Feature Request -> 2 :
    Destructuring Script:
        - Create a script that uses array and object destructuring to extract values and log them.
*/

const num = [1, 2, 3, 4, 5];
const [firstelement, secondelement] = num;
console.log(firstelement, secondelement);

const obj = {
  name: "John Doe",
  age: 30,
};

const { name, age } = obj;
console.log(name, age);
