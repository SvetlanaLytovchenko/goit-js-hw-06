function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanChangeColor.textContent = color;
});
