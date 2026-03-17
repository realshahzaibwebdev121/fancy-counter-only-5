const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");

const MAX_VALUE = 5;
const MIN_VALUE = 0;

// Reset
resetButtonE1.addEventListener("click", function () {
  counterValueE1.textContent = MIN_VALUE;
});

// Decrease
decreaseButtonE1.addEventListener("click", function () {
  let currentValue = +counterValueE1.textContent;
  let newValue = currentValue - 1;

  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }

  counterValueE1.textContent = newValue;
});

// Increase (limit = 5)
increaseButtonE1.addEventListener("click", function () {
  let currentValue = +counterValueE1.textContent;
  let newValue = currentValue + 1;

  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }

  counterValueE1.textContent = newValue;
});

// Keyboard control (optional fix)
document.addEventListener("keyup", function (e) {
  let currentValue = +counterValueE1.textContent;

  if (e.key === "ArrowUp") {
    if (currentValue < MAX_VALUE) {
      counterValueE1.textContent = currentValue + 1;
    }
  }

  if (e.key === "ArrowDown") {
    if (currentValue > MIN_VALUE) {
      counterValueE1.textContent = currentValue - 1;
    }
  }
});