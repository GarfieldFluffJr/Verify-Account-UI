const codes = document.querySelectorAll(".code");
const button = document.querySelector(".enter-btn");

// Makes the first input highlighted
// codes[0].focus();
codes.forEach((code, idx) => {
  // code is the input element, idx is the index number in the array codes.
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // This resets the value of the input box so it can only have 1 digit.
      codes[idx].value = "";
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (e.keyCode === 37) {
      // left arrow
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (e.keyCode === 39) {
      setTimeout(() => codes[idx + 1].focus(), 10);
    }
  });
});
