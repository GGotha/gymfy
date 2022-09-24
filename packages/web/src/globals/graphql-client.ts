import { GraphQLClient } from "graphql-request";

const API_URL = import.meta.env.VITE_API_URL;

export const graphQLClient = new GraphQLClient(API_URL!);
