const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const clicks = document.getElementById("clicks");
const clickBtn = document.getElementById("clickBtn");
const errorText = document.getElementById("error");

clickBtn.addEventListener("click", () => {
  clicks.innerText = (parseInt(clicks.innerText) + 1).toString();
  if (parseInt(clicks.innerText) >= 10) {
    upgrade1.style.display = "block";
  } else {
    upgrade1.style.display = "none";
  }
  if (parseInt(clicks.innerText) >= 50) {
    upgrade2.style.display = "block";
  } else {
    upgrade2.style.display = "none";
  }
});

// see if player bought upgrade
upgrade1.addEventListener("click", () => {
  if (parseInt(clicks.innerText) >= 2) {
    clicks.innerText = (parseInt(clicks.innerText) - 2).toString();
  } else {
    errorText.textContent = "You do not have enough clicks to buy this upgrade";
  }
});
