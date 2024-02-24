const { Type } = require("../db");

const getAllTypesRepository = async () => {
  try {
    return await Type.findAll();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTypesByIdRepository = async (ids) => {
  try {
    return await Type.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllTypesRepository,
  getTypesByIdRepository,
};
