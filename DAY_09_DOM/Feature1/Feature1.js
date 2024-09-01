/* Feature Request -> 1 :
    Text Content Manipulation Script:
        - Write a script that selects an HTML element by its ID and changes its text content.
*/

const changeContent = () => {
  // Select the element by its ID
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");

  // Change the content of the selected elements
  titleElement.textContent = "New Title";
  descriptionElement.textContent = "This is the new description.";
};
