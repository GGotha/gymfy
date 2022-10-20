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
    },
  });

  await prisma.role.upsert({
    where: { id: "2" },
    update: {},
    create: {
      name: "User",
      active: true,
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

  await prisma.transactionType.upsert({
    where: { id: "1" },
    update: {},
    create: {
      name: "Incoming",
    },
  });

  await prisma.transactionType.upsert({
    where: { id: "2" },
    update: {},
    create: {
      name: "Outgoing",
    },
  });

  await prisma.plan.upsert({
    where: { id: "1" },
    update: {},
    create: {
      name: "Ruby",
      brl_amount: 129.99,
      image: "http://localhost:3000/ruby.svg",
    },
  });

  await prisma.plan.upsert({
    where: { id: "2" },
    update: {},
    create: {
      name: "Diamond",
      brl_amount: 99.99,
      image: "http://localhost:3000/diamond.svg",
    },
  });

  await prisma.plan.upsert({
    where: { id: "3" },
    update: {},
    create: {
      name: "Gold",
      brl_amount: 69.99,
      image: "http://localhost:3000/gold.svg",
    },
  });

  await prisma.event.upsert({
    where: { id: "1" },
    update: {},
    create: {
      type: "Plan",
      text: "Congratulations! New plan was registered!",
    },
  });

  await prisma.event.upsert({
    where: { id: "1" },
    update: {},
    create: {
      type: "Plan",
      text: "Current Plan was canceled!",
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
