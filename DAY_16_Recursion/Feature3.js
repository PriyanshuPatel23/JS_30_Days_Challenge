/* Feature Request -> 3 :
    String Recursion Script:
        - Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
*/

// Recursive function to reverse a string
const reverseString = (str) => {
  if (str === "") {
    return ""; // Base case: empty string
  }
  return reverseString(str.slice(1)) + str[0]; // Recursive case
};

// Recursive function to check if a string is a palindrome
const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true; // Base case: empty string or single character string
  }
  if (str[0] !== str[str.length - 1]) {
    return false; // Base case: first and last characters do not match
  }
  return isPalindrome(str.slice(1, -1)); // Recursive case
};

// Test cases for reverseString
console.log(reverseString("hello")); // Logs: "olleh"
console.log(reverseString("world")); // Logs: "dlrow"
console.log(reverseString("")); // Logs: ""
console.log(reverseString("a")); // Logs: "a"
console.log(reverseString("racecar")); // Logs: "racecar"

// Test cases for isPalindrome
console.log(isPalindrome("racecar")); // Logs: true
console.log(isPalindrome("hello")); // Logs: false
console.log(isPalindrome("madam")); // Logs: true
console.log(isPalindrome("level")); // Logs: true
console.log(isPalindrome("world")); // Logs: false
console.log(isPalindrome("a")); // Logs: true
console.log(isPalindrome("")); // Logs: true
