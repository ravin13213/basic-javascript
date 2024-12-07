// Get references to the DOM elements
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("output");

// Function to convert string to number and handle errors
function convertToNumber() {
  try {
    // Get the input value
    const inputValue = numberInput.value;

    // Convert the input value to a number
    const number = Number(inputValue);

    // Check if the conversion was successful
    if (isNaN(number)) {
      throw new Error("The input is not a valid number.");
    }

    // Display the result
    output.innerHTML = `Converted number: ${number}`;
  } catch (error) {
    // Handle any errors that occur
    output.innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
  } finally {
    console.log("Conversion attempt completed.");
  }
}

// Add event listener to the button
convertButton.addEventListener("click", convertToNumber);
