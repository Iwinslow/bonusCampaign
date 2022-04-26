const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Invitations extends Model {}

Invitations.init(
  {
    // Model attributes are defined here
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    consumed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    receiverId: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "invitations", // We need to choose the model name
  }
);

module.exports = Invitations;
