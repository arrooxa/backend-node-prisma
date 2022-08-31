const Joi = require("joi");
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV:     Joi.string().valid("production", "development", "test").required(),
    PORT:         Joi.number().default(8080),
    JWT_SECRET:   Joi.string().required().description("JWT secret key"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
};
