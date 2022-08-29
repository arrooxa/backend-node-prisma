const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Back-end Boilerplate",
    description: "IGC Partners",
  },
  host: "localhost:3005",
  schemes: ["http"],
};

const outputFile = "src/swagger-output.json";
const endpointsFiles = ["src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
