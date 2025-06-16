toolbar = document.querySelector(".topRow");
display = document.querySelector(".display");
buttons = document.querySelector(".buttons");

let answer = 0;
let operatorPress = 0;
let symbol_press = [];

displayText = document.createElement("h2");
displayText.textContent = answer;
display.appendChild(displayText);
const buttonRows = 5;
const buttonColumns = 4;
const buttonLayout = [
  ["C", "", "<-", "="],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["", "0", ".", "/"],
];

const dontAppend = ["C", "", "=", "<-"];
const operators = ["*", "+", "-", "/"];
for (let i = 0; i < buttonRows; i++) {
  for (let j = 0; j < buttonColumns; j++) {
    str = buttonLayout[i][j];
    const newButton = document.createElement("button");
    newButton.textContent = str;
    newButton.style.minWidth = "150px";
    newButton.style.minHeight = "100px";
    if (operators.includes(str)) {
      newButton.addEventListener("click", () => opperatorCall());
    }
    if (!dontAppend.includes(str)) {
      newButton.addEventListener("click", () => appendStr(buttonLayout[i][j]));
    } else if (str === "=") {
      newButton.addEventListener("click", () => showAnswer());
    } else if (str === "<-") {
      newButton.addEventListener("click", () => removeLatest());
    } else {
      newButton.addEventListener("click", () => clearContent());
    }
    buttons.appendChild(newButton);
  }
}

function displayArr() {
  displayText.textContent = symbol_press.join("");
}

function appendStr(str) {
  if (operators.includes(str) || str == ".") {
    if (
      operators.includes(symbol_press[symbol_press.length - 1]) ||
      symbol_press[symbol_press.length - 1] == "."
    ) {
      symbol_press[symbol_press.length - 1] = str;
    } else {
      symbol_press.push(str);
    }
  } else {
    symbol_press.push(str);
  }
  displayArr();
}

function showAnswer() {
  answer = math.evaluate(symbol_press.join(""));
  symbol_press = [answer];
  displayText.textContent = answer;
}

function clearContent() {
  symbol_press = [];
  answer = 0;
  displayText.textContent = answer;
  operatorPress = 0;
}

function removeLatest() {
  symbol_press = symbol_press.slice(0, -1);
  displayArr();
}

function opperatorCall() {
  if (operatorPress != 0) {
    showAnswer();
  } else {
    operatorPress = 1;
  }
  console.log(operatorPress);
}
