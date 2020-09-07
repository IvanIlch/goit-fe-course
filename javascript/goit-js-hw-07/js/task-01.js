const categorRef = document.querySelectorAll("li.item");
console.log(`У списку ${categorRef.length} категорії.`);

const listRef = categorRef.forEach((list) =>
  console.log(
    "Категорія:",
    list.children[0].textContent,
    "   Кількість елементів: ",
    list.children[1].children.length
  )
);
