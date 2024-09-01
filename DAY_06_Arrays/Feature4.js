/* Feature Request -> 4 :
    Two-dimensional Array Script:
        - Create a script that demonstrates the creation and manipulation of a two-dimensional array.
*/

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log("Original Matrix:", matrix);

// Task_1 - Add a new row to the matrix using 'push' method.

let newRow = [13, 14, 15];
matrix.push(newRow);
console.log("After pushing new row:", matrix);

// Task_2 - Remove the last row from the matrix using 'pop' method.

matrix.pop();
console.log("After popping last row:", matrix);

// Task_3 - Adding a new column to the matrix
for (let i = 0; i < matrix.length; i++) {
  matrix[i].push(matrix[i][0] * 2);
  console.log("After adding new column:", matrix);
}
