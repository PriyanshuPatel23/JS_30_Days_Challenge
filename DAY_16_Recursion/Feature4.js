/* Feature Request -> 4 :
    Recursive Search Script:
        - Create a script that includes recursive functions for binary search and counting occurrences in an array.
*/

// Recursive function for binary search
const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) {
    return -1; // Base case: target not found
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid; // Base case: target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Search in the right half
  }
};

// Recursive function to count occurrences of a target element in an array
const countOccurrences = (arr, target, index = 0) => {
  if (index >= arr.length) {
    return 0; // Base case: reached the end of the array
  }
  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1); // Recursive case
};

// Test cases for binary search
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5)); // Logs: 4
console.log(binarySearch(sortedArray, 1)); // Logs: 0
console.log(binarySearch(sortedArray, 10)); // Logs: 9
console.log(binarySearch(sortedArray, 11)); // Logs: -1

// Test cases for countOccurrences
const array = [1, 2, 3, 4, 3, 3, 5, 3, 6, 3];
console.log(countOccurrences(array, 3)); // Logs: 5
console.log(countOccurrences(array, 1)); // Logs: 1
console.log(countOccurrences(array, 6)); // Logs: 1
console.log(countOccurrences(array, 7)); // Logs: 0
console.log(countOccurrences([], 3)); // Logs: 0
