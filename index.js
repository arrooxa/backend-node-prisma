require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./src/routes/index");
const envConfig = require("./src/config/env.config");
const logger = require("./src/config/logger");

const port = 3005;

routes(app);

app.listen(port, () => logger.info(`Servidor rodando na porta ${port}`));

module.exports = app;
