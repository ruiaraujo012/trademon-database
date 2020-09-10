const axios = require("axios");

const { API_ENDPOINT } = require("./constants");

// Fetch pokemon names
pokemonNames = async () => {
  console.log("Fetching pokemon names...");
  try {
    const { data } = await axios.get(
      `${API_ENDPOINT}/api/v1/pokemon_names.json`
    );

    console.log("data", data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  pokemonNames,
};
