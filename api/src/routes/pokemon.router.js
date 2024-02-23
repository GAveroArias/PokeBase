const { Router } = require("express");
const pokemonRouter = Router();
const { Pokemon } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

pokemonRouter.get("/", async (req, res) => {
    const allPokemons = await Pokemon.findAll({});
    res.json(allPokemons);
});

async function getPokemonDetails(id) {
    try {
        const pokemonFromDB = await Pokemon.findByPk(id); // Intento buscar el Pokemon en la base de datos

        if (pokemonFromDB) {
            // Si el Pokemon se encuentra en la base de datos, obtener detalles del tipo
            const typeDetails = await Type.findById(pokemonFromDB.typeId); // Suponiendo que existe un modelo Type con un método findById
            return {
                ...pokemonFromDB.toJSON(),
                type: typeDetails, // Agregar detalles del tipo al objeto del Pokemon
            };
        } else {
            // Si el Pokemon no se encuentra en la base de datos, que llame a la API para obtener detalles
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            if (!response.ok) {
                throw new Error("Respuesta no válida desde la API");
            }
            const pokemonData = await response.json();
            return pokemonData;
        }
    } catch (error) {
        console.error("Error al obtener detalles del Pokemon:", error);
        throw error;
    }
}

pokemonRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const pokemon = await getPokemonDetails(id);
        if (!pokemon) {
            res.send("Pokemon no encontrado");
        } else {
            res.json(pokemon);
        }
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
});

//console.log(getPokemonDetails(1));

pokemonRouter.get("/name", (req, res) => {
    const { name } = req.query;
    res.send(`Pokemon ${name}`);
});

pokemonRouter.post("/", async (req, res) => {
    //obtener datos del pokemon por body
    //generar UUID opcional y agregarlo al objeto
    //guardar pokemon en DB
    const { name, image, health, attack, defense, speed, height, weight } =
        req.body;

    const UUID = uuidv4();

    const pokemon = {
        UUID,
        name,
        image,
        health,
        attack,
        defense,
        speed,
        height,
        weight,
    };
    try {
        console.log(pokemon);
        await Pokemon.create(pokemon);
        res.send("Pokemon creado");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = pokemonRouter;
