require("dotenv").config();

const express = require("express");

const routes = require("./src/routes");

const app = express();

const port = 3005;

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
