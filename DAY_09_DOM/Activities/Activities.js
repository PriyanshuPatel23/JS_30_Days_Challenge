/* Activity -> 1 : Selecting and Manipulating Elements */

// Task_1 - Select an HTML element by its ID and change its next content.

function changeContent() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  title.innerHTML = "New Title";
  description.innerHTML = "New Description";
}

// Task_2 - Select an HTML element by its class and change its background color.

const changeColor = () => {
  const elements = document.querySelectorAll(".Color");
  elements.forEach((element) => {
    element.style.backgroundColor = "red";
  });
};

/* Activity -> 2 : Creating and Appending Elements */

// Task_3 - Create a new 'div' element with some text content and append it to the body.

const newDiv = document.createElement("div");

// Add text content to the new 'div'
newDiv.textContent = "This is a new div element added to the body.";

// Optionally, you can add some styles to the new 'div'
newDiv.style.backgroundColor = "lightyellow";
newDiv.style.padding = "10px";
newDiv.style.margin = "10px";
newDiv.style.border = "1px solid #ccc";

// Append the new 'div' to the body
document.body.appendChild(newDiv);

// Task_4 - Create a new 'li' element and add it to an existing 'ul' list.

const newLi = document.createElement("li");
newLi.innerHTML = "New LI Added";

const ulElement = document.querySelector("ul");

if (ulElement) {
  ulElement.appendChild(newLi);
} else {
  console.log("no ul found");
}

/* Activity -> 3 : Removing Elements */

// Task_5 - Select an HTML element and remove it from the DOM.

function Remove(params) {
  const elementToRemove = document.getElementById("remove");

  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
  } else {
    console.log("element not found");
  }
}

// Task_6 - Remove the last child of a specific HTML element.

const removeLastChild = () => {
  const parent = document.querySelector("#removeLast");

  if (parent) {
    const lastchild = parent.lastElementChild;

    if (lastchild) {
      lastchild.remove();
    } else {
      console.log("No element found");
    }
  } else {
    console.log("No last parent found");
  }
};

/* Activity -> 4 : Modifying Attributes and Classes */

// Task_7 - Select an HTML element and change one of it's attributes (e.g., 'src' of an 'img' tag).

const image = document.getElementsByTagName("img");
image[0].style.display = "block";

const changeImage = () => {
  const image = document.getElementsByTagName("img");
  image[0].style.display = "block";
  if (image) {
    image[0].src = "../Assets/images/Morpinch.jpeg";
  } else {
    console.log("NO img found");
  }
};

// Task_8 - Add and remove a CSS class to/from an HTML element.

// Function to add the 'highlight' class

const addStyle = () => {
  const element = document.getElementById("addStyle");
  if (element) {
    element.classList.add("highlight");
  } else {
    console.log("Not Found");
  }
};

const removeStyle = () => {
  const element = document.getElementById("addStyle");
  if (element) {
    element.classList.remove("highlight");
  } else {
    console.log("Not Found");
  }
};

/* Activity -> 5 : Event Handling */

// Task_9 - Add a click event listener to a button that changes the text content of a paragraph.

const changeText = () => {
  const paragraph = document.getElementById("para");
  if (paragraph) {
    paragraph.textContent = "New Text Changed";
  } else {
    console.log("para not found");
  }
};

const setupEventListener = () => {
  const button = document.getElementById("changeTextPara");
  if (button) {
    button.addEventListener("click", changeText);
  } else {
    console.log("element not found");
  }
};

setupEventListener();

// Task_10 - Add a mousehover event listener to an element that changes its border color.

const mouseOver = () => {
  const element = document.getElementById("borderclr");
  if (element) {
    element.style.borderColor = "red";
    element.style.borderWidth = "2px";
    element.style.borderStyle = "solid";
  } else {
    console.log("No element found");
  }
};

const mouseOut = () => {
  const element = document.getElementById("borderclr");
  if (element) {
    element.style.border = "none";
  } else {
    console.log("No element found");
  }
};

const borderEventListener = () => {
  const element = document.getElementById("borderclr");
  if (element) {
    element.addEventListener("mouseover", mouseOver);
    element.addEventListener("mouseout", mouseOut);
  } else {
    console.log("no event can put");
  }
};

borderEventListener();
