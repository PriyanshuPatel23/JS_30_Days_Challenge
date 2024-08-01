/* Activity -> 1 : Understanding Promises */

// Task_1 - Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This message should be resolved after 2 seconds");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

// Task_2 - Create a promise that rejects with an error message after a 2-second timeout and handle the error using '.catch()'.

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This error should be rejected after 2 seconds");
  }, 2000);
});

myPromise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

/* Activity -> 2 : Chaining Promises */

// Task_3 - Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetch = (step) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolve from ${step}`);
    }, 1000 * step);
  });

fetch(1)
  .then((data1) => {
    console.log("From step 1", data1);
    return fetch(2);
  })
  .then((data2) => {
    console.log("From step 2", data2);
    return fetch(3);
  })
  .then((data3) => {
    console.log("From step 3", data3);
    return fetch(3);
  })
  .catch((error) => {
    console.log("Error : ", error);
  });

/* Activity -> 3 : Using Async/Await */

// Task_4 - Write an async function that waits for a promise to resolve and then logs the resolved value.

function fetch2(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolve from ${step}`);
    }, 1000 * step);
  });
}

async function asyncFunction() {
  const result = await fetch2(1);
  console.log("From async function", result);
}

asyncFunction();

// Task_5 - Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetch3(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error in Fetching data"));
    }, 1000 * step);
  });
}

async function asyncFunction2() {
  try {
    const result = await fetch3(2);
    console.log("From async function", result);
  } catch (error) {
    console.error("error : ", error.message);
  }
}

asyncFunction2();

/* Activity -> 4 : Fetching data from an API */

// Task_6 - Use the 'fetch' API to get data from a public API and log the response data to the console using promises.

const apiUrl = "https://freeapi.gerasim.in/api/Annadata/GetAdminDasboardData";

function fetchApi() {
  setTimeout(
    () =>
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Error : ", error);
          return null;
        }),
    3000
  );
}

fetchApi();

// Task_6 - Use the 'fetch' API to get data from a public API and log the response data to the console using Async/Await.

async function fetchApi1() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error : ", error);
  }
}

fetchApi1();

/* Activity -> 5 : Concurrent Promises */

// Task_8 - Use the 'Promise.all' to wait for multiple promises to resolve and then log all their values.

// URLs of the public APIs
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to fetch data from a given URL
const fetchData3 = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  });

// Use Promise.all to wait for multiple fetch promises
Promise.all(apiUrls.map((url) => fetchData3(url)))
  .then((results) => {
    results.forEach((data, index) => {
      console.log(`Data from URL ${index + 1}:`, data);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// Task_9 - Use the 'Promise.race' to log the value of the first promise that resolves among multiple promises.

// URLs of the public APIs
const apiUrls1 = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to fetch data from a given URL
const fetchData4 = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  });

// Use Promise.race to log the first resolved promise
Promise.race(apiUrls1.map((url) => fetchData4(url)))
  .then((result) => {
    console.log("First resolved data:", result);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
