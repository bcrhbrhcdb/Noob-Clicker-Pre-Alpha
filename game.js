document.addEventListener("DOMContentLoaded", function () {
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

  function saveGame() {
    const gameData = {
      totalAmountOfParts: totalAmountOfParts,
      upgrades: upgrades,
      amountOfParts: amountOfParts.textContent,
    };
    localStorage.setItem("gameData", JSON.stringify(gameData));
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
  }

  function loadGame() {
    const savedGameData = JSON.parse(localStorage.getItem("gameData"));
    if (savedGameData !== null) {
      totalAmountOfParts = savedGameData.totalAmountOfParts;
      upgrades = JSON.parse(localStorage.getItem("upgrades"));
      amountOfParts.textContent = savedGameData.amountOfParts;
      checkUpgrades();
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
      if (
        totalAmountOfParts >= upgrade.cost &&
        upgradeElem.style.display !== "block"
      ) {
        upgradeElem.style.display = "block";
        setTimeout(function () {
          upgradeElem.style.animation = "slide-in 5s forwards";
        }, 50);
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

  let clicker = document.querySelector("#img");
  clicker.addEventListener("click", function () {
    clicker.classList.add("click-animation");
  });
  clicker.addEventListener("animationend", function () {
    clicker.classList.remove("click-animation");
  });

  let clicker2 = document.querySelector("#upgrade1-secret");
  clicker2.addEventListener("click", function () {
    clicker2.classList.add("click-animation");
  });
  clicker2.addEventListener("animationend", function () {
    clicker2.classList.remove("click-animation");
  });

  loadGame();
  checkUpgrades();
  setInterval(saveGame, 3000);

  const resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
      if (confirm("Are you REALLY sure?")) {
        amountOfParts.textContent = 0;
        upgrades.forEach((upgrade) => (upgrade.owned = 0));
        totalAmountOfParts = 0;
        checkUpgrades();
        saveGame();
      }
    }
  });
  console.log(setInterval(saveGame, 3000));
  console.log(checkUpgrades);
  console.log(loadGame);
});
