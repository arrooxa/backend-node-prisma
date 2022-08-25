const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (err) {
      errorHandler(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, res);
    }
  } else {
    errorHandler(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, res);
  }
};

module.exports = verifyJWT;
