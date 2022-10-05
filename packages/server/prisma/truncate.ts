import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.deleteMany();
  await prisma.checkin.deleteMany();
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.transactionType.deleteMany();
}

main()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Database Truncated!");
  })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await prisma.$disconnect();
  });
