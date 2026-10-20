const textInput = document.getElementById("text-input");
const countEl = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  const currCount = textInput.value.length;
  countEl.textContent = `Character Count: ${currCount}/50`;

  if (currCount >= 50) {
    textInput.value = textInput.value.slice(0, 50);
    countEl.style.color = "red";
    return;
  } else {
    countEl.style.color = "#f5efeb";
  }
});
