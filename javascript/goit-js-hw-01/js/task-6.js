let input;
let total = 0;

do {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
} while (true);

console.log(`Загальна сума чисел дорівнює ${total}`);
