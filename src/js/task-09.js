function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", callback);

function callback() {
  let color = getRandomHexColor();
  span.textContent = `- ${color}`;
  body.style.backgroundColor = color;
}
