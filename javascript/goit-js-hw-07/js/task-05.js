const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener(`input`, handleInputChange);

function handleInputChange(event) {
  if (event.target.value.length === 0) {
    outputRef.textContent = "незнайомець";
    return outputRef.textContent;
  } else if (event.target.value.length < 15) {
    return (outputRef.textContent = event.target.value);
  }
}
