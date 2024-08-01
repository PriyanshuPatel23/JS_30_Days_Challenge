/* Feature Request -> 3 :
    String Algorithm Script:
        - Write a script that counts character occurences and finds the longest substring without repeating characters.
*/

// Function to count character occurrences
const countCharacters = (str) => {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
};

// Function to find the longest substring without repeating characters
const lengthOfLongestSubstring = (str) => {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (char in charIndexMap) {
      start = Math.max(start, charIndexMap[char] + 1);
    }

    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

// Sample string
const inputString = "abcabcbb";

// Count character occurrences
const characterCounts = countCharacters(inputString);
console.log("Character counts:", characterCounts);

// Find the length of the longest substring without repeating characters
const longestSubstringLength = lengthOfLongestSubstring(inputString);
console.log(
  "Length of the longest substring without repeating characters:",
  longestSubstringLength
);

// Character counts: { a: 2, b: 4, c: 2 }
// Length of the longest substring without repeating characters: 3
