import "dotenv/config"
import { ApolloServer } from "apollo-server-express"
import prisma from "./orm"
import express from "express"
import http from "http"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"

const PORT = process.env.PORT

const app = express()
const server = http.createServer(app)

async function startServer() {
  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    // resolvers: {
    //   Query: {
    //     allUsers: () => {
    //       return prisma.user.findMany()
    //     },
    //   },
    //   Mutation: {
    //     authenticate: () => {
    //       return { success: true }
    //     },
    //   },
    // },
  })

  await graphQLServer.start()

  graphQLServer.applyMiddleware({
    app,
    path: "/api/graphql",
    cors: false,
  })
}

startServer()

server.listen(PORT, () => console.log(`Server initialized ons port ${PORT}`))
