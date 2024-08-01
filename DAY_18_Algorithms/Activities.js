/* Activity -> 1 : Sorting Algorithms */

// Task_1 - Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Each pass through the array guarantees that the largest element will be at its correct position
  } while (swapped);

  return arr;
};

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers)); // Sorted array: [11, 12, 22, 25, 34, 64, 90]

// Task_2 - Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the elements
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const numbers1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", selectionSort(numbers1)); // Sorted array: [11, 12, 22, 25, 34, 64, 90]

// Task_3 - Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);
  const middle = arr.filter((x) => x === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
};

const numbers2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", quickSort(numbers2)); // Sorted array: [11, 12, 22, 25, 34, 64, 90]

/* Activity -> 2 : Searching Algorithms */

// Task_4 - Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Return -1 if the target is not found
};

const numbers3 = [64, 34, 25, 12, 22, 11, 90];
const target = 22;
const index = linearSearch(numbers3, target);
console.log(`Index of target value ${target}:`, index); // Index of target value 22: 4

// Task_5 - Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Return -1 if the target is not found
};

const sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
const target1 = 22;
const index1 = binarySearch(sortedNumbers, target1);
console.log(`Index of target value ${target1}:`, index1); // Index of target value 22: 2

/* Activity -> 3 : String Algorithms */

// Task_6 - Write a function to count the occurences of each character in a string. Log the character counts.

const countCharacters = (str) => {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
};

const inputString = "hello world";
const characterCounts = countCharacters(inputString);
console.log("Character counts:", characterCounts); // Character counts: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// Task_7 - Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (char in charIndexMap) {
      start = Math.max(start, charIndexMap[char] + 1);
    }

    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

const inputString1 = "abcabcbb";
const length = lengthOfLongestSubstring(inputString1);
console.log(
  "Length of the longest substring without repeating characters:",
  length
);
// Length of the longest substring without repeating characters: 3

/* Activity -> 4 : Array Algorithms */

// Task_8 - Write a function to rotate an array by 'k' positions. Log the rotated array.

const rotateArray = (arr, k) => {
  const n = arr.length;
  k = k % n; // In case k is greater than the length of the array
  if (k === 0) return arr;

  const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
  return rotated;
};

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(array, k);
console.log("Rotated array:", rotatedArray); // Rotated array: [5, 6, 7, 1, 2, 3, 4]

// Task_9 - Write a function to merge two sorted arrays into one sorted array. Log the merged array.

const mergeSortedArrays = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // Merge arrays while there are elements in both
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 if any
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log("Merged array:", mergedArray); // Merged array: [1, 2, 3, 4, 5, 6, 7, 8]

/* Activity -> 5 : Dynamic Programming (optional) */

// Task_10 - Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

const n = 10;
const fibonacciNumbers = fibonacci(n);
console.log("Fibonacci numbers:", fibonacciNumbers); // Fibonacci numbers: [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]

// Task_11 - Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

const knapsack = (weights, values, capacity) => {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
};

const weights = [1, 2, 3, 4];
const values = [10, 20, 30, 40];
const capacity = 5;
const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained:", maxValue); // Maximum value that can be obtained: 50
