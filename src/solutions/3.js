const toCheck = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const testData = `
12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56`;

const utils = require("../utils");
module.exports = class Solver extends require("../base") {
  constructor(day) {
    super(day);
    this.data = testData.trim();
  }
  solve() {
    const lines = this.data.split("\n");
    const lineLen = lines[0].length;

    let numbers = [];
    let sumB = 0;
    let numberIndex = 0;

    for (let x = 0; x < lines.length; x++) {
      for (let y = 0; y < lineLen; y++) {
        if (!numbers[numberIndex]) numbers[numberIndex] = "";
        const at = lines[x][y];
        if (!utils.isNum(at)) {
          if (numbers[numberIndex]) numberIndex++;
          if (at !== "*") continue;
        }

        // check if it touches something else

        if (!utils.isNum(at) && at !== "*") continue;

        // PART 1
        if (at !== "*") {
          let touches = false;
          toCheck.forEach((check) => {
            if (touches) return;
            const a = lines?.[x + check[0]]?.[y + check[1]];
            if (!a) return;
            touches = !utils.numbers.includes(a) && a !== ".";
          });
          numbers[numberIndex] += at;
          if (touches) numbers[numberIndex] += "t";
        } else {
          // PART 2
          let touchingNums = [];
          toCheck.forEach((check) => {
            const a = lines?.[x + check[0]]?.[y + check[1]];
            if (!a) return;
            if (utils.isNum(a)) {
              let after = lines[x + check[0]]
                .slice(y + check[1] + 1)
                .match(/[0-9]/g)?.[0];
              if (!utils.isNum(after?.[0])) after = "";
              let before = lines[x + check[0]]
                .slice(0, y + check[1] - 1)
                .match(/[0-9]/g)
                ?.at(-1);
              if (!utils.isNum(before?.at(-1))) before = "";
              console.log(before);
              touchingNums.push(parseInt([...before, a, ...after].join("")));
            }
          });
          if (!touchingNums.length === 2) return;
          const res = touchingNums[0] * touchingNums[1];
          console.log(`${touchingNums[0]} * ${touchingNums[1]} -> ${res}`);
          sumB += res;
        }
      }
    }

    const sumA = numbers
      .filter((e) => e.includes("t"))
      .map(utils.extractNums)
      .reduce(utils.sum, 0);

    this.emit("resultA", sumA);
    this.emit("resultB", sumB);
  }
};
