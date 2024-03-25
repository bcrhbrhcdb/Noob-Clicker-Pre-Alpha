const clickerOne = document.getElementById("img");
const clickerTwo = document.getElementById("upgrade1-secret");
const amountOfParts = document.getElementById("aop");
const switchClicker = document.getElementById("switch-clicker");
const upgrades = [
  {
    name: "noobling",
    cost: 25,
    gives: 2,
    owned: 0,
  },
  {
    name: "nooblit",
    cost: 50,
    gives: 12,
    owned: 0,
  },
  {
    name: "noob",
    cost: 100,
    gives: 20,
    owned: 0,
  },
  {
    name: "debug",
    cost: 1,
    gives: 0,
    owned: 0,
  },
];

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

let totalAmountOfParts = 0;

// function to check and show upgrades
function checkUpgrades() {
  upgrades.forEach((upgrade) => {
    let upgradeElem = document.getElementById(upgrade.name);
    if (totalAmountOfParts >= upgrade.cost) {
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

// make parts go up!
clickerOne.addEventListener("click", () => {
  amountOfParts.textContent++;
  totalAmountOfParts++;
  checkUpgrades(); // check upgrades after each click
});

clickerTwo.addEventListener("click", () => {
  amountOfParts.textContent++;
  totalAmountOfParts++;
  checkUpgrades(); // check upgrades after each click
});

window.onload = function () {
  // initial check for upgrades
  checkUpgrades();
};
let clicker = document.querySelector(".img");
clicker.addEventListener("click", function () {
  clicker.classList.add("click-animation");
});
clicker.addEventListener("animationend", function () {
  clicker.classList.remove("click-animation");
});
let clicker2 = document.getElementById("upgrade1-scret");
clicker2.addEventListener("click", function () {
  clicker2.classList.add("click-animation");
});
clicker2.addEventListener("animationend", function () {
  clicker2.classList.remove("click-animation");
});
