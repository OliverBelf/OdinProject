const container = document.querySelector("#container");

const btn = document.querySelector("#addItem");
const input = document.querySelector("#newItem");

btn.addEventListener("click", addItem);

function addItem(e) {
  const newContent = document.createElement("div");
  newContent.style.display = "flex";
  newContent.style.columnGap = "8px";

  const list = document.createElement("ul");
  const listItem = document.createElement("li");
  listItem.textContent = input.value;
  list.appendChild(listItem);

  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newButton.onclick = function () {
    newContent.remove();
  };

  newContent.appendChild(list);
  newContent.appendChild(newButton);

  container.appendChild(newContent);
}
