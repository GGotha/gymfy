import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";

let mergePath = loadFilesSync(path.join(__dirname, "modules/**/graphql/*.resolvers.ts"));

if (process.env.NODE_ENV === "production") {
  mergePath = loadFilesSync(path.join(__dirname, "modules/**/graphql/*.resolvers.js"));
}

const resolvers = mergeResolvers(mergePath);

export default resolvers;
