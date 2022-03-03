import { gql } from "apollo-server-express";
import fs from "fs";
import path from "path";

console.log(__dirname, "schema.graphql");

export default gql(fs.readFileSync(path.join(__dirname, "..", "schema.graphql"), "utf8"));
