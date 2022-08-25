require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./src/routes/index");
const envConfig = require("./src/config/env.config");

const port = 3005;

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
