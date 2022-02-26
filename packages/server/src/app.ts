import { ApolloServer } from "apollo-server";
import prisma from "prisma";

const typeDefs = `
  type User {
    email: String!
    name: String
  }
  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
  },
};

const server = new ApolloServer({ resolvers, typeDefs });
server.listen({ port: 3333 });
