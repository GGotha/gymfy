import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import express from "express";
import http from "http";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const { PORT } = process.env;

const app = express();
const server = http.createServer(app);

async function startServer() {
  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
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
