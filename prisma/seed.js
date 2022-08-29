const defaultRoles = [
  {
    id: 1,
    name: "user",
  },
  {
    id: 2,
    name: "admin",
  },
];

const logger = require("../src/config/logger");
const { prismaClient } = require("../src/prisma/client");

async function seeding() {
  for (let role of defaultRoles) {
    await prismaClient.roles.create({
      data: role,
    });
  }
}

seeding()
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  })
  .finally(() => prismaClient.$disconnect());
