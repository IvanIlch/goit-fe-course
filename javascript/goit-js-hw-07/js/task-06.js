const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("focus", (event) => {
  event.target.classList.remove("valid", "invalid");
});
inputRef.addEventListener("blur", blured);

function blured(event) {
  const evTarg = event.target;
  if (Number(evTarg.dataset.length) === evTarg.value.length) {
    return evTarg.classList.add("valid");
  }
  return evTarg.classList.add("invalid");
}
