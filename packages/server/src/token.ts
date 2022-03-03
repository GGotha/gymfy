import jwt from "jsonwebtoken"
import { TOKEN_EXPIRES_IN, TOKEN_SECRET } from "./constants"

interface generateTokenType {
  userId: string
  role: string
}

export const generateToken = ({ userId, role }: generateTokenType): string =>
  jwt.sign({ sub: { uuid: userId, role } }, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  })
