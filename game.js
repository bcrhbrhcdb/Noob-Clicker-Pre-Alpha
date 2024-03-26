const clickerOne = document.getElementById("img");
const clickerTwo = document.getElementById("upgrade1-secret");
const amountOfParts = document.getElementById("aop");
const switchClicker = document.getElementById("switch-clicker");

let totalAmountOfParts = 0;

let upgrades = [
  { name: "noobling", cost: 25, gives: 2, owned: 0 },
  { name: "nooblit", cost: 50, gives: 12, owned: 0 },
  { name: "noob", cost: 100, gives: 20, owned: 0 },
  { name: "debug", cost: 1, gives: 0, owned: 0 },
];

// Function to save current game state
// Function to save current game state
function saveGame() {
  const gameData = {
    totalAmountOfParts: totalAmountOfParts,
    upgrades: upgrades,
    amountOfParts: amountOfParts.textContent, // Save the amountOfParts text content
  };
  localStorage.setItem("gameData", JSON.stringify(gameData));
}

// Function to load saved game state
function loadGame() {
  const savedGameData = JSON.parse(localStorage.getItem("gameData"));
  console.log(savedGameData);
  if (savedGameData !== null) {
    totalAmountOfParts = savedGameData.totalAmountOfParts;
    upgrades = savedGameData.upgrades;
    amountOfParts.textContent = savedGameData.amountOfParts;
    // Restore the amountOfParts text content
    checkUpgrades(); // Add this line to check upgrades after the game is loaded
  }
}

switchClicker.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    if (clickerOne.style.display == "none") {
      clickerOne.style.display = "block";
      clickerTwo.style.display = "none";
    } else {
      clickerOne.style.display = "none";
      clickerTwo.style.display = "block";
    }
  }
});

function checkUpgrades() {
  upgrades.forEach((upgrade) => {
    let upgradeElem = document.getElementById(upgrade.name);
    if (totalAmountOfParts >= upgrade.cost || upgrade.owned > 0) {
      if (upgradeElem.style.display === "none") {
        upgradeElem.style.display = "block";
        setTimeout(function () {
          upgradeElem.style.animation = "slide-in 5s forwards";
        }, 50);
      }
      console.log(
        `Upgrade available: ${upgrade.name}. Total parts: ${totalAmountOfParts}, cost: ${upgrade.cost}`,
      );
    } else {
      upgradeElem.style.display = "none";
      upgradeElem.style.animation = "";
    }
  });
}

clickerOne.addEventListener("click", () => {
  amountOfParts.textContent++;
  totalAmountOfParts++;
  checkUpgrades();
});

clickerTwo.addEventListener("click", () => {
  amountOfParts.textContent++;
  totalAmountOfParts++;
  checkUpgrades();
});

window.onload = function () {
  loadGame();
  checkUpgrades();
  setInterval(saveGame, 30000);
};

let clicker = document.querySelector(".img");
clicker.addEventListener("click", function () {
  clicker.classList.add("click-animation");
});
clicker.addEventListener("animationend", function () {
  clicker.classList.remove("click-animation");
});
let clicker2 = document.getElementById("upgrade1-secret");
clicker2.addEventListener("click", function () {
  clicker2.classList.add("click-animation");
});
clicker2.addEventListener("animationend", function () {
  clicker2.classList.remove("click-animation");
});
