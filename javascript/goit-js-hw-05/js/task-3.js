class Storage {
  constructor([...items]) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(addItem) {
    this.items.push(addItem);
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (item === this.items[i]) {
        this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
