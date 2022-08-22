const bodyParser = require("body-parser");

const cors = require("cors");

module.exports = (app) => {
  app.use(cors());

  app.use(bodyParser.json());

  app.get("/", (req, res) => res.send({ message: "Hello World!" }));
};
