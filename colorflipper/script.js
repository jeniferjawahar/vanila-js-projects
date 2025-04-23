const btn = document.getElementById("flip");

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

btn.addEventListener("click", () => {
  let color = generateRandomColor();
  document.body.style.backgroundColor = color;
});
