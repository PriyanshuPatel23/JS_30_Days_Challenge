/* Feature Request -> 4 :
    API Fetch Script:
        - Create a script that fetches data from a public API using both promises and async/await and logs the response data.
*/

// Function to fetch data from a public API using promises
const fetchDataWithPromises = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Fetch data from the API
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log("Data fetched with promises:", data); // Log the fetched data
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // Handle any errors
    });
};

// Call the function to fetch data using promises
fetchDataWithPromises();

//   Data fetched with promises: {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

// Async function to fetch data from a public API using async/await
const fetchDataWithAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ); // Fetch data from the API
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Parse the JSON from the response
    console.log("Data fetched with async/await:", data); // Log the fetched data
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};

// Call the function to fetch data using async/await
fetchDataWithAsyncAwait();
