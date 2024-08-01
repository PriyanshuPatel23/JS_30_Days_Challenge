/* Feature Request -> 3 :
    Element Removal Script:
        - Write a script that selects an HTML element and removes it from the DOM.
*/

// Function to remove an element by its ID
const removeElementById = (id) => {
  // Select the element using its ID
  const element = document.getElementById(id);

  // Check if the element exists
  if (element) {
    // Remove the element from the DOM
    element.remove();
  } else {
    console.error("Element not found");
  }
};

// Add event listener to the button to remove the element when clicked
document.getElementById("removeButton").addEventListener("click", () => {
  removeElementById("elementToRemove");
});
