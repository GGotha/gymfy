import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";

let mergePath = loadFilesSync(path.join(__dirname, "modules/**/graphql/*.graphql"));

if (process.env.NODE_ENV === "production") {
  mergePath = loadFilesSync(path.join(__dirname, "./src/modules/**/graphql/*.graphql"));
}

const schemas = mergeTypeDefs(mergePath);

export default schemas;
