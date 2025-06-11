const OPTIONS = ["rock", "paper", "scissors"];
let computerDecision = "";
let humanDecision = "";
const mainTextContainer = document.querySelector(".main_text");
const startGameContainer = document.querySelector(".start_game");
const buttonsContainer = document.querySelector(".buttons");
const winnerContainer = document.querySelector(".winner");
const bodyContainer = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Start Game?";

startGameContainer.appendChild(button);

button.addEventListener("click", function (e) {
  button.remove();
  startGame();
});

function startGame() {
  const gameText = document.createElement("h2");
  const messages = [
    "Game is about to start...",
    "Get Ready...",
    "Buttons will spawn in ",
    "Rock",
    "Paper",
    "Scissors",
    "Go!",
  ];

  const buttons = ["rock", "paper", "scissors"];
  const buttonDiv = document.createElement("div");
  buttonDiv.style.display = "flex";
  buttonDiv.style.justifyContent = "space-between";
  buttonDiv.style.gap = "10px";
  startGameContainer.appendChild(gameText);
  buttonsContainer.appendChild(buttonDiv);
  messages.forEach((message, index) => {
    if (index === 6) {
      setTimeout(() => {
        buttons.forEach((txt, idx) => {
          const newButton = document.createElement("button");
          newButton.textContent = txt;
          newButton.addEventListener("click", function (e) {
            humanDecision = idx;
            computerDecision = getComputerChoice();
            printWinner();
          });
          buttonDiv.appendChild(newButton);
        });
      }, index * 1000);
    }
    setTimeout(() => {
      gameText.textContent = message;
    }, index * 1000);
  });
}

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)];
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === 0 && computerChoice === 2) {
    return true;
  } else if (humanChoice === 1 && computerChoice === 0) {
    return true;
  } else if (humanChoice === 2 && computerChoice === 1) {
    return true;
  } else {
    return false;
  }
}

function printWinner() {
  let winnerText = document.createElement("h3");
  if (getWinner(humanDecision, computerDecision)) {
    winnerText.textContent = "Winner Winner Chicken Dinner";
  } else {
    winnerText.textContent = "Loser Loser, Chicken Bruser";
  }

  winnerContainer.appendChild(winnerText);

  const replayButton = document.createElement("button");

  replayButton.addEventListener("click", function (e) {
    replay();
  });
  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  replayButton.textContent = "Play Again?";

  newDiv.appendChild(replayButton);
  bodyContainer.appendChild(newDiv);
}

function replay() {
  startGameContainer.innerHTML = "";
  buttonsContainer.innerHTML = "";
  winnerContainer.innerHTML = "";
  startGame();
}
