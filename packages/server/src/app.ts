import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import "dotenv/config";
import path from "path";
import { buildSchema } from "type-graphql";

import { customAuthChecker } from "~/core/customAuthChecker";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

async function main() {
  const schema = await buildSchema({
    resolvers: [`${__dirname}/graphql/resolvers/*.{ts,js}`],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req,
      };

      return context;
    },
  });

  const { port } = await server.listen();

  // eslint-disable-next-line no-console
  console.log(`🚀 Server initialized ons port ${port} 🚀`);
}

main();
