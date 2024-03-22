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

clickerOne.addEventListener("click", () => {
  let amountOfParts = document.getElementById("aop");
  let totalAmountOfParts;
  amountOfParts.innerHTML++;
  totalAmountOfParts++;
});
clickerTwo.addEventListener("click", () => {
  let amountOfParts = document.getElementById("aop");
  let totalAmountOfParts;
  amountOfParts.innerHTML++;
  totalAmountOfParts++;
});
