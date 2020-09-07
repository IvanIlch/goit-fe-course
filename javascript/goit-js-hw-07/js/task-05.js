const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener(`input`, handleInputChange);

function handleInputChange(event) {
  outputRef.textContent = event.target.value;
}
