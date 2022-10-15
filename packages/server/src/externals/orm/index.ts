import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line import/no-mutable-exports
let prisma = new PrismaClient();

if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
}

export { prisma };
