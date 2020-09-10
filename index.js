const client = require("./database/db");

const { pokemonNames } = require("./utils/fetchData");

main = async () => {
  console.log("Start");
  try {
    client.connect();
    await pokemonNames();
  } catch (e) {
    console.log("e", e);
    process.exit();
  }
  client.end();
  console.log("End");
};

main();
