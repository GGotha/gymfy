import "dotenv/config"
import { ApolloServer } from "apollo-server-express"
import prisma from "./orm"
import express from "express"
import http from "http"
import typeDefs from "./typeDefs"

const PORT = process.env.PORT

const app = express()
const server = http.createServer(app)

async function startServer() {
  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers: {
      Query: {
        allUsers: () => {
          return prisma.user.findMany()
        },
      },
    },
  })

  await graphQLServer.start()

  graphQLServer.applyMiddleware({
    app,
    path: "/api/graphql",
    cors: false,
  })
}

startServer()

server.listen(PORT, () => console.log(`Server initialized on port ${PORT}`))
