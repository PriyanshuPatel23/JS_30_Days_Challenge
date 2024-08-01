/* Feature Request -> 4 :
    Fetch Error Handling Script:
        - Create a script that handles errors when using the 'fetch' API to request data from invalid URLs.
*/
// Function to fetch data from an invalid URL
const fetchDataWithCatch = () => {
  fetch("https://invalid-url.example.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error caught with .catch():", error.message);
    });
};

// Call the function
fetchDataWithCatch();

// Error caught with .catch(): fetch failed

// Async function to fetch data from an invalid URL
const fetchDataWithTryCatch = async () => {
  try {
    const response = await fetch("https://invalid-url.example.com");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error caught with try-catch:", error.message);
  }
};

// Call the async function
fetchDataWithTryCatch();
