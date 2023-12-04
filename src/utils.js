const fs = require("node:fs");

const extractNums = (str) => {
  const matches = str?.match(/[0-9]/g);
  if (!matches) return 0;
  return parseInt(matches.join(""));
};

module.exports = {
  open: (day) => fs.readFileSync(`./src/data/${day}.txt`, "utf-8"),
  solved: () => fs.readdirSync("./src/solutions/"),
  logger:
    (day) =>
    (...args) =>
      console.log(`[${day}]`, ...args),
  numberToWords: {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  },
  numbers: "0123456789",
  extractNums: extractNums,
  sum: (partialSum, a) => partialSum + a,
  isNum: (str) => {
    const p = extractNums(str);
    return p === parseInt(str);
  },
};
