import { AuthenticationError } from "apollo-server-express"
import prisma from "../orm"

export const resolvers = {
  async allUsers() {
    return { success: true }
  },
}
