const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler");

const rbacFilter = async (req, res, next) => {
    const token = req.headers["authorization"];

    if (token) {
        try {
            const verify = jwt.verify(
                token.replace("Bearer ", ""),
                process.env.JWT_SECRET
            );

            return verify.role === 1
                ? res.end(
                      errorHandler(
                          StatusCodes.UNAUTHORIZED,
                          ReasonPhrases.UNAUTHORIZED,
                          res
                      )
                  )
                : next();
        } catch (err) {
            res.end(errorHandler(StatusCodes.UNAUTHORIZED, err, res));
        }
    } else {
        errorHandler(StatusCodes.UNAUTHORIZED, "Token não encontrado", res);
    }
};

module.exports = rbacFilter;
