import { ApolloError } from "apollo-server-express";
import Errors from "../../../externals/errors";
import { prisma } from "../../../externals/orm";
import { AuthenticateService } from "../services";
import { CreateService } from "../services/Create.service";

const userResolvers = {
  Query: {
    async allUsers() {
      const user = await prisma.user.findFirst({ where: { email: "clashgustavo3@gmail.com" } });
      return { success: true, user };
    },
  },
  Mutation: {
    async createUser(_, { name, email, password }) {
      try {
        const response = await CreateService.execute({ name, email, password });

        const { user, token } = response;

        return { success: true, user, token };
      } catch (err) {
        if (Errors.isManageableError(err)) {
          return err;
        }

        throw new ApolloError("Internal Server Error, try again later!");
      }
    },

    async authenticate(_, { email, password }) {
      try {
        const response = await AuthenticateService.execute({ email, password });

        const { user, token } = response;

        return { success: true, user, token };
      } catch (err) {
        if (Errors.isManageableError(err)) {
          return err;
        }

        throw new ApolloError("Internal Server Error, try again later!");
      }
    },
  },
};

export default userResolvers;
