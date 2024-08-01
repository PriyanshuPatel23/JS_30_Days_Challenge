/* Activity -> 1 : Linked List */

// Task_1 - Implement a 'Node' class to represent an element in a linked list with properties 'value' and 'next'.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task_2 - Implement a'LinkedList' class with methods to add a node to the end, remove a node from the end and display all the nodes.

class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  add(value) {
    const newNode = new Node1(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node from the end of the list
  remove() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  // Display all the nodes in the list
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3 -> null

list.remove();
list.display(); // Output: 1 -> 2 -> null

list.remove();
list.display(); // Output: 1 -> null

list.remove();
list.display(); // Output: List is empty

/* Activity -> 2 : Stack */

// Task_3 - Implement a 'Stack' class with methods 'push' (add element), 'pop' (remove element) and 'peek' (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  // View the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display all elements in the stack
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      console.log(this.items.join(" "));
    }
  }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display(); // Output: 1 2 3

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3
stack.display(); // Output: 1 2

console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
stack.display(); // Output: Stack is empty

console.log(stack.pop()); // Output: Stack is empty

// Task_4 - Use the 'Stack' class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack1 {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  // View the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display all elements in the stack
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      console.log(this.items.join(" "));
    }
  }
}

// Function to reverse a string using the Stack class
function reverseString(input) {
  const stack = new Stack1();
  let reversedString = "";

  // Push all characters of the string onto the stack
  for (let char of input) {
    stack.push(char);
  }

  // Pop all characters from the stack and append to the reversedString
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage
const originalString = "Hello, World!";
const reversed = reverseString(originalString);
console.log("Original String:", originalString); // Output: Hello, World!
console.log("Reversed String:", reversed); // Output: !dlroW ,olleH

/* Activity -> 3 : Queue */

// Task_5 - Implement a 'Queue' class with methods 'enqueue' (add element), 'dequeue' (remove element) and 'front' (view the first element).

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  // View the first element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display all elements in the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      console.log(this.items.join(" "));
    }
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); // Output: 1 2 3

console.log(queue.front()); // Output: 1

console.log(queue.dequeue()); // Output: 1
queue.display(); // Output: 2 3

console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
queue.display(); // Output: Queue is empty

console.log(queue.dequeue()); // Output: Queue is empty

// Task_6 - Use the 'Queue' class to simulates a simple printer queue where print jobs are added to the queue and processed in order.

class Queue1 {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  // View the first element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Display all elements in the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      console.log(this.items.join(" "));
    }
  }
}

// Function to simulate a printer queue
function simulatePrinterQueue() {
  const printerQueue = new Queue1();

  // Function to add a print job to the queue
  function addPrintJob(job) {
    console.log(`Adding print job: ${job}`);
    printerQueue.enqueue(job);
    printerQueue.display();
  }

  // Function to process a print job from the queue
  function processPrintJob() {
    if (printerQueue.isEmpty()) {
      console.log("No print jobs to process");
    } else {
      const job = printerQueue.dequeue();
      console.log(`Processing print job: ${job}`);
      printerQueue.display();
    }
  }

  // Adding print jobs
  addPrintJob("Print job 1");
  addPrintJob("Print job 2");
  addPrintJob("Print job 3");

  // Processing print jobs
  processPrintJob();
  processPrintJob();
  processPrintJob();
  processPrintJob(); // This will show "No print jobs to process"
}

// Run the printer queue simulation
simulatePrinterQueue();

// Adding print job: Print job 1
// Print job 1
// Adding print job: Print job 2
// Print job 1 Print job 2
// Adding print job: Print job 3
// Print job 1 Print job 2 Print job 3
// Processing print job: Print job 1
// Print job 2 Print job 3
// Processing print job: Print job 2
// Print job 3
// Processing print job: Print job 3
// Queue is empty
// No print jobs to process

/* Activity -> 4 : Binary Tree */

// Task_7 - Implement a 'TreeNode' class to represent a node in a binary tree with properties 'value', 'left' and 'right'.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating nodes
const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);

// Building the tree
root.left = leftChild;
root.right = rightChild;

// Adding more nodes
leftChild.left = new TreeNode(4);
leftChild.right = new TreeNode(5);
rightChild.left = new TreeNode(6);
rightChild.right = new TreeNode(7);

// Display the tree structure
function displayTree(node, level = 0) {
  if (node !== null) {
    displayTree(node.right, level + 1);
    console.log(" ".repeat(4 * level) + "-> " + node.value);
    displayTree(node.left, level + 1);
  }
}

displayTree(root);

// Task_8 - Implement a 'BinaryTree' class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode1(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  // Helper function to insert a node in the binary tree
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Perform in-order traversal and display nodes
  inOrderTraversal() {
    this._inOrderTraversalHelper(this.root);
  }

  // Helper function for in-order traversal
  _inOrderTraversalHelper(node) {
    if (node !== null) {
      this._inOrderTraversalHelper(node.left);
      console.log(node.value);
      this._inOrderTraversalHelper(node.right);
    }
  }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal:");
binaryTree.inOrderTraversal(); // Output: 2 3 4 5 6 7 8

/* Activity -> 5 : Graph (Optional) */

// Task_9 - Implement a 'Graph' classes with methods to add vertices, add edges and perform a breadth-first search (BFS).

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // Comment this line for a directed graph
  }

  // Perform breadth-first search (BFS)
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("Breadth-First Search starting from vertex A:");
console.log(graph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E']

// Task_10 - Use the 'Graph' class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph1 {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // Comment this line for a directed graph
  }

  // Perform breadth-first search (BFS) and find the shortest path
  shortestPath(startVertex, endVertex) {
    const visited = new Set();
    const queue = [[startVertex]];
    const paths = new Map();
    visited.add(startVertex);
    paths.set(startVertex, [startVertex]);

    while (queue.length > 0) {
      const path = queue.shift();
      const vertex = path[path.length - 1];

      if (vertex === endVertex) {
        return path;
      }

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...path, neighbor];
          queue.push(newPath);
          paths.set(neighbor, newPath);
        }
      }
    }

    return null; // Return null if no path is found
  }
}

// Example usage
const graph1 = new Graph1();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");

const start = "A";
const end = "E";
const path = graph1.shortestPath(start, end);

console.log(
  `Shortest path from ${start} to ${end}:`,
  path ? path.join(" -> ") : "No path found"
);
