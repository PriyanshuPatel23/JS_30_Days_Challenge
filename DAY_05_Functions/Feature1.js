/* Feature Request -> 1 :
    Even or Odd Function Script:
        - Write a script that includes a function to check if a number is even or odd and logs the result.
*/

function checkNumber(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an Even number`);
  } else {
    console.log(`${num} is an Odd number`);
  }
}

checkNumber(10);
