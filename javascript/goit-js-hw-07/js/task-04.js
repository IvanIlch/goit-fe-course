const spanValueRef = document.querySelector("#value");
let counterValue = Number(spanValueRef.textContent);
const decrementRef = document.querySelector(`button[data-action="decrement"]`);
const incrementRef = document.querySelector(`button[data-action="increment"]`);

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", incremen);

function incremen() {
  counterValue += 1;
  return (spanValueRef.textContent = counterValue);
}
function decrement() {
  counterValue -= 1;
  return (spanValueRef.textContent = counterValue);
}
