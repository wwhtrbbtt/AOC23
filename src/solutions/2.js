const utils = require("../utils");
module.exports = class Solver extends require("../base") {
  constructor(day) {
    super(day);
  }
  solve() {
    let sumA = 0;
    let sumB = 0;

    const lines = this.data.split("\n");
    lines.forEach((l, i) => {
      const draws = l
        .split(": ")[1]
        .split(";")
        .map((e) => e.split(","))
        .flat()
        .map((e) => e.trim());

      const highest = {
        r: 0,
        b: 0,
        g: 0,
        sum: () => highest.r * highest.b * highest.g,
      };

      let valid = true;
      draws.forEach((d) => {
        const num = parseInt(d.split(" ")[0]);
        if (d.endsWith("red")) {
          if (num > highest.r) highest.r = num;
          if (num > 12) valid = false;
        }
        if (d.endsWith("green")) {
          if (num > highest.g) highest.g = num;
          if (num > 13) valid = false;
        }
        if (d.endsWith("blue")) {
          if (num > highest.b) highest.b = num;
          if (num > 14) valid = false;
        }
      });

      if (valid) sumA += i + 1;
      sumB += highest.sum();
    });

    this.emit("resultA", sumA);
    this.emit("resultB", sumB);
  }
};
