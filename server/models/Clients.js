const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Clients extends Model {}

Clients.init(
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,

      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "clients", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
