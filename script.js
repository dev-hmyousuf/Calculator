// Get the display element
const display = document.getElementById("display");

// Function to append characters to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
  try {
    const result = eval(display.value); // Using eval() for simplicity (not recommended for production)
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}