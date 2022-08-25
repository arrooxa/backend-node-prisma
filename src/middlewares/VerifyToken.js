const jwt = require("jsonwebtoken");

const { errorHandler } = require("../helpers/errorHandler");

const { StatusCodes, ReasonPhrases } = require("http-status-codes");

require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      errorHandler(StatusCodes.FORBIDDEN, ReasonPhrases.FORBIDDEN, res);
    }
  } catch (e) {
    next(e);
  }
};
