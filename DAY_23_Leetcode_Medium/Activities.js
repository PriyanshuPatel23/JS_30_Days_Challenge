/* Activity -> 1 : Add Two Numbers */

// Task_1 - Solve the "Add Two Numbers" Problem on LeetCode.
//      -> Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each node contains a single digit. Add the two numbers and return the sum as a linked list.
//      -> Create a few test cases with linked lists and logs the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Adds two numbers represented by linked lists.
 * @param {ListNode} l1 - First linked list.
 * @param {ListNode} l2 - Second linked list.
 * @return {ListNode} - The sum as a linked list.
 */

const addTwoNumbers = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

const createLinkedList = (arr) => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  arr.forEach((num) => {
    current.next = new ListNode(num);
    current = current.next;
  });
  return dummyHead.next;
};

const printLinkedList = (list) => {
  let arr = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  console.log(arr.join(" -> "));
};

// Test cases
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 7 -> 0 -> 8

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

/* Activity -> 2 : Longest Substring Without Repeating Characters */

// Task_2 - Solve the "Longest Substring Without Repeating Characters" Problem on LeetCode.
//      -> Write a function that takes a string and returns the length of the longest substring without repeating characters.
//      -> Log the length for a few test cases, including edge cases.

/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring.
 */

const lengthOfLongestSubstring = (s) => {
  let n = s.length;
  let set = new Set();
  let ans = 0,
    i = 0,
    j = 0;

  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i++]);
    }
  }

  return ans;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (abc)
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (b)
console.log(lengthOfLongestSubstring("wwkew")); // Output: 3 (wke)
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("au")); // Output: 2 (au)
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 (vdf)
console.log(lengthOfLongestSubstring("aab")); // Output: 2 (ab)

/* Activity -> 3 : Container With Most Water */

// Task_3 - Solve the "Container With Most Water" Problem on LeetCode.
//      -> Write a function that takes an array of non-negative integers where each integers represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
//      -> Log the maximum amount of water for a few test cases.

/**
 * Finds the maximum amount of water a container can hold.
 * @param {number[]} height - Array of non-negative integers representing heights.
 * @return {number} - The maximum amount of water.
 */
const maxArea = (height) => {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentWater = width * minHeight;
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([0, 2])); // Output: 0
console.log(maxArea([1, 2, 4, 3])); // Output: 4

/* Activity -> 4 : 3Sum */

// Task_4 - Solve the "3Sum" Problem on LeetCode.
//      -> Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
//      -> Log the triplets for a few test cases, including edge cases.

/**
 * Finds all unique triplets in the array which give the sum of zero.
 * @param {number[]} nums - Array of integers.
 * @return {number[][]} - Array of unique triplets.
 */
const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2, 0, 2], [-2, 1, 1]]

/* Activity -> 5 : Group Anagrams */

// Task_5 - Solve the "Group Anagrams" Problem on LeetCode.
//      -> Write a function that takes an array of strings and groups anagrams together.
//      -> Log the grouped anagrams for a few test cases.

/**
 * Groups anagrams together from an array of strings.
 * @param {string[]} strs - Array of strings.
 * @return {string[][]} - Array of grouped anagrams.
 */
const groupAnagrams = (strs) => {
  const map = new Map();

  strs.forEach((str) => {
    // Sort the characters in the string
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is not in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Push the original string into the map
    map.get(sortedStr).push(str);
  });

  // Convert the map values to an array
  return Array.from(map.values());
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(
  groupAnagrams([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
  ])
);
// Output: [["cab"],["tin"],["pew"],["duh"],["may"],["ill"],["buy"],["bar"],["max"],["doc"]]
