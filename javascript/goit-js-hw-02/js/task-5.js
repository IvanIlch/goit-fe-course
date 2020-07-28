const checkForSpam = function (message) {
  const normaliseMessage = message.toLowerCase();
  const words = normaliseMessage.split(` `);
  //   console.log(words);
  let booll;
  for (let word of words) {
    if (word.includes("spam") || word.includes("sale")) {
      booll = "true";

      return booll;
    }
    booll = "false";
  }
  return booll;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); //

console.log(checkForSpam("[SPAM] How to earn fast money?"));
