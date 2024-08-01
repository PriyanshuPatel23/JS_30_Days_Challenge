/* Feature Request -> 3 :
    Promise Error Handling Script:
        - Write a script that handles errors in promises using '.catch()' and try-catch within async functions.
*/

// Function that returns a Promise that randomly resolves or rejects
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected.");
      }
    }, 1000);
  });
};

// Handling promise rejection using .catch()
randomPromise()
  .then((result) => {
    console.log(result); // Log success message
  })
  .catch((error) => {
    console.error("Error caught with .catch():", error); // Log error message
  });

// Promise resolved successfully!

// Async function to handle the promise
const handlePromiseAsync = async () => {
  try {
    const result = await randomPromise();
    console.log(result); // Log success message
  } catch (error) {
    console.error("Error caught with try-catch:", error); // Log error message
  }
};

// Call the async function
handlePromiseAsync();
