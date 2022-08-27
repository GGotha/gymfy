import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
      id_role: await (await prisma.role.findFirst({ where: { name: "User" } }))!.id,
      email: "user@gymfy.com.br",
      name: "User",
      password: await bcrypt.hash("123mudar", 8),
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@gymfy.com.br" },
    update: {},
    create: {
      id_role: await (await prisma.role.findFirst({ where: { name: "Administrator" } }))!.id,
      email: "admin@gymfy.com.br",
      name: "Admin",
      password: await bcrypt.hash("123mudar", 8),
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
