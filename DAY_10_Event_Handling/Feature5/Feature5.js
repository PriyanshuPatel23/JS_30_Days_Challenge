/* Feature Request -> 5 :
    Event Delegation Script:
        - Write a script that demonstrates event delegation by handling events on dynamically added child elements.
*/

const parent = document.getElementById("parent");
const addItemButton = document.getElementById("addItemButton");

// Function to handle clicks on list items
function handleItemClick(event) {
  if (event.target && event.target.classList.contains("list-item")) {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
}

// Add the event listener to the parent element using event delegation
parent.addEventListener("click", handleItemClick);

// Add an event listener to the button to add new list items
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.className = "list-item";
  newItem.textContent = `New Item ${parent.children.length + 1}`;
  parent.appendChild(newItem);
});
