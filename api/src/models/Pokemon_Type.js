const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("pokemon_type", {
        pokemon_id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        type_id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
    });
};
