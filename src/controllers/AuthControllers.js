const database = require("../models");
const errorHandler = require("../helpers/errorHandler");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const bcrypt = require("bcrypt");
const logger = require("../config/logger");

// RESOLVEU O VALIDATE E FALTA AS AUTENTICAÇÕES E RBAC

const saltRounds = 10;

const RegisterUser = async (req, res, next) => {
  database.Registers.removeAttribute("id");
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
        senha: encryptedPassword,
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
  res.send({ message: "ola" });
};

module.exports = { RegisterUser, LoginUser };
