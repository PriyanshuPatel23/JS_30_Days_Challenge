/* Feature Request -> 4 :
    Attribute Modification Script:
        - Create a script that changes the attributes of an HTML element.
*/

const changeAttributes = () => {
  // Select the elements
  const image = document.getElementById("myImage");

  // Change the attributes of the image
  if (image) {
    image.src = "../Assets/images/Morpinch.jpeg"; // Change the src attribute
    image.alt = "New Image"; // Change the alt attribute
    image.width = 300; // Change the width attribute
  }
};

// Add event listener to the button to change attributes when clicked
document
  .getElementById("changeAttributesButton")
  .addEventListener("click", changeAttributes);
