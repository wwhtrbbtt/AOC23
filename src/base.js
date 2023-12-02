const EventEmitter = require("node:events");
const utils = require("./utils");

module.exports = class BaseSolver extends EventEmitter {
  constructor(day) {
    super();
    this.day = day.replace(".js", "");
    this.data = utils.open(this.day).trim();
    this.log = utils.logger(this.day);
    this.log("Started solving");
  }

  solve() {
    this.emit("result", "not implemented");
  }
};
