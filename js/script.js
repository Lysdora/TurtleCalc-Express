//Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

//I create a variable num1, it stock the question result on number and assign id num1-el
let num1 = prompt("Choose a first number");
num1 = parseInt(num1);
document.getElementById("num1-el").textContent = num1;

//I create a variable num1, it stock the question result on number and assign id num2-el
let num2 = prompt("Choose a second number");
num2 = parseInt(num2);
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sumEl.textContent = num1 + " + " + num2 + " = " + result;
}

function subtract() {
  let result = num1 - num2;
  sumEl.textContent = num1 + " - " + num2 + " = " + result;
}

function divide() {
  let result = num1 / num2;
  sumEl.textContent = num1 + " / " + num2 + " = " + result;
}

function multiply() {
  let result = num1 * num2;
  sumEl.textContent = num1 + " * " + num2 + " = " + result;
}

function reset() {
  num1 = prompt("Choose a first number");
  num1 = parseInt(num1);
  document.getElementById("num1-el").textContent = num1;

  num2 = prompt("Choose a second number");
  num2 = parseInt(num2);
  document.getElementById("num2-el").textContent = num2;

  sumEl.textContent = "Sum: ";
}
