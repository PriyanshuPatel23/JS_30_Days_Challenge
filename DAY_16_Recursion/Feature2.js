/* Feature Request -> 2 :
    Array Recursion Script:
        - Create a script that includes recursive functions to find the sum and maximum element of an array.
*/

// Recursive function to find the sum of all elements in an array
const sumArray = (arr, index = 0) => {
  if (index >= arr.length) {
    return 0; // Base case: reached the end of the array
  }
  return arr[index] + sumArray(arr, index + 1); // Recursive case
};

// Recursive function to find the maximum element in an array
const maxArray = (arr, index = 0, maxSoFar = -Infinity) => {
  if (index >= arr.length) {
    return maxSoFar; // Base case: reached the end of the array
  }
  maxSoFar = arr[index] > maxSoFar ? arr[index] : maxSoFar; // Update maxSoFar
  return maxArray(arr, index + 1, maxSoFar); // Recursive case
};

// Test cases for sumArray
console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
console.log(sumArray([10, -2, 33, 14, 5])); // Logs: 60
console.log(sumArray([])); // Logs: 0
console.log(sumArray([7, 8, 9])); // Logs: 24

// Test cases for maxArray
console.log(maxArray([1, 2, 3, 4, 5])); // Logs: 5
console.log(maxArray([10, -2, 33, 14, 5])); // Logs: 33
console.log(maxArray([])); // Logs: -Infinity (or you could handle empty array case separately)
console.log(maxArray([7, 8, 9])); // Logs: 9
