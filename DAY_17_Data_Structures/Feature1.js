/* Feature Request -> 1 :
    Linked List Script:
        - Write a script that implements a linked list with methods to add, remove and display nodes.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the linked list
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Remove a node by value
  remove(value) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let previous = null;

    // Check if the node to be removed is the head
    if (current.value === value) {
      this.head = current.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    // Search for the node to remove
    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    // Node not found
    if (current === null) {
      console.log("Node not found");
      return;
    }

    // Remove the node
    previous.next = current.next;
    if (current === this.tail) {
      this.tail = previous;
    }
    this.size--;
  }

  // Display all nodes in the linked list
  display() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let nodes = [];

    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }

    console.log(nodes.join(" -> "));
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display(); // Output: 1 -> 2 -> 3

linkedList.remove(2);
linkedList.display(); // Output: 1 -> 3

linkedList.remove(1);
linkedList.display(); // Output: 3

linkedList.remove(3);
linkedList.display(); // Output: List is empty

linkedList.remove(10); // Output: Node not found
