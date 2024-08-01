/* Feature Request -> 2 :
    Custom Error Script:
        - Create a script that defines and throws custom errors, handling them with try-catch blocks.
*/

// Define a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function that throws a custom error
const throwCustomError = () => {
  throw new CustomError("This is a custom error.");
};

// Function to handle the custom error
const handleError = () => {
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a CustomError:", error.message);
    } else {
      console.error("Caught an unexpected error:", error.message);
    }
  } finally {
    console.log("Error handling completed.");
  }
};

// Call the function
handleError();
