const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-output.json");

const auth = require("./auth");
const user = require("./user");
const { errorTranslator } = require('src/middlewares/errorTranslator');
const defineLogByEnvironment = require("../config/morgan");

module.exports = (app) => {
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(errorTranslator);

  defineLogByEnvironment(app);

  app.use("/auth", auth);
  app.use("/user", user);
};
