const { getAllTypesRepository } = require("../repositories/type.repository");

const getAllTypesService = async () => {
  try {
    return await getAllTypesRepository();
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllTypesService };
