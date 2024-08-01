/* Activity -> 1 : Basic Error Handling with Try-Catch */

// Task_1 - Write a function that intetionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
  throw new Error("An error is thrown");
}

const handleError = () => {
  try {
    throwError();
  } catch (error) {
    console.log("Intentionally Thrown error : ", error.message);
  }
};

handleError();

// Task_2 - Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divisor(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  } else {
    const ans = num1 / num2;
    console.log(ans);
    return ans;
  }
}

const handleDivisor = (num1, num2) => {
  try {
    divisor(num1, num2);
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

handleDivisor(10, 0);

handleDivisor(20, 10);

/* Activity -> 2 : Finally Block */

// Task_3 - Write a script that includes a try-catch block and a finally-block. Log messages in the try-catch and finally blocks to observe the execution flow.

const flowObservation = () => {
  try {
    console.log("In try Block");

    throw new Error("Intentional Error thrown");
  } catch (error) {
    console.log("In catch Block");
    console.log("Error : ", error);
  } finally {
    console.log("In Finally Block");
  }
};

flowObservation();

/* Activity -> 3 : Custom Error Objects */

// Task_4 - Create a custom error class that extends the buit-in Error class.Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const throwCustomError = () => {
  throw new CustomError("This is a custom error message.");
};

const handleCustomError = () => {
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("In catch Block");
      console.log("Custom Error : ", error.message);
    } else {
      console.log("Unexpected Error : ", error);
    }
  } finally {
    console.log("Code reached in finally block");
  }
};

handleCustomError();

// Task_5 - Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateInput = (input) => {
  if (input === "" || input === undefined) {
    throw new validationError("Input cannot be empty");
  } else {
    console.log(input);
    return input;
  }
};

const handleInputValidation = (input) => {
  try {
    validateInput(input);
  } catch (error) {
    if (error instanceof validationError) {
      console.log("In catch Block");
      console.log("Validation Error : ", error.message);
    } else {
      console.log("Unexpected Error : ", error);
    }
  } finally {
    console.log("Code reached in finally block");
  }
};

handleInputValidation();

/* Activity -> 4 : Error Handling in Promises */

// Task_6 - Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message to the console.

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    // Simulate a random outcome
    const outcome = Math.random() > 0.4; // 40% chance to resolve or reject

    setTimeout(() => {
      if (outcome) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected.");
      }
    }, 1000); // Simulate some asynchronous operation
  });
};

// Call the function and handle rejection using .catch()
randomPromise()
  .then((result) => {
    console.log(result); // Log success message
  })
  .catch((error) => {
    console.error("Error:", error); // Log error message
  });

// Task_7 - Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and logs the error message.

function random() {
  return new Promise((resolve, reject) => {
    const number = Math.random();
    if (number < 0.4) {
      reject(number);
    } else {
      resolve(number);
    }
  });
}

const handleRandom = async () => {
  try {
    const random1 = await random();
    console.log(random1);
  } catch (error) {
    console.log("Error", error);
  }
};

handleRandom();

// Task_9 - Use the 'fetch' API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const fetchingData = async () => {
  try {
    const fetching = await fetch("https://invalid-url.com");
    if (!fetching.ok) {
      throw new Error("Error new Thrown");
    }
    const data = await fetching.json();
    console.log("Data fetched : ", data);
  } catch (error) {
    console.log("error message", error);
  }
};

fetchingData();
