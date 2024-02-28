const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const getAllPokemonsRepository = async () => {
  try {
    return await Pokemon.findAll({
      include: [
        {
          model: Type,
          through: "pokemon_type",
        },
      ],
    });
  } catch (error) {
    console.log(error);

    throw error;
  }
};

const getPokemonByIdRepository = async (id) => {
  try {
    return await Pokemon.findByPk(id, {
      include: [
        {
          model: Type,
          through: "pokemon_type",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPokemonByNameRepository = async (name) => {
  try {
    return await Pokemon.findOne({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: [
        {
          model: Type,
          through: "pokemon_type",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createPokemonRepository = async (pokemon) => {
  try {
    return await Pokemon.create(pokemon);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllPokemonsRepository,
  getPokemonByIdRepository,
  getPokemonByNameRepository,
  createPokemonRepository,
};
