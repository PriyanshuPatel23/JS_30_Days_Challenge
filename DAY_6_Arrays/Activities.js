/* Activity -> 1 : Array Creation and Access */

// Task_1 - Create an array of num10 from 1 to 5 and log the array to the console.

const arr = [1, 2, 3, 4, 5];

console.log(arr);

// Task_2 - Access the first and last elements of the array and log them to the console.

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const first = arr1[0];

const last = arr1[arr1.length - 1];

console.log(first, last);

/* Activity -> 2 : Array Methods (Basic) */

// Task_3 - Use the 'push' method to add a new number to the end of array and log the updated array.

const arr2 = [1, 2, 3, 4, 5, 6];

arr2.push(7);

console.log(arr2);

// Task_4 - Use the 'pop' method to remove the last element from the array and log the updated array.

arr2.pop();

console.log(arr2);

// Task_5 - Use the 'shift' method to remove the first element from the array and log the updated array.

const arr3 = [1, 2, 3, 4, 5, 6, 7];

arr3.shift();

console.log(arr3);

// Task_6 - Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.

arr3.unshift(1);

console.log(arr3);

/* Activity -> 3 : Array Methods (Intermediate) */

// Task_7 - Use the 'map' method to create a new array where each number is doubled and log the new array.

const arr4 = [1, 2, 3, 4, 5, 6];

const doubledArr = arr4.map(doubleArr);

function doubleArr(value) {
  return value * 2;
}

console.log(doubledArr);

// Task_8 - Use the 'filter' method to create a new array with only even numbers and log the new array.

const arr5 = [1, 2, 3, 4, 5, 6];

const evenArr = arr5.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(evenArr);

// Task_9 - Use the 'reduce' calculate the sum of all numbers in the array and log the result.

const arr6 = [1, 2, 3, 4, 5, 6];

const sum = arr6.reduce(sumArr);

function sumArr(total, value) {
  return total + value;
}

console.log(sum);

/* Activity -> 4 : Array Iteration */

// Task_10 - Use a 'for' loop to iterate over the array and log each element to console.

const arr7 = [1, "Hello", 3, 4, 5, 6, 7];

for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
}

// Task_11 - Use a 'forEach' method to iterate over the array and log each element to console.

const arr8 = [1, 2, 3, 4, 5, 6, "Hello World"];

arr8.forEach(iterate);

function iterate(value) {
  console.log(value);
}

/* Activity -> 5 : Multi-dimensional Arrays */

// Task_12 - Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
];

console.log(matrix);

// Task_13 - Access and log a specific element from the two-dimensional array.

const matrix1 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6],
];

const element = matrix1[0][1];

console.log(element);
