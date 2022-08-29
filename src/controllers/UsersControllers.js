const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
const { prismaClient, Prisma } = require("../prisma/client");
const errorHandler = require("../helpers/errorHandler");

const getAllUsers = async (req, res) => {
  const getUser = await prismaClient.users.findMany();

  let dataObject = [];

  getUser.map((row) => dataObject.push({ email: row.email }));

  res.status(200).json({ data: dataObject });
};

const getUserInfo = async (req, res) => {
  const token = res.locals.token;

  try {
    const userEmail = jwt.decode(token, process.env.JWT_SECRET).email;

    const findEmail = await prismaClient.users.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        email: true,
        role_id: true,
      },
    });

    res.status(200).json({ user: findEmail });
  } catch (err) {
    errorHandler(StatusCodes.NOT_FOUND, err, res);
  }
};

module.exports = { getAllUsers, getUserInfo };
