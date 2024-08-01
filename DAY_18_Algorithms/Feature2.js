/* Feature Request -> 2 :
    Searching Algorithm Script:
        - Create a script that implements linear search and binary search algorithms to find values in arrays.
*/

// Linear Search
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1; // Return -1 if target is not found
};

// Binary Search
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if target is found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Return -1 if target is not found
};

// Sample arrays and target values
const linearSearchArray = [64, 34, 25, 12, 22, 11, 90];
const binarySearchArray = [11, 12, 22, 25, 34, 64, 90];
const linearSearchTarget = 22;
const binarySearchTarget = 25;

// Searching arrays
console.log("Linear Search:");
console.log(`Array: [${linearSearchArray}]`);
console.log(`Target value: ${linearSearchTarget}`);
console.log(
  `Index of target value: ${linearSearch(
    linearSearchArray,
    linearSearchTarget
  )}`
);

console.log("\nBinary Search:");
console.log(`Array: [${binarySearchArray}]`);
console.log(`Target value: ${binarySearchTarget}`);
console.log(
  `Index of target value: ${binarySearch(
    binarySearchArray,
    binarySearchTarget
  )}`
);

// Linear Search:
// Array: [64,34,25,12,22,11,90]
// Target value: 22
// Index of target value: 4

// Binary Search:
// Array: [11,12,22,25,34,64,90]
// Target value: 25
// Index of target value: 3
