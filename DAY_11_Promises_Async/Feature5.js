/* Feature Request -> 5 :
    Concurrent Promises Script:
        - Write a script that uses 'Promise.all' and 'Promise.race' to handle multiple promises concurrently and logs the results.
*/

// Function that returns a promise which resolves after a given time
const delay = (message, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });
};

// Function to demonstrate Promise.all
const promiseAllExample = () => {
  const promise1 = delay("First message", 1000);
  const promise2 = delay("Second message", 2000);
  const promise3 = delay("Third message", 1500);

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("All promises resolved:", results); // Logs an array of all resolved values
    })
    .catch((error) => {
      console.error("Error:", error); // Logs if any promise is rejected
    });
};

// Call the function to demonstrate Promise.all
promiseAllExample();

//   All promises resolved: [ 'First message', 'Second message', 'Third message' ]

// Function to demonstrate Promise.race
const promiseRaceExample = () => {
  const promise1 = delay("First message", 1000);
  const promise2 = delay("Second message", 500); // This resolves faster
  const promise3 = delay("Third message", 1500);

  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log("Race winner:", result); // Logs the value of the fastest resolved promise
    })
    .catch((error) => {
      console.error("Error:", error); // Logs if the fastest promise is rejected
    });
};

// Call the function to demonstrate Promise.race
promiseRaceExample();
