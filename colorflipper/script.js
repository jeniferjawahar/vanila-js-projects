const btn = document.getElementById("flip");

const colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "purple",
];

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 7);
  document.body.style.backgroundColor = colorArray[randomNumber];
});
