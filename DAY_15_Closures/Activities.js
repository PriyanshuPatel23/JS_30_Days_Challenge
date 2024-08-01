/* Activity -> 1 : Understanding Closures */

// Task_1 - Write a function that returns another function, where the inner function accesses a variable from a outer function's scope. Call the inner function and log the result.

function outerFunction() {
  let out = "Hello World!";

  function innerFunction() {
    return out;
  }

  return innerFunction();
}

const myInnerFunction = outerFunction();
console.log(myInnerFunction);

// Task_2 - Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
  let counter = 0;

  const add = () => {
    counter++;
  };

  const getCounter = () => {
    return counter;
  };

  return {
    add,
    getCounter,
  };
}

const myCounter = counter();

myCounter.add();
myCounter.add();

console.log(myCounter.getCounter());

/* Activity -> 2 : Practical Closures */

// Task_3 - Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

const randId = () => {
  let id = 0;

  return () => {
    id++;
    return `unique-id-${id}`;
  };
};

const generateUniqueId = randId();
console.log(generateUniqueId());
console.log(generateUniqueId());

// Task_4 - Create a closure that captures a user's name and returns a function that greets the user by name.

function demo(Fname) {
  return function (Lname) {
    return `Hello ${Fname} ${Lname}!`;
  };
}

const greetJohn = demo("John");
console.log(greetJohn("Doe"));

/* Activity -> 3 : Closures in Loops */

// Task_5 - Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function functionArray() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    let fn = function () {
      console.log(i);
    };
    functions.push(fn);
  }
  return functions;
}

const createFunction = functionArray();

createFunction[0]();
createFunction[1]();
createFunction[2]();
createFunction[3]();
createFunction[4]();

/* Activity -> 4 : Module Pattern */

// Task_6 - Use closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.

function list() {
  let items = [];
  return {
    addItem(item) {
      items.push(item);
    },
    removeItem(item) {
      items = items.filter((i) => i !== item);
    },
    getItems() {
      return items;
    },
  };
}

const myList = list();

myList.addItem("Item 1");
myList.addItem("Item 2");

console.log(myList.getItems());

myList.removeItem("Item 1");

console.log(myList.getItems());

/* Activity -> 5 : Memoization */

// Task_7 - Write a function that memoizes the result of another function. Use a closure to store the results of previos computations.

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const slowFunction = (num) => {
  console.log(`Computing ${num}`);
  return num * num;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
console.log(memoizedFunction(6));
console.log(memoizedFunction(6));

// Task_8 - Create a memoized version of a function that calculates the factorial of a number.

const memoize1 = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const factorial = memoize1((n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(7));
