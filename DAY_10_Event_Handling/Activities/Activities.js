/* Activity -> 1 : Basic Event Handling */

// Task_1 - Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById("btn");
const para = document.getElementById("t");

button.addEventListener(
  "click",
  (changeText = () => {
    para.innerHTML = "New Text is added";
  })
);

// Task_2 - Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById("t1");
const button1 = document.getElementById("btn1");

button1.addEventListener(
  "dblclick",
  (imageToggle = () => {
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  })
);

/* Activity -> 2 : Mouse Events */

// Task_3 - Add a mousehover event listener to an element that changes its background color.

const heading = document.getElementById("t2");

heading.addEventListener(
  "mouseover",
  (changeColor = () => {
    heading.style.backgroundColor = "red";
  })
);

// Task_4 - Add a mouseout event listener to an element that resets its background color.

heading.addEventListener(
  "mouseout",
  (resetColor = () => {
    heading.style.backgroundColor = "white";
  })
);

/* Activity -> 3 : Keyboard Events */

// Task_5 - Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.getElementById("t3");

input.addEventListener("keydown", () => {
  console.log(`Key Pressed : ${event.key}`);
});

// Task_6 - Add a keyup event listener to an input field that displays the current value in a paragraph.

const input1 = document.getElementById("t4");
const para1 = document.getElementById("para1");

input1.addEventListener("keyup", () => {
  para1.textContent = `Current Value: ${input1.value}`;
});

/* Activity -> 4 : Form Events */

// Task_7 - Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("myForm");

// Add the submit event listener to the form using an arrow function
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Create a FormData object to capture the form data
  const formData = new FormData(form);

  // Log the form data to the console
  for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }
});

// Task_8 - Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const paragraph2 = document.getElementById("para3");
const select = document.getElementById("t5");

select.addEventListener("change", () => {
  paragraph2.innerHTML = `Current value : ${select.value}`;
});

/* Activity -> 5 : Event Delegation */

// Task_9 - Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("myList");

// Add the click event listener to the parent element using event delegation
list.addEventListener("click", (event) => {
  // Check if the clicked element is an <li> item
  if (event.target && event.target.tagName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

// Task_10 - Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");
const addButton = document.getElementById("addButton");

// Function to handle clicks on dynamically added buttons
function handleButtonClick(event) {
  if (event.target && event.target.classList.contains("dynamic-button")) {
    console.log(`Clicked button: ${event.target.textContent}`);
  }
}

// Add the event listener to the parent element using event delegation
parent.addEventListener("click", handleButtonClick);

// Add an event listener to the button to add new child elements
addButton.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.className = "dynamic-button";
  newButton.textContent = "New Button";
  parent.appendChild(newButton);
});
