const axios = require("axios");
const { Sequelize } = require("sequelize");
const {
  getAllPokemonsRepository,
  getPokemonByIdRepository,
  getPokemonByNameRepository,
  createPokemonRepository,
} = require("../repositories/pokemon.repository");
const { getTypesByIdRepository } = require("../repositories/type.repository");

const getAllPokemonsService = async () => {
  try {
    const allPokemonsFromDB = await getAllPokemonsRepository();

    const allPokemonsFromApi = await axios.get(
      `${process.env.POKE_API_URL}/pokemon?limit=2000`
    );

    const apiResults = allPokemonsFromApi.data.results;

    return {
      pokemonsFromDB: allPokemonsFromDB,
      pokemonsFromApi: apiResults,
    };
  } catch (error) {
    throw error;
  }
};

const getPokemonByIdService = async (id) => {
  try {
    let pokemon;

    if (Sequelize.Validator.isUUID(id)) {
      pokemon = await getPokemonByIdRepository(id);
    } else {
      const pokemonFromApi = await axios.get(
        `${process.env.POKE_API_URL}/pokemon/${id}`
      );

      if (pokemonFromApi) {
        pokemon = pokemonFromApi.data;
      }
    }
    return pokemon;
  } catch (error) {
    throw error;
  }
};

const getPokemonByNameService = async (name) => {
  try {
    let pokemon;

    pokemon = await getPokemonByNameRepository(name);

    if (!pokemon) {
      try {
        const pokemonFromApi = await axios.get(
          `${process.env.POKE_API_URL}/pokemon/${name}`
        );

        if (pokemonFromApi) {
          pokemon = pokemonFromApi.data;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    return pokemon;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createPokemonService = async (pokemon) => {
  try {
    const { types } = pokemon.types;

    const newPokemon = await createPokemonRepository(pokemon);

    if (types && types.length) {
      const dbTypes = await getTypesByIdRepository(types);

      // añadir los tipos a la tabla intermedia
      newPokemon.setTypes(dbTypes);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getPokemonByIdService,
  getAllPokemonsService,
  getPokemonByNameService,
  createPokemonService,
};
