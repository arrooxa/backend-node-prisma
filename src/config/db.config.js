require("dotenv").config();

module.exports = {
  development: {
    host: process.env.DEV_DATABASE_URL || "127.0.0.1",
    database: process.env.DEV_DATABASE,
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    dialect: "mysql",
  },
  production: {
    host: process.env.PROD_DATABASE_URL,
    database: process.env.PROD_DATABASE_NAME,
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.PROD_DATABASE_PASSWORD,
    dialect: "mysql",
  },
};
