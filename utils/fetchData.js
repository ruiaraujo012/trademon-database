const axios = require("axios");

const { API_ENDPOINT } = require("./constants");
const { writeFile, logInfo } = require("./helpers");

// Fetch pokemon names
pokemonNames = async () => {
  try {
    const { data } = await axios.get(
      `${API_ENDPOINT}/api/v1/pokemon_names.json`
    );

    writeFile("pokemonNames", data);
    logInfo("File 'pokemonNames' created");

    // console.log("data", data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  pokemonNames,
};
