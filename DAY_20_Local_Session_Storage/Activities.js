/* Activity -> 1 : Understanding LocalStorage */

// Task_1 - Write a script to save a string value to 'localStorage' and retrive it. Log the retrived value.

// Save a string value to localStorage
const saveToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
  console.log(`Saved value: ${value}`);
};

// Retrieve the string value from localStorage
const getFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  console.log(`Retrieved value: ${value}`);
  return value;
};

// Usage example
const key = "myKey";
const value = "Hello, world!";

// Save the value
saveToLocalStorage(key, value);

// Retrieve the value
getFromLocalStorage(key);

// Task_2 - Write a script to save an object to 'localStorage' by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save an object to localStorage

const saveObjectToLocalStorage = (key, value) => {
  const jsonvalue = JSON.stringify(value);
  localStorage.setItem(key, jsonvalue);
  console.log(`Saved object: ${jsonvalue}`);
};

const getObjectFromLocalStorage = (key) => {
  const jsonValue = localStorage.getItem(key);
  const value = JSON.parse(jsonValue);
  console.log(`Retrieved object: ${JSON.stringify(value)}`);
  return value;
};

const key1 = "Mykey1";
const obj = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

saveObjectToLocalStorage(key1, obj);

getObjectFromLocalStorage(key1);

/* Activity -> 2 : Using LocalStorage */

// Task_3 - Create a simple form that saves user input (e.g., name and email) to 'localStorage' when submitted. Retrieve and display the saved data on page load.

document.addEventListener("DOMContentLoaded", () => {
  const SavedContent = document.getElementById("savedContent");
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  if (name && email) {
    SavedContent.innerHTML = `Name: ${name} & Email: ${email}`;
  } else {
    SavedContent.innerHTML = `No data Saved in yet`;
  }

  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Update displayed saved data
    SavedContent.textContent = `Name: ${name}, Email: ${email}`;

    // Clear the form
    form.reset();
  });
});

// Task_4 - Write a script to remove an item from 'localStorage'. Log the 'localStorage' content before and after removal.

document.addEventListener("DOMContentLoaded", () => {
  const localContent = () => {
    console.log("Current LocalStorage Content: ");
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      const value = localStorage.getItem(key);
      console.log(`${key}=${value}`);
    }
  };
  // Remove an item from localStorage
  const removeContent = (key) => {
    console.log(`Removing ${key}`);
    localStorage.removeItem(key);
  };

  localStorage.setItem("name", "Priyanshu");
  localStorage.setItem("age", "21");

  console.log("Before removal:");
  localContent();

  removeContent("name");

  console.log("After removal:");
  localContent();
});

/* Activity -> 3 : Understanding SessionStorage */

// Task_5 - Write a script to save a string value to 'sessionStorage' and retrive it. Log the retrived value.

document.addEventListener("DOMContentLoaded", () => {
  const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value);
    console.log(`Saved value: ${value}`);
  };

  const getSessionStorage = (key) => {
    const value = sessionStorage.getItem(key);
    console.log(`Retrieved value: ${value}`);
    return value;
  };

  const key2 = "mykey3";
  const value2 = "Hello, world!";

  setSessionStorage(key2, value2);
  getSessionStorage(key2);
});

// Task_6 - Write a script to save an object to 'sessionStorage' by converting it to a JSON string. Retrieve and parse the object, then log it.

document.addEventListener("DOMContentLoaded", () => {
  const setSessionObject = (key, value) => {
    const jsonValue = JSON.stringify(value);
    sessionStorage.setItem(key, jsonValue);
    console.log(`Saved object: ${jsonValue}`);
  };

  const getSessionObject = (key) => {
    const jsonValue = sessionStorage.getItem(key);
    if (jsonValue) {
      const value = JSON.parse(jsonValue);
      console.log(`Retrieved object: ${JSON.stringify(value)}`);
      return value;
    } else {
      console.log("No object found");
      return null;
    }
  };

  const key3 = "mykey4";
  const obj2 = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };

  setSessionObject(key3, obj2);
  getSessionObject(key3);
});

/* Activity -> 4 : Using SessionStorage */

// Task_7 - Create a simple form that saves user input (e.g., name and email) to 'sessionStorage' when submitted. Retrieve and display the saved data on page load.

document.addEventListener("DOMContentLoaded", () => {
  const sessionContent = document.getElementById("sessionContent");
  const name1 = document.getElementById("name1");
  const email1 = document.getElementById("email1");

  if (name1 && email1) {
    sessionContent.innerHTML = `Name: ${name1.value} & Email: ${email1.value}`;
  } else {
    sessionContent.innerHTML = `No data saved in yet`;
  }

  const form1 = document.getElementById("form1");
  form1.addEventListener("submit", (event) => {
    event.preventDefault();

    const name1 = document.getElementById("name1").value;
    const email1 = document.getElementById("email1").value;

    sessionStorage.setItem("name1", name1);
    sessionStorage.setItem("email1", email1);

    sessionContent.textContent = `Name: ${name1}, Email: ${email1}`;

    form1.reset();
  });
});

// Task_8 - Write a script to remove an item from 'sessionStorage'. Log the 'sessionStorage' content before and after removal.

document.addEventListener("DOMContentLoaded", () => {
  const loadContent = () => {
    console.log("Current SessionStorage Content: ");
    for (let index = 0; index < sessionStorage.length; index++) {
      const key = sessionStorage.key(index);
      const value = sessionStorage.getItem(key);
      console.log(`${key}=${value}`);
    }
  };

  const removeItem = (key) => {
    console.log(`Removing ${key}`);
    sessionStorage.removeItem(key);
  };

  console.log("Before removing session");
  loadContent();

  removeItem("name");

  console.log("After removing session");
  loadContent();
});

/* Activity -> 5 : Comparing LocalStorage and SessionStorage */

// Task_9 - Write a function that accepts a key and a value, and saves the value to both 'localStorage' and 'sessionStorage'. Retrieve and log the values from both storage mechanisms.
// Function to save and retrieve values from localStorage and sessionStorage

const saveAndRetrieve = (key, value) => {
  // Save the value to localStorage and sessionStorage
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  console.log(
    `Saved value "${value}" to both localStorage and sessionStorage with key "${key}".`
  );

  // Retrieve the value from localStorage
  const localStorageValue = localStorage.getItem(key);
  console.log(`Retrieved from localStorage: ${localStorageValue}`);

  // Retrieve the value from sessionStorage
  const sessionStorageValue = sessionStorage.getItem(key);
  console.log(`Retrieved from sessionStorage: ${sessionStorageValue}`);
};

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  // Save and retrieve a value
  saveAndRetrieve("exampleKey", "exampleValue");
});

// Task_10 - Write a function that clears all data from both 'localStorage' and 'sessionStorage'. Verify that both storages are empty.

// Function to clear all data from localStorage and sessionStorage
const clearAllStorage = () => {
  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  console.log("Cleared all data from localStorage and sessionStorage.");

  // Verify that localStorage is empty
  console.log("localStorage content after clearing:");
  if (localStorage.length === 0) {
    console.log("localStorage is empty.");
  } else {
    console.log("localStorage is not empty.");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  }

  // Verify that sessionStorage is empty
  console.log("sessionStorage content after clearing:");
  if (sessionStorage.length === 0) {
    console.log("sessionStorage is empty.");
  } else {
    console.log("sessionStorage is not empty.");
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
  }
};

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  // Clear all storage and verify
  clearAllStorage();
});
