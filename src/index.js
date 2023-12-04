const utils = require("./utils");
const solved = utils.solved();

const log = utils.logger("main");

const run = (s) => {
  log("Running", s);
  const solver = new (require(`./solutions/${s}`))(s);
  solver.on("result", (result) => log(`Solution: ${result}`));
  solver.on("resultA", (result) => log(`Solution A: ${result}`));
  solver.on("resultB", (result) => log(`Solution B: ${result}`));
  solver.solve();
};

// for (s of solved) run(s);
run(solved.at(-1));
