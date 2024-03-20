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
