import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_EXPIRES_IN, TOKEN_SECRET } from "./constants";

interface generateTokenType {
  userId: string;
  role: string;
}

interface checkPasswordType {
  bodyPassword: string;
  userPassword: string;
}

export const generateToken = ({ userId, role }: generateTokenType): string =>
  jwt.sign({ sub: { uuid: userId, role } }, TOKEN_SECRET as string, {
    expiresIn: TOKEN_EXPIRES_IN,
  });

export const isCorrectPassword = async ({ bodyPassword, userPassword }: checkPasswordType) =>
  bcrypt.compare(bodyPassword, userPassword);
