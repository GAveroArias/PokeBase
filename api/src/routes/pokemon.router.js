const { Router } = require("express");
const pokemonRouter = Router();
const { Pokemon, Type } = require("../db.js");
const { Op } = require("sequelize");
const {
  getAllPokemonsService,
  getPokemonByIdService,
  getPokemonByNameService,
} = require("../services/pokemon.service.js");

pokemonRouter.get("/", async (req, res) => {
  try {
    const allPokemons = await getAllPokemonsService();

    res.json(allPokemons);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al obtener los pokemons" });
  }
});

pokemonRouter.get(":id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await getPokemonByIdService(id);

    res.send(pokemon);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No se encontro el Pokemon" });
  }
});

pokemonRouter.get("/name", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      res
        .status(400)
        .send("Envie el nombre de un pokemon usando el parametro ?name=");
    } else {
      const transformedName = name.toLowerCase();
      const pokemon = await getPokemonByNameService(transformedName);

      res.json(pokemon);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No se encontro el Pokemon" });
  }
});

pokemonRouter.post("/", async (req, res) => {
  try {
    const pokemon = req.body;
    await createPokemonService(pokemon);

    res.send("Pokemon creado exitosamente");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo crear el Pokemon" });
  }
});

module.exports = pokemonRouter;
