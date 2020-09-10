const client = require("./database/db");
require("colors");

const { pokemonNames } = require("./utils/fetchData");

main = async () => {
  console.log("Start Script".cyan.bold.bgGrey);
  try {
    console.log("Connecting to db...".yellow);
    await client.connect();
  } catch (e) {
    console.error("Connection error".red, e.stack);
    process.exit();
  }

  try {
    console.log("Fetching pokemon names...".dim);
    await pokemonNames();
  } catch (e) {
    await client.end();
    console.log("e".red, e);
    process.exit();
  }

  try {
    console.log("Disconnecting from db...".yellow);
    await client.end();
  } catch (e) {
    console.error("Connection error".red, e.stack);
  }

  console.log("End Script".cyan.bold.bgGrey);
};

main();
