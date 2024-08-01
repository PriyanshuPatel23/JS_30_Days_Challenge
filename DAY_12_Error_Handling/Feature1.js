/* Feature Request -> 1 :
    Basic Error Handling Script:
        - Write a script that demonstrates basic error handling using try-catch and finally blocks.
*/

const riskyOperation = () => {
  // Simulate an error
  throw new Error("An error occurred!");
};

const handleOperation = () => {
  try {
    riskyOperation();
    console.log("Operation succeeded!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Operation completed.");
  }
};

// Call the function
handleOperation();
