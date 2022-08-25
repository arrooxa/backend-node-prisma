const db = require("../models");
const Sequelize = require("sequelize");
const errorHandler = require("../helpers/errorHandler");
const logger = require("../config/logger");

const RegisterUser = async (req, res, next) => {
  res.send({ message: "oi" });
};

module.exports = { RegisterUser };
