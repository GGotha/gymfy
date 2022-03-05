import { AuthenticationError } from "apollo-server-express";
import { prisma } from "../../../externals/orm";
import { isCorrectPassword, generateToken } from "../../../token";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: any;
  token: string;
}

class AuthenticateService {
  public static async execute(data: Request): Promise<Response> {
    const { email, password } = data;

    const user = await prisma.user.findFirst({ where: { email }, include: { role: true } });

    if (
      !user ||
      (await !isCorrectPassword({ bodyPassword: password, userPassword: user.password }))
    ) {
      throw new AuthenticationError("E-mail or password invalid");
    }

    return {
      user,
      token: generateToken({ userId: user.id, role: user.id_role }),
    };
  }
}

export { AuthenticateService };
