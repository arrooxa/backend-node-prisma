"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Registers extends Model {
    static associate(models) {
      // associate here
    }
  }
  Registers.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Registers",
    }
  );
  return Registers;
};
