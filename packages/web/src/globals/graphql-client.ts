import { GraphQLClient } from "graphql-request";

export const API_URL = import.meta.env.VITE_API_URL;

export const graphQLClient = new GraphQLClient(API_URL!);
