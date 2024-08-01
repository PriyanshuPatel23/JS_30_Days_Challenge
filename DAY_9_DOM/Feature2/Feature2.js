/* Feature Request -> 2 :
    Element Creation Script:
        - Create a script that demonstrates creating a new 'div' element and appending it to the body.
*/

const newDiv = document.createElement("div");

// Set some content or properties for the new div
newDiv.textContent = "Hello, I am a new div!";
newDiv.style.color = "blue"; // Optional: Set text color
newDiv.style.fontSize = "20px"; // Optional: Set font size

// Append the new div to the body
document.body.appendChild(newDiv);
