/* Feature Request -> 3 :
    Third-Party Module Script:
        - Write a script that installs, imports and uses functions from third-party modules like 'lodash' and 'axios'.
*/

import _ from "lodash";
import axios from "axios";

// Using lodash to manipulate an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = _.shuffle(numbers);
console.log("Original array :", numbers);
console.log("Shuffled array :", shuffledNumbers);

// Using axios to make an HTTP GET request
async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Data from API:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
