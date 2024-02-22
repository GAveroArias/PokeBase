const { Router } = require("express");
const typeRouter = Router();

typeRouter.get("/", (req, res) => {
    res.send("Todos los tipos");
});

module.exports = typeRouter;
