/* Feature Request -> 1 :
    Click Event Script:
        - Write a script that adds a click event listener to a button to change the text content of a paragraph.
*/

const button = document.getElementById("changeTextButton");
const paragraph = document.getElementById("textParagraph");

// Add the click event listener to the button
button.addEventListener("click", () => {
  // Change the text content of the paragraph
  paragraph.textContent = "The text has been changed!";
});
