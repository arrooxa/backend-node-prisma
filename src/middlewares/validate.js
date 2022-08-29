const Joi = require("joi");
const { StatusCodes } = require("http-status-codes");
const pick = require("../helpers/pick");
const errorHandler = require("../helpers/errorHandler");
const logger = require("../config/logger");

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");

    logger.error(errorMessage);

    return res.end(errorHandler(StatusCodes.BAD_REQUEST, errorMessage, res));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
