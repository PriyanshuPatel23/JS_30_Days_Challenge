/* Feature Request -> 1 :
    Array Manipulation Script:
        - Write a script that demonstrates the creation of an array, adding and removing elements using 'push','pop','shift' and 'unshift' methods.
*/

let myArray = [1, 2, 3];

console.log("Original Array:", myArray);

// Add elements to the end of the array using 'push'
myArray.push(4, 5);
console.log("After pushing elements:", myArray);

// Remove the last element from the array using 'pop'
myArray.pop();
console.log("After popping element:", myArray);

// Add elements to the beginning of the array using 'unshift'
myArray.unshift(0, -1);
console.log("After unshifting elements:", myArray);

// Remove the first element from the array using 'shift'
myArray.shift();
console.log("After shifting element:", myArray);
