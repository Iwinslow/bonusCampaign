const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Wallets extends Model {}

Wallets.init(
  {
    // Model attributes are defined here
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "wallets", // We need to choose the model name
  }
);

module.exports = Wallets;
