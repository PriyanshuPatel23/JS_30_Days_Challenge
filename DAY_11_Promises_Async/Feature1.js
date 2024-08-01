/* Feature Request -> 1 :
    Promise Creation Script:
        - Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
*/

// Function that returns a promise which resolves or rejects based on the input
const getNumberPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(`Success! The number is ${number}`);
    } else {
      reject(`Error! The number ${number} is not greater than 0`);
    }
  });
};

// Function to handle the promise using .then and .catch
const handlePromise = (number) => {
  getNumberPromise(number)
    .then((message) => {
      console.log(message); // Handle resolved promise
    })
    .catch((error) => {
      console.error(error); // Handle rejected promise
    });
};

// Demonstrate handling resolved state
handlePromise(5);

// Demonstrate handling rejected state
handlePromise(-3);
