/* Feature Request -> 4 :
    Binary Tree Script:
        - Create a script that implements a binary tree with insertion and in-order traversal methods.
*/

class TreeNode {
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
    const newNode = new TreeNode(value);
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
    const result = [];
    this._inOrderTraversalHelper(this.root, result);
    return result;
  }

  // Helper function for in-order traversal
  _inOrderTraversalHelper(node, result) {
    if (node !== null) {
      this._inOrderTraversalHelper(node.left, result);
      result.push(node.value);
      this._inOrderTraversalHelper(node.right, result);
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

const inOrderResult = binaryTree.inOrderTraversal();
console.log("In-order traversal:");
console.log(inOrderResult.join(" -> ")); // Output: 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
