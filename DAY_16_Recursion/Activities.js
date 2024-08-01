/* Activity -> 1 : Basic Recursion */

// Task_1 - Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const factorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Test cases
console.log(factorial(0)); // Logs: 1
console.log(factorial(1)); // Logs: 1
console.log(factorial(5)); // Logs: 120

// Task_2 - Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibonacci = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Test cases
console.log(fibonacci(0)); // Logs: 0
console.log(fibonacci(1)); // Logs: 1
console.log(fibonacci(5)); // Logs: 5
console.log(fibonacci(6)); // Logs: 8

/* Activity -> 2 : Recursion with Arrays */

// Task_3 - Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const sumArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
};

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
console.log(sumArray([10, 20, 30])); // Logs: 60
console.log(sumArray([5, 5, 5, 5, 5])); // Logs: 25
console.log(sumArray([])); // Logs: 0
console.log(sumArray([7])); // Logs: 7

// Task_4 - Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const findMax = (arr) => {
  // Base case: if the array has only one element, return that element
  if (arr.length === 1) {
    return arr[0];
  } else {
    // Recursively find the maximum in the rest of the array
    const restMax = findMax(arr.slice(1));
    // Compare the first element with the maximum of the rest of the array
    return arr[0] > restMax ? arr[0] : restMax;
  }
};

// Test cases
console.log(findMax([1, 2, 3, 4, 5])); // Logs: 5
console.log(findMax([10, 20, 30])); // Logs: 30
console.log(findMax([5, 5, 5, 5, 5])); // Logs: 5
console.log(findMax([-10, -20, -30, 0])); // Logs: 0
console.log(findMax([7])); // Logs: 7

/* Activity -> 3 : String Manipulation with Recursion */

// Task_5 - Write a recursive function to reverse a string. Log the result for a few test cases.

const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  } else {
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  }
};

// Test cases
console.log(reverseString("hello")); // Logs: "olleh"
console.log(reverseString("world")); // Logs: "dlrow"
console.log(reverseString("OpenAI")); // Logs: "IAnepO"
console.log(reverseString("recursive")); // Logs: "evisrucer"
console.log(reverseString("")); // Logs: ""

// Task_6 - Write a recursive function to check if a string is palindrome. Log the result for a few test cases.

const isPalindrome = (str) => {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Check the first and last characters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursively check the substring without the first and last characters
  return isPalindrome(str.slice(1, -1));
};

// Test cases
console.log(isPalindrome("racecar")); // Logs: true
console.log(isPalindrome("hello")); // Logs: false
console.log(isPalindrome("madam")); // Logs: true
console.log(isPalindrome("level")); // Logs: true
console.log(isPalindrome("world")); // Logs: false
console.log(isPalindrome("a")); // Logs: true
console.log(isPalindrome("")); // Logs: true

/* Activity -> 4 : Recursive Search */

// Task_7 - Write a recursive function to perform a binary search on a sorted array. Log the index of the largest element for a few test cases.

const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) {
    return -1; // Base case: not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Search right half
  }
};

// Function to find the index of the largest element
const findLargestElementIndex = (arr) => arr.length - 1; // Last index of sorted array

// Test cases for binary search
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binarySearch(sortedArray, 7)); // Logs: 3
console.log(binarySearch(sortedArray, 20)); // Logs: -1
console.log(binarySearch(sortedArray, 1)); // Logs: 0
console.log(binarySearch(sortedArray, 19)); // Logs: 9

// Test cases for finding the largest element index
console.log(findLargestElementIndex(sortedArray)); // Logs: 9
console.log(findLargestElementIndex([])); // Logs: -1 (Handle empty array case)
console.log(findLargestElementIndex([10])); // Logs: 0
console.log(findLargestElementIndex([2, 4, 6, 8, 10])); // Logs: 4

// Task_8 - Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.

const countOccurrences = (arr, target, index = 0) => {
  if (index >= arr.length) {
    return 0; // Base case: reached the end of the array
  }

  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
};

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3)); // Logs: 3
console.log(countOccurrences([10, 20, 10, 30, 10, 10, 40], 10)); // Logs: 4
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // Logs: 5
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Logs: 0
console.log(countOccurrences([], 1)); // Logs: 0

/* Activity -> 5 : Tree Traversal (Optional) */

// Task_9 - Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const inOrderTraversal = (node) => {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left); // Traverse the left subtree
  console.log(node.value); // Visit the root node
  inOrderTraversal(node.right); // Traverse the right subtree
};

// Example binary tree:
//         4
//        / \
//       2   6
//      / \ / \
//     1  3 5  7

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

// Perform in-order traversal
inOrderTraversal(root); // Logs: 1, 2, 3, 4, 5, 6, 7

// Task_10 - Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

class TreeNode1 {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const calculateDepth = (node) => {
  if (node === null) {
    return 0; // Base case: the depth of an empty tree is 0
  }

  const leftDepth = calculateDepth(node.left); // Calculate the depth of the left subtree
  const rightDepth = calculateDepth(node.right); // Calculate the depth of the right subtree

  return Math.max(leftDepth, rightDepth) + 1; // The depth of the tree is the maximum of the depths of its subtrees plus one
};

// Example binary trees
// Tree 1:
//         4
//        / \
//       2   6
//      / \ / \
//     1  3 5  7

const tree1 = new TreeNode1(4);
tree1.left = new TreeNode1(2);
tree1.right = new TreeNode1(6);
tree1.left.left = new TreeNode1(1);
tree1.left.right = new TreeNode1(3);
tree1.right.left = new TreeNode1(5);
tree1.right.right = new TreeNode1(7);

// Tree 2:
//         1
//        /
//       2
//      /
//     3

const tree2 = new TreeNode1(1);
tree2.left = new TreeNode1(2);
tree2.left.left = new TreeNode1(3);

// Tree 3 (single node):
const tree3 = new TreeNode1(1);

// Tree 4 (empty tree):
const tree4 = null;

// Log the depth for each test case
console.log(calculateDepth(tree1)); // Logs: 3
console.log(calculateDepth(tree2)); // Logs: 3
console.log(calculateDepth(tree3)); // Logs: 1
console.log(calculateDepth(tree4)); // Logs: 0
