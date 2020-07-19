const ADMIN_PASSWORD = "jqueryismyjam";
let message;

do {
  message = prompt(`Введіть пароль`);

  if (message === null) {
    console.log(`Скасовано користувачем`);
    break;
  } else if (message.toLowerCase() === "jqueryismyjam") {
    console.log("Пароль вірний");
    break;
  } else console.log(`Пароль не вірний`);
} while (ADMIN_PASSWORD !== "jqueryismyjam");
