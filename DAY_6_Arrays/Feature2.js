/* Feature Request -> 2 :
    Array Transformation Script:
        - Create a script that uses 'map', 'filter' and 'reduce' methods to transform and aggregate array data.
*/

let arr = [1, 2, 3, 4, 5, 6];

// Task_1 - Use the 'map' method to create a new array where each number is doubled.

let doubledArr = arr.map(doubleArr);

function doubleArr(value) {
  return value * 2;
}

console.log(doubledArr);

// Task_2 - Use the 'filter' method to create a new array with only even numbers.
let evenArr = arr.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(evenArr);

// Task_3 - Use the 'reduce' method to calculate the sum of all even numbers in the array.

let sum = evenArr.reduce(sumArr);

function sumArr(total, value) {
  return total + value;
}

console.log(sum);
