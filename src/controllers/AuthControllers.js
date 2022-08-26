const database = require("../models");
const errorHandler = require("../helpers/errorHandler");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const bcrypt = require("bcrypt");
const logger = require("../config/logger");
const jwt = require("jsonwebtoken");

// TABELA DE ROLES, ROTA GET USER/USERS(ADMIN), RBAC

const saltRounds = 10;

database.Registers.removeAttribute("id");

const RegisterUser = async (req, res, next) => {
  try {
    const user = await database.Registers.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      return errorHandler(StatusCodes.CONFLICT, "Usuário já cadastrado!", res);
    } else {
      const encryptedPassword = await bcrypt.hash(
        req.body.password,
        saltRounds
      );

      const Register = await database.Registers.create({
        email: req.body.email,
        password: encryptedPassword,
      });

      res.send();
    }
  } catch (err) {
    logger.error(err);

    return errorHandler(
      StatusCodes.NOT_IMPLEMENTED,
      ReasonPhrases.NOT_IMPLEMENTED,
      res
    );
  }
};

const LoginUser = async (req, res, next) => {
  try {
    const user = await database.Registers.findOne({
      where: { email: req.body.email },
    });

    logger.info(user);

    if (user) {
      const compareBool = await bcrypt.compare(
        req.body.password,
        user.dataValues.password
      );

      if (compareBool) {
        res.send(
          jwt.sign({ username: req.body.email }, process.env.JWT_SECRET, {
            expiresIn: "24h",
          })
        );
      }
    } else {
      errorHandler(StatusCodes.FORBIDDEN, "login inválido!", res);
    }
  } catch (err) {
    logger.error(err);

    return errorHandler(
      StatusCodes.INTERNAL_SERVER_ERROR,
      ReasonPhrases.INTERNAL_SERVER_ERROR,
      res
    );
  }
};

module.exports = { RegisterUser, LoginUser };
