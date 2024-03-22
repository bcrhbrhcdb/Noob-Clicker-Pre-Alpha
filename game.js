let gameState = JSON.parse(localStorage.getItem("gameState")) || {
  amountOfParts: 0,
  totalAmountOfParts: 0,
};

function saveGame() {
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

function updateDisplay() {
  let amountOfParts = document.getElementById("aop");
  amountOfParts.innerHTML = gameState.amountOfParts;
}

function clickHandler() {
  gameState.amountOfParts++;
  gameState.totalAmountOfParts++;
  updateDisplay();
  saveGame();
}

if (localStorage.getItem("gameState")) {
  // If there's saved game data, load it
  updateDisplay();
}

const switchClicker = document.getElementById("upgrade1-secret-2");
let clickerOne = document.getElementById("img");
let clickerTwo = document.getElementById("upgrade1-secret");

switchClicker.addEventListener("click", function () {
  if (clickerOne.style.display === "none") {
    clickerOne.style.display = "block";
    clickerTwo.style.display = "none";
  } else {
    clickerOne.style.display = "none";
    clickerTwo.style.display = "block";
  }
});

clickerOne.addEventListener("click", clickHandler);
clickerTwo.addEventListener("click", clickHandler);
