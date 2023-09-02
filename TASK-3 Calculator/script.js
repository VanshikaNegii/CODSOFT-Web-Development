// Get display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";
let operator = "";
let firstOperand = 0;

function updateDisplay() {
  display.textContent = currentInput;
}

buttons.forEach((button) => {       //Lgitisteners
  button.addEventListener("click", () => {
    const buttonText = button.textContent;


    if (!isNaN(buttonText) || buttonText === ".") {
      if (currentInput === "0") {
        currentInput = buttonText;
      } else {
        currentInput += buttonText;
      }
      updateDisplay();
    }

    if (["+", "-", "*", "/"].includes(buttonText)) {
      operator = buttonText;
      firstOperand = parseFloat(currentInput);
      currentInput = "0";
    }

    // Handle clear
    if (buttonText === "C") {
      currentInput = "0";
      operator = "";
      firstOperand = 0;
      updateDisplay();
    }

    if (buttonText === "=") {
      const secondOperand = parseFloat(currentInput);
      switch (operator) {
        case "+":
          currentInput = (firstOperand + secondOperand).toString();
          break;
        case "-":
          currentInput = (firstOperand - secondOperand).toString();
          break;
        case "*":
          currentInput = (firstOperand * secondOperand).toString();
          break;
        case "/":
          currentInput = (firstOperand / secondOperand).toString();
          break;
      }
      updateDisplay();
      operator = "";
      firstOperand = 0;
    }

    if (["log", "sin", "cos", "√"].includes(buttonText)) {      //few trigonometric calculation
      switch (buttonText) {
        case "log":
          currentInput = Math.log10(parseFloat(currentInput)).toString();
          break;
        case "sin":
          currentInput = Math.sin(parseFloat(currentInput)).toString();
          break;
        case "cos":
          currentInput = Math.cos(parseFloat(currentInput)).toString();
          break;
        case "√":
          currentInput = Math.sqrt(parseFloat(currentInput)).toString();
          break;
      }
      updateDisplay();      
    }
  });
});
