const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler");

const verifyJWT = async (req, res, next) => {
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.token = token;
      next();
    } catch (err) {
      errorHandler(StatusCodes.UNAUTHORIZED, err, res);
    }
  } else {
    errorHandler(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, res);
  }
};

module.exports = verifyJWT;
