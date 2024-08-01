/* Feature Request -> 3 :
    Array Iteration Script:
        - Write a script that iterates over an array using both 'for' loop and 'forEach' method and logs each element.
*/

const arr = [1, 2, 3, 4];

// Using 'for' loop
console.log("Using For Loop : ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Using 'forEach' method
console.log("\nUsing forEach Method : ");
arr.forEach(function (element) {
  console.log(element);
});
