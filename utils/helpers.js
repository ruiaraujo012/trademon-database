const fs = require("fs");
const colors = require("colors");
const cliP = require("cli-progress");

const multibar = new cliP.MultiBar({
  format: `|${colors.cyan("{bar}")}| {percentage}% || {value}/{total} Chunks`,
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  stopOnComplete: true,
  hideCursor: true,
});

writeFile = (fileName, data) => {
  fs.writeFileSync(
    `./pokemonData/${fileName}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) console.error("err :", err);
    }
  );
};

readFile = (fileName) => {
  const data = fs.readFileSync(`./pokemonData/${fileName}.json`);

  return JSON.parse(data);
};

capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

replaceChar = (s, char, newChar) => {
  if (typeof s !== "string") return "";
  return s.replace(char, newChar);
};

insertQuery = async (client, query) => {
  try {
    await client.query(query);
    console.log("Row(s) inserted successfully.");
  } catch (err) {
    console.error("err :", err);
  }
};

getQuery = async (client, query) => {
  let rows = null;
  try {
    const data = await client.query(query);
    rows = data.rows;
    console.table(rows);
  } catch (err) {
    console.log("err :", err);
  }
  return rows;
};

logInfo = (info) => {
  if (typeof info !== "string") return;
  console.log(`${info}`.dim);
};

module.exports = {
  writeFile,
  readFile,
  capitalize,
  replaceChar,
  insertQuery,
  getQuery,
  logInfo,
};
