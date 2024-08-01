/* Feature Request -> 2 :
    Stack Script:
        - Create a script that implements a stack and uses it to reverse a string.
*/

class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element off the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Display all elements in the stack
  display() {
    console.log(this.items.join(" "));
  }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
  const stack = new Stack();

  // Push all characters of the string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";

  // Pop all characters from the stack to get the reversed string
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage
const inputString = "hello";
const reversedString = reverseString(inputString);

console.log(`Original string: ${inputString}`); // Output: hello
console.log(`Reversed string: ${reversedString}`); // Output: olleh
