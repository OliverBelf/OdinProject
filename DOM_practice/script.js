const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a glorious text-content!";
container.appendChild(content);

const newContent = document.createElement("p");
newContent.textContent = "Hi I'm red";
container.appendChild(newContent);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const pinky = document.createElement("div");
pinky.style.backgroundColor = "pink";

const pink_h1 = document.createElement("h1");
pink_h1.textContent = "I'm in a div";
const pink_p = document.createElement("p");
pink_p.textContent = "ME TOO!";

pinky.appendChild(pink_h1);
pinky.appendChild(pink_p);

container.appendChild(pinky);

const btn = document.querySelector("#btn");

let val = 1;

btn.addEventListener("click", function (e) {
  if (val == 1) {
    e.target.style.background = "blue";
    val = 0;
  } else {
    e.target.style.background = "white";
    val = 1;
  }
});
