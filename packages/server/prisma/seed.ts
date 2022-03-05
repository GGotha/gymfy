import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.upsert({
    where: { id: "1" },
    update: {},
    create: {
      name: "Administrator",
      active: true,
      created_at: new Date(),
    },
  });

  await prisma.role.upsert({
    where: { id: "2" },
    update: {},
    create: {
      name: "User",
      active: true,
      created_at: new Date(),
    },
  });

  await prisma.user.upsert({
    where: { email: "user@gymfy.com.br" },
    update: {},
    create: {
      id_role: await (await prisma.role.findFirst({ where: { name: "User" } })).id,
      email: "user@gymfy.com.br",
      name: "User",
      password: "$2b$08$7l609TK80Phx8Jg3ReWV7eZDPuHc.36JQvdE3bMC4IoSxBLliY3Zi",
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@gymfy.com.br" },
    update: {},
    create: {
      id_role: await (await prisma.role.findFirst({ where: { name: "Administrator" } })).id,
      email: "admin@gymfy.com.br",
      name: "Admin",
      password: "$2b$08$7l609TK80Phx8Jg3ReWV7eZDPuHc.36JQvdE3bMC4IoSxBLliY3Zi",
    },
  });
}

main()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Seeds was put on your database!");
  })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
