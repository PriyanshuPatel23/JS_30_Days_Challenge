/* Feature Request -> 1 :
    Sorting Algorithm Script:
        - Write a script that implements bubble sort, selection sort and quicksort algorithms to sort arrays.
*/

// Bubble Sort
const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
};

// Selection Sort
const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

// Quicksort
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);
  const middle = arr.filter((x) => x === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
};

// Sample arrays
const bubbleSortArray = [64, 34, 25, 12, 22, 11, 90];
const selectionSortArray = [29, 10, 14, 37, 13];
const quickSortArray = [3, 6, 8, 10, 1, 2, 1];

// Sorting arrays
console.log("Bubble Sort:");
console.log("Original array:", bubbleSortArray);
console.log("Sorted array:", bubbleSort(bubbleSortArray));

console.log("\nSelection Sort:");
console.log("Original array:", selectionSortArray);
console.log("Sorted array:", selectionSort(selectionSortArray));

console.log("\nQuicksort:");
console.log("Original array:", quickSortArray);
console.log("Sorted array:", quickSort(quickSortArray));

// Bubble Sort:
// Original array: [64, 34, 25, 12, 22, 11, 90]
// Sorted array: [11, 12, 22, 25, 34, 64, 90]

// Selection Sort:
// Original array: [29, 10, 14, 37, 13]
// Sorted array: [10, 13, 14, 29, 37]

// Quicksort:
// Original array: [3, 6, 8, 10, 1, 2, 1]
// Sorted array: [1, 1,  2, 3, 6, 8, 10]
