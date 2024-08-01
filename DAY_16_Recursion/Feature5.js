/* Feature Request -> 5 :
    Tree Traversal Script:
        - Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (Optional).
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Recursive function for in-order traversal
const inOrderTraversal = (node) => {
  if (node === null) {
    return; // Base case: reached a leaf node
  }
  inOrderTraversal(node.left); // Traverse the left subtree
  console.log(node.value); // Visit the root node
  inOrderTraversal(node.right); // Traverse the right subtree
};

// Recursive function to calculate the depth of a binary tree
const calculateDepth = (node) => {
  if (node === null) {
    return 0; // Base case: reached a leaf node
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

const tree1 = new TreeNode(4);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(6);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(5);
tree1.right.right = new TreeNode(7);

// Tree 2:
//         1
//        /
//       2
//      /
//     3

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);

// Tree 3 (single node):
const tree3 = new TreeNode(1);

// Tree 4 (empty tree):
const tree4 = null;

// Perform in-order traversal
console.log("In-order traversal of tree1:");
inOrderTraversal(tree1); // Logs: 1, 2, 3, 4, 5, 6, 7
console.log("In-order traversal of tree2:");
inOrderTraversal(tree2); // Logs: 3, 2, 1
console.log("In-order traversal of tree3:");
inOrderTraversal(tree3); // Logs: 1
console.log("In-order traversal of tree4:");
inOrderTraversal(tree4); // Logs nothing

// Calculate and log the depth for each test case
console.log("Depth of tree1:", calculateDepth(tree1)); // Logs: 3
console.log("Depth of tree2:", calculateDepth(tree2)); // Logs: 3
console.log("Depth of tree3:", calculateDepth(tree3)); // Logs: 1
console.log("Depth of tree4:", calculateDepth(tree4)); // Logs: 0
