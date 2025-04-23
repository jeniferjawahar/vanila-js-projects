const decrease = document.getElementById("decreaseButton");
const increase = document.getElementById("increaseButton");
const display = document.getElementById("displayValue");
const reset = document.getElementById("resetButton");
let count = 0;

decrease.addEventListener("click", () => {
  count = count - 1;
  if (count < 0) {
    display.textContent = 0;
    count = 0;
  } else {
    display.textContent = count;
  }
});

increase.addEventListener("click", () => {
  count = count + 1;
  display.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
