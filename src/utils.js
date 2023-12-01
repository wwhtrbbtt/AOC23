const fs = require("node:fs");

const numberToWords = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

module.exports = {
  open: (day) => fs.readFileSync(`./src/data/${day}.txt`, "utf-8"),
  solved: () => fs.readdirSync("./src/solutions/"),
  logger:
    (day) =>
    (...args) =>
      console.log(`[${day}]`, ...args),
  numberToWords,
};
