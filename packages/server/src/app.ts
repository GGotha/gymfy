import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import "dotenv/config";
import path from "path";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { port } = await server.listen();

  // eslint-disable-next-line no-console
  console.log(`🚀 Server initialized ons port ${port} 🚀`);
}

main();
