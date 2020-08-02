const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  const values = Object.values(employees);

  let max = values[0];
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    if (value === max) {
      return key;
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
