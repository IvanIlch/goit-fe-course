const controlRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

controlRef.addEventListener("input", onInput);

function onInput() {
  spanRef.style.fontSize = `${controlRef.value} px`;
}
