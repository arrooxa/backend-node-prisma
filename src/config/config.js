require("dotenv").config();

module.exports = {
  development: {
    host: process.env.DEV_DATABASE_URL,
    dabase: process.env.DEV_DATABASE_NAME,
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.DEV_DATABASE_PASSWORD,
    dialect: "mysql",
  },
  production: {
    host: process.env.PROD_DATABASE_URL,
    dabase: process.env.PROD_DATABASE_NAME,
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.PROD_DATABASE_PASSWORD,
    dialect: "postgres",
  },
};
