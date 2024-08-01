/* Feature Request -> 4 :
    Form Events Script:
        - Create a script that handles form submission and change events on a select dropdown.
*/

const form = document.getElementById("myForm");
const selectDropdown = document.getElementById("mySelect");
const formResult = document.getElementById("formResult");
const selectedOption = document.getElementById("selectedOption");

// Handle form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Display a message indicating that the form has been submitted
  formResult.textContent = "Form submitted successfully!";
});

// Handle change event on the select dropdown
selectDropdown.addEventListener("change", () => {
  // Get the selected value from the dropdown
  const selectedValue = selectDropdown.value;
  // Display the selected value in the paragraph
  selectedOption.textContent = `Selected option: ${selectedValue}`;
});
