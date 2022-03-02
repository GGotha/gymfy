import jwt from "jsonwebtoken"
import { TOKEN_SECRET, TOKEN_EXPIRES_IN } from "./constants"

interface generateTokenType {
  userId: string
  role: string
}

export const generateToken = ({ userId, role }: generateTokenType): string => {
  return jwt.sign({ sub: { uuid: userId, role } }, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  })
}
