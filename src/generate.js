const fs = require("node:fs");
const SESSION = require("../config.json").session;

const BASE_CODE = `
const utils = require("../utils");
module.exports = class Solver extends require("../base") {
  constructor(day) {
    super(day);
  }
  solve() {
    let sum = 0; 
    const lines = this.data.split("\\n")
    lines.forEach()
    // TODO: write code!
    this.emit("result", sum);
  }
};
`;

const main = async (day) => {
  const req = await fetch(`https://adventofcode.com/2023/day/${day}/input`, {
    headers: { cookie: `session=${SESSION}` },
  });
  const data = await req.text();
  if (data.length < 100) throw new Error("Could not get input data");
  fs.writeFileSync(`./src/data/${day}.txt`, data);
  fs.writeFileSync(`./src/solutions/${day}.js`, BASE_CODE);
  console.log(`Done! Generated code for day ${day}`);
};

(async () => {
  const day = process.argv[2];
  if (!parseInt(day)) {
    console.log("ERROR: usage: npm run generate <day>");
  }
  console.log(`Generating code for day ${day}...`);
  await main(day);
})();
