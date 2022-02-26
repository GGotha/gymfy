import { AuthenticationError } from "apollo-server-express"

export const resolvers = {
  async authenticate() {
    return { success: true }
  },
}
