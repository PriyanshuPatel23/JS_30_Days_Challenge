/* Feature Request -> 3 :
    Async/Await Script:
        - Write a script that uses async/await to handle promises and includes error handling with try-catch.
*/

// Function that returns a promise which resolves after a given time
const delay = (message, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message); // Resolve the promise with the message after `ms` milliseconds
    }, ms);
  });
};

// Async function to handle promises
const handlePromises = async () => {
  try {
    // Wait for the promise to resolve and get the message
    const firstMessage = await delay("First message", 1000);
    console.log(firstMessage); // Log the resolved message

    const secondMessage = await delay("Second message", 1500);
    console.log(secondMessage); // Log the next resolved message

    // Simulate an error with a rejected promise (uncomment to test error handling)
    // await delay('This will fail', 500, true); // This line will cause an error

    const thirdMessage = await delay("Third message", 1000);
    console.log(thirdMessage); // Log another resolved message
  } catch (error) {
    // Handle any error that occurs during the promise resolution
    console.error("Error:", error);
  }
};

// Call the function to handle promises
handlePromises();
