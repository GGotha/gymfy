import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_EXPIRES_IN, TOKEN_SECRET } from "./constants";

type GenerateTokenType = {
  userId: string;
  role: string;
};

type CheckPasswordType = {
  bodyPassword: string;
  userPassword: string;
};

export const generateToken = ({ userId, role }: GenerateTokenType): string =>
  jwt.sign({ sub: { uuid: userId, role } }, TOKEN_SECRET as string, {
    expiresIn: TOKEN_EXPIRES_IN,
  });

export const isCorrectPassword = async ({ bodyPassword, userPassword }: CheckPasswordType) =>
  bcrypt.compare(bodyPassword, userPassword);
