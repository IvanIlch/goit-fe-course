let cost;
const country = prompt("Введіть країну доставки");

switch (country.toLowerCase()) {
  case "китай":
    cost = 100;
    console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
    break;

  case "чилі":
    cost = 250;
    console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
    break;

  case "австралія":
    cost = 170;
    console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
    break;
  case "індія":
    cost = 80;
    console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
    break;
  case "ямайка":
    cost = 120;
    console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);
    break;

  default:
    console.log("У вашій країні доставка недоступна");
}
