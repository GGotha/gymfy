import { ApolloError, AuthenticationError, ForbiddenError } from "apollo-server-express";
import bcrypt from "bcrypt";
import prisma from "../orm";
import { generateToken } from "../token";

export const resolvers = {
  async createUser(_, { name, email, password }) {
    try {
      const thisUserAlreadyExists = await prisma.user.findFirst({ where: { email } });

      if (thisUserAlreadyExists) {
        throw new ForbiddenError("This user already exists!");
      }

      password = await bcrypt.hash(password, 8);

      const role = await prisma.role.findFirst({ where: { name: "User" } });
      const user = await prisma.user.create({
        data: {
          id_role: role.id,
          name,
          email,
          password,
        },
      });

      return { success: true, user, token: generateToken({ userId: user.id, role: user.id_role }) };
    } catch (err) {
      if (err instanceof ForbiddenError) {
        throw new ApolloError(err.message);
      }

      throw new ApolloError("Internal Server Error, try again later!");
    }
  },

  async authenticate(_, { email }) {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new AuthenticationError("User doesn't exist");
    }

    const token = "21389028913";

    return { success: true, user, token };
  },
};
