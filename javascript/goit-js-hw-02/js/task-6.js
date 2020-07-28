let input;
const numbers = [];
let total = 0;
let inputNumber;

for (let i = 0; (i += 1); ) {
  input = prompt("Введіть число");
  if (input === null) {
    alert("Відмінено користувачем");
    for (const number of numbers) {
    }
    break;
  } else if (true === isNaN(input)) {
    alert("Це не число");
    continue;
  } else;

  inputNumber = Number(input);
  numbers.push(inputNumber);
  total += inputNumber;
  console.log(numbers);

  console.log(total);
}
