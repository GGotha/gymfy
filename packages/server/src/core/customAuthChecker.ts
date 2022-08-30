import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";
import { prisma } from "~/externals/orm";
import { TOKEN_SECRET } from "./constants";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: {
    uuid: string;
  };
}

const customAuthChecker: AuthChecker = async ({ context }: any, roles) => {
  const authHeader = context.req.headers.authorization;

  if (!authHeader) {
    return false;
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, TOKEN_SECRET as string);
    const { sub } = decoded as unknown as TokenPayload;

    const user = await prisma.user.findFirst({ where: { id: sub.uuid }, include: { role: true } });

    if (roles.indexOf(user!.role.name) === -1) {
      return false;
    }

    context.req.userId = sub.uuid;

    return true;
  } catch (err) {
    return false;
  }
};

export { customAuthChecker };
