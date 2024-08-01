/* Feature Request -> 5 :
    Event Handling Script:
        - Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
*/

const handleClick = (event) => {
  // Change text content of the clicked element
  event.target.textContent = "Clicked!";

  // Change background color of the clicked element
  event.target.style.backgroundColor = "grey";
};

// Select the elements and add event listeners
document.getElementById("box1").addEventListener("click", handleClick);
document.getElementById("box2").addEventListener("click", handleClick);
document.getElementById("box3").addEventListener("click", handleClick);
