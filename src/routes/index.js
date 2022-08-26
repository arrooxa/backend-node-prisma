const express = require("express");
const cors = require("cors");
const auth = require("./auth");
const { errorHandler } = require('src/middlewares/errorHandler');
const defineLogByEnvironment = require("../config/morgan");

module.exports = (app) => {
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(errorHandler);

  defineLogByEnvironment(app);

  app.get("/", (req, res) => res.send({ message: "Hello, World!" }));
  app.use("/auth", auth);
};
