/* Feature Request -> 2 :
    Mouse Events Script:
        - Create a script that handles mousehover and mouseout events to change the background color of an element.
*/

const colorChangeElement = document.getElementById("colorChangeElement");

// Add the mouseover event listener to the element
colorChangeElement.addEventListener("mouseover", () => {
  colorChangeElement.style.backgroundColor = "lightgreen"; // Change background color on hover
});

// Add the mouseout event listener to the element
colorChangeElement.addEventListener("mouseout", () => {
  colorChangeElement.style.backgroundColor = "lightblue"; // Reset background color when mouse leaves
});
