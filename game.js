document.addEventListener("DOMContentLoaded", function () {
  let gameState = JSON.parse(localStorage.getItem("gameState")) || {
    amountOfParts: 0,
    totalAmountOfParts: 0,
    upgrades: [
      {
        name: "noobling",
        cost: 25,
        owned: 25,
        produces: 1,
      },
      {
        name: "nooblet",
        cost: 50,
        owned: 50,
        produces: 5,
      },
      {
        name: "noobling",
        cost: 100,
        owned: 100,
        produces: 10,
      },
    ],
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
    console.log(gameState.totalAmountOfParts);
    updateDisplay();
    saveGame();
  }

  const switchClicker = document.getElementById("upgrade1-secret-2");
  let clickerOne = document.getElementById("img");
  let clickerTwo = document.getElementById("upgrade1-secret");

  if (switchClicker && clickerOne && clickerTwo) {
    switchClicker.addEventListener("click", function () {
      if (confirm("Are you sure?")) {
        if (clickerOne.style.display === "none") {
          clickerOne.style.display = "block";
          clickerTwo.style.display = "none";
        } else {
          clickerOne.style.display = "none";
          clickerTwo.style.display = "block";
        }
      }
    });
  } else {
    console.log(
      "SwitchClicker, clickerOne and/or clickerTwo elements do not exist.",
    );
  }

  const reset = document.getElementById("reset");
  if (reset) {
    reset.addEventListener("click", () => {
      if (confirm("Are you sure?")) {
        if (confirm("Are you REALLY sure? Click ok if yes.")) {
          gameState.amountOfParts = 0;
          gameState.totalAmountOfParts = 0;
          gameState.upgrades = [];
          updateDisplay();
        }
      }
    });
  }
  //upgrade time!
  gameState.upgrades.forEach((upgrade) => {
    const upgradeElement = document.querySelector(
      `.upgrade[data-name='${upgrade.name}']`,
    );

    if (upgradeElement) {
      upgradeElement.addEventListener("click", () => {
        if (gameState.amountOfParts >= upgrade.cost) {
          gameState.amountOfParts -= upgrade.cost;
          upgrade.cost *= 1.25; // assuming the cost doubles every time
          upgrade.owned += 1; // increment the quantity of this upgrade
          updateDisplay();
        }
      });
    }
  });

  clickerOne.addEventListener("click", clickHandler);
  clickerTwo.addEventListener("click", clickHandler);

  if (localStorage.getItem("gameState")) {
    updateDisplay();
  }
});
