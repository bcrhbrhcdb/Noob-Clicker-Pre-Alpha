let clicker = document.querySelector(".img");
clicker.addEventListener("click", function () {
  clicker.classList.add("click-animation");
});

clicker.addEventListener("animationend", function () {
  clicker.classList.remove("click-animation");
});
