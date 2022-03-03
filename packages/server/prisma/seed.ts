import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.role.upsert({
    where: { id: "1" },
    update: {},
    create: {
      name: "Administrator",
      active: true,
      created_at: new Date(),
    },
  })

  await prisma.role.upsert({
    where: { id: "2" },
    update: {},
    create: {
      name: "User",
      active: true,
      created_at: new Date(),
    },
  })

  await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      id_role: await (await prisma.role.findFirst({ where: { name: "User" } })).id,
      email: "alice@prisma.io",
      name: "Alice",
      password: "123",
    },
  })

  await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      id_role: await (await prisma.role.findFirst({ where: { name: "Administrator" } })).id,
      email: "bob@prisma.io",
      name: "Bob",
      password: "123",
    },
  })
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
