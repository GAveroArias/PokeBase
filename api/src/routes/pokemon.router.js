const { Router } = require("express");
const pokemonRouter = Router();

pokemonRouter.get("", (req, res) => {
    res.send("Todos los pokemones");
});

pokemonRouter.get(":id", (req, res) => {
    const { id } = req.params;

    res.send(`Pokemon ${id}`);
});

pokemonRouter.get("/name", (req, res) => {
    const { name } = req.query;
    res.send(`Pokemon ${name}`);
});

pokemonRouter.post("/", (req, res) => {
    res.send("Creando pokemones");
});

module.exports = pokemonRouter;
