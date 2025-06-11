const container = document.querySelector(".container");
const toolBar = document.querySelector(".toolbar");
const clearButton = document.createElement("button");
const popOver = document.querySelector("#popover");
const popOverButton = document.createElement("button");
const applyButton = document.querySelector("#apply");

const widthInput = document.querySelector("#width");
const columnsInput = document.querySelector("#columns");
const rowsInput = document.querySelector("#rows");

popOverButton.textContent = "Settings";
clearButton.textContent = "Clear Grid";

clearButton.addEventListener("click", clearContainer);
popOverButton.addEventListener("click", (event) => {
  popOver.showPopover();
});
applyButton.addEventListener("click", applyGrid);

toolBar.appendChild(clearButton);
toolBar.appendChild(popOverButton);

let TOTALWIDTH = 960;
let ROWS = 16;
let COLUMNS = 16;
addGrid();

function addGrid() {
  for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const gridDiv = document.createElement("div");
      gridDiv.style.minWidth = `${TOTALWIDTH / ROWS}px`;
      gridDiv.style.minHeight = `${TOTALWIDTH / COLUMNS}px`;
      gridDiv.style.borderColor = "black";
      gridDiv.style.borderWidth = "1px";
      gridDiv.style.borderStyle = "solid";

      gridDiv.addEventListener("mouseover", hoverEffect);
      container.appendChild(gridDiv);
    }
  }
}

function hoverEffect(e) {
  // e.target.style.backgroundColor = "purple";
  e.target.style.backgroundColor = getRandomColor();
  e.target.style.opacity = getDarkness() / 100;
}

let darkness = 101;

function getDarkness() {
  darkness -= 1;
  return darkness;
}

function clearContainer() {
  container.innerHTML = "";
  addGrid();
}

function applyGrid() {
  setGrid(rowsInput.value, columnsInput.value, widthInput.value);
  clearContainer();
}
let colors = ["purple", "green", "yellow", "blue", "black", "brown"];
function getRandomColor() {
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
}

function setGrid(rows, cols, width) {
  ROWS = rows;
  COLUMNS = cols;
  TOTALWIDTH = width;
}
