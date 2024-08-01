/* Feature Request -> 3 :
    Spread and Rest Operators Script:
        - Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combinedArray = [...arr1, ...arr2, ...arr3];

function sum(...args) {
  return args.reduce((total, value) => total + value);
}

console.log(sum(...combinedArray));
