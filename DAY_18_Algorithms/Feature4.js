/* Feature Request -> 4 :
    Array Algorithm Script:
        - Create a script that rotates arrays and merges sorted arrays.
*/

// Function to rotate an array by 'k' positions
const rotateArray = (arr, k) => {
  const n = arr.length;
  k = k % n; // Normalize k
  if (k === 0) return arr;

  const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
  return rotatedArray;
};

// Function to merge two sorted arrays into one sorted array
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

// Example usage of rotateArray
const arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(arrayToRotate, k);
console.log("Rotated array:", rotatedArray);

// Example usage of mergeSortedArrays
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log("Merged array:", mergedArray);

// Rotated array: [5, 6, 7, 1, 2, 3, 4]
// Merged array: [1, 2, 3, 4, 5, 6, 7, 8]
