const { Router } = require("express");
const { getAllTypesService } = require("../services/type.service");
const typeRouter = Router();

typeRouter.get("/", async (req, res) => {
  try {
    const types = await getAllTypesService();
    res.json(types);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = typeRouter;
