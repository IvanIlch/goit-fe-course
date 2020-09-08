const boxRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls>input");
const renderRef = document.querySelector(`button[data-action="render"]`);
const destroyRef = document.querySelector(`button[data-action="destroy"]`);

const targetValueRef = (event) => {
  console.log(event.target.value);
  event.target.value;
};

inputRef.addEventListener("input", targetValueRef);
renderRef.addEventListener("click", createBoxes);
destroyRef.addEventListener("click", () => {
  boxRef.innerHTML = "";
});

function createBoxes() {
  const amount = Number(inputRef.value);
  const arr = [];
  for (let index = 0; index < amount; index++) {
    function createOneBox() {
      const newBoxRef = document.createElement("div");
      let width = 30 + index * 10;
      let height = 30 + index * 10;
      const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      newBoxRef.style.width = `${width}px`;
      newBoxRef.style.height = `${height}px`;
      newBoxRef.style.backgroundColor = `rgb(${r},${g},${b})`;
      console.log(boxRef);
      return newBoxRef;
    }
    arr.push(createOneBox());
    boxRef.append(...arr);
  }
  return boxRef;
}
