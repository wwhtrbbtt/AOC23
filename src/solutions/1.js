const utils = require("../utils");
module.exports = class Solver extends require("../base") {
  constructor(day) {
    super(day);
  }
  solve() {
    let sum = 0;
    this.data.split("\n").forEach((row) => {
      const matches = row.match(/[0-9]/g);
      if (!matches) return;
      sum += parseInt(matches.at(0) + matches.at(-1));
    });
    this.emit("resultA", sum);

    Object.entries(utils.numberToWords).forEach(([k, v]) => {
      this.data = this.data.replaceAll(k, `${k}${v}${k}`);
    });

    sum = 0;
    this.data.split("\n").forEach((row) => {
      const matches = row.match(/[0-9]/g);
      if (!matches) return;
      sum += parseInt(matches.at(0) + matches.at(-1));
    });
    this.emit("resultB", sum);
  }
};
