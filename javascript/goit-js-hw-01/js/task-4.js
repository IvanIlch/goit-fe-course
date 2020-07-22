const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let amountPerDroid = 0;
let balance;

do {
  amountPerDroid = prompt(`Введіть кількість дроідів`);
  if (amountPerDroid === null) {
    console.log(`Скасовано користувачем!`);
    break;
  } else if (credits < Number(amountPerDroid) * pricePerDroid) {
    console.log(`Недостатньо коштів на рахунку!`);
    break;
  } else if (Number(amountPerDroid) * pricePerDroid) {
    totalPrice = amountPerDroid * pricePerDroid;
    balance = credits - totalPrice;

    console.log(
      `Ви купили ${amountPerDroid} дроїдів, на рахунку залишилося ${balance} кредитів.`
    );
    break;
  }
} while (credits !== "23580");
