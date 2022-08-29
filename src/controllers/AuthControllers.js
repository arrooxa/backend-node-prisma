const errorHandler = require("../helpers/errorHandler");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const bcrypt = require("bcrypt");
const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
const { prismaClient, Prisma } = require("../prisma/client");

const saltRounds = Number(process.env.SALT_ROUNDS);

const RegisterUser = async (req, res, next) => {
  try {
    const user = await prismaClient.users.findUnique({
      where: { email: req.body.email },
    });

    if (user) {
      return errorHandler(StatusCodes.CONFLICT, "Usuário já cadastrado!", res);
    } else {
      const encryptedPassword = await bcrypt.hash(
        req.body.password,
        saltRounds
      );

      let userCreateInput = Prisma.userCreateInput;

      userCreateInput = {
        email: req.body.email,
        password: encryptedPassword,
        role_id: 2,
      };

      const Register = await prismaClient.users.create({
        data: userCreateInput,
      });

      res.send();
    }
  } catch (err) {
    logger.error(err);

    return errorHandler(StatusCodes.NOT_IMPLEMENTED, err, res);
  }
};

const LoginUser = async (req, res, next) => {
  try {
    const user = await prismaClient.users.findUnique({
      where: { email: req.body.email },
    });

    if (user) {
      const compareBool = await bcrypt.compare(
        req.body.password,
        user.password
      );

      return compareBool
        ? res.send(
            jwt.sign(
              { email: req.body.email, role: user.role_id },
              process.env.JWT_SECRET,
              {
                expiresIn: "24h",
              }
            )
          )
        : errorHandler(StatusCodes.FORBIDDEN, "login inválido!", res);
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
