const utils = require("./utils");
const solved = utils.solved();

const log = utils.logger("main");

for (s of solved) {
  log("Running", s);
  const solver = new (require(`./solutions/${s}`))(s);
  solver.on("result", (result) => log(`Solution: ${result}`));
  solver.on("resultA", (result) => log(`Solution A: ${result}`));
  solver.on("resultB", (result) => log(`Solution B: ${result}`));
  solver.solve();
}
