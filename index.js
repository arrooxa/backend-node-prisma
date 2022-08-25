require("dotenv").config();

const express = require("express");
const app = express();

const routes = require("./routes/index");

const port = 3005;

routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
