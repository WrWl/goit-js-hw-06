function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorName = document.querySelector(".color")
const button = document.querySelector(".change-color")

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor()
}

button.addEventListener("click",changeColor)
