const switchClicker = document.getElementById("upgrade1-secret-2");
switchClicker.addEventListener("click", () => {
  const clickerOne = document.getElementById("img");
  const clickerTwo = document.getElementById("upgrade1-secret");
  clickerOne.style.display = "none"; // or 'block', depends on your needs
  clickerTwo.style.display = "block";
  if (switchClicker) {
    switchClicker.addEventListener("click", () => {
      clickerOne.style.display = "block";
      clickerTwo.style.display = "none;";
    });
  }
});
