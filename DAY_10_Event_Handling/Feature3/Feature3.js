/* Feature Request -> 3 :
    Keyboard Events Script:
        - Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
*/

const inputField = document.getElementById("inputField");
const displayParagraph = document.getElementById("displayParagraph");

// Add the keydown event listener to the input field
inputField.addEventListener("keydown", (event) => {
  console.log(`Key down: ${event.key}`); // Log the key pressed
});

// Add the keyup event listener to the input field
inputField.addEventListener("keyup", () => {
  displayParagraph.textContent = `Current input value: ${inputField.value}`; // Display the current input value
});
