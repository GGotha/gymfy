import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import express from "express";
import http from "http";
import resolvers from "./resolvers";
import typeDefs from "./schemas";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { PORT } = process.env;

const app = express();
const server = http.createServer(app);

async function startServer() {
  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const graphQLServer = new ApolloServer({
    schema,
  });

  await graphQLServer.start();

  graphQLServer.applyMiddleware({
    app,
    path: "/api/graphql",
    cors: false,
  });
}

startServer();

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server initialized ons port ${PORT}`));
