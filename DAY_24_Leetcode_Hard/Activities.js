/* Activity -> 1 : Median of Two Sorted Arrays */

// Task_1 - Solve the "Median of Two Sorted Arrays" Problem on LeetCode.
//      -> Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
//      -> Log the median for a few test cases, including edge cases.

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX =
      partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY =
      partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2

/* Activity -> 2 : Merge k Sorted Lists */

// Task_2 - Solve the "Merge k Sorted Lists" Problem on LeetCode.
//      -> Write a function that takes an array of k linked lists, each linked list is sorted in ascending order and merges all the linked lists into one sorted linked list.
//      -> Create a few test cases with linked lists and log the merged list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.val < element.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.val < element.val) ||
          (swap !== null && rightChild.val < leftChild.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const mergeKLists = (lists) => {
  const heap = new MinHeap();
  lists.forEach((list) => {
    if (list) heap.insert(list);
  });

  const dummy = new ListNode();
  let current = dummy;

  while (heap.heap.length > 0) {
    const minNode = heap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next) heap.insert(minNode.next);
  }

  return dummy.next;
};

// Helper function to create a linked list from an array
const arrayToList = (arr) => {
  const dummy = new ListNode();
  let current = dummy;
  arr.forEach((val) => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return dummy.next;
};

// Helper function to convert a linked list to an array
const listToArray = (list) => {
  const result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
};

// Test cases
const lists = [
  arrayToList([1, 4, 5]),
  arrayToList([1, 3, 4]),
  arrayToList([2, 6]),
];

const mergedList = mergeKLists(lists);
console.log(listToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4, 5, 6]

// Additional test cases
const lists2 = [arrayToList([]), arrayToList([]), arrayToList([1])];

const mergedList2 = mergeKLists(lists2);
console.log(listToArray(mergedList2)); // Output: [1]

const lists3 = [arrayToList([2]), arrayToList([3]), arrayToList([4])];

const mergedList3 = mergeKLists(lists3);
console.log(listToArray(mergedList3)); // Output: [2, 3, 4]

/* Activity -> 3 : Trapping Rain Water */

// Task_3 - Solve the "Trapping Rain Water" Problem on LeetCode.
//      -> Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1 and computes how much water is can trap after raining.
//      -> Log the amount of trapped water for a few test cases.

const trap = (height) => {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
};

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 1, 1, 1])); // Output: 0
console.log(trap([4, 2, 3])); // Output: 1
console.log(trap([0, 0, 0, 0])); // Output: 0

/* Activity -> 4 : N-Queens */

// Task_4 - Solve the "N-Queens" Problem on LeetCode.
//      -> Write a function that places n queens on an n×n chessboard such that no two queens attack each other and returns all distinct solutions to the n-queens puzzle.
//      -> Log the distinct solutions for a few test cases.

const solveNQueens = (n) => {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  const backtrack = (row) => {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
        continue;

      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };

  backtrack(0);
  return solutions;
};

// Helper function to print the solutions in a readable format
const printSolutions = (solutions) => {
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach((row) => console.log(row));
    console.log("");
  });
};

// Test cases
const solutions4 = solveNQueens(4);
printSolutions(solutions4); // Output: 2 distinct solutions for 4-queens

const solutions8 = solveNQueens(8);
console.log(`Number of solutions for 8-queens: ${solutions8.length}`);

// Solution 1:
// .Q..
// ...Q
// Q...
// ..Q.

// Solution 2:
// ..Q.
// Q...
// ...Q
// .Q..

// Number of solutions for 8-queens: 92

/* Activity -> 5 : Word Ladder */

// Task_5 - Solve the "Word Ladder" Problem on LeetCode.
//      -> Write a function that takes a begin word, an end word, and a dictionary of words and finds the length of the sortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
//      -> Log the length of the sortest transformation sequence for a few test cases.

const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return 0;

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]]; // The queue stores tuples of (currentWord, level)
  const visited = new Set();
  visited.add(beginWord); // Add the beginWord to visited set

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === endWord) return level;

    for (let i = 0; i < currentWord.length; i++) {
      const originalChar = currentWord[i];
      for (
        let charCode = "a".charCodeAt(0);
        charCode <= "z".charCodeAt(0);
        charCode++
      ) {
        const newChar = String.fromCharCode(charCode);
        if (newChar === originalChar) continue;

        const newWord =
          currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0; // If no transformation sequence is found
};

// Test cases
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(ladderLength("lost", "cost", ["cost", "lost", "most", "post"])); // Output: 2
