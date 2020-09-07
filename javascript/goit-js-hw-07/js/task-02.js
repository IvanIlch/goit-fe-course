const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsRef = document.querySelector("#ingredients");

const createElemWithText = (ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  return listRef;
};

const ingredientCards = ingredients.map((ingredient) =>
  createElemWithText(ingredient)
);

ingredientsRef.append(...ingredientCards);
