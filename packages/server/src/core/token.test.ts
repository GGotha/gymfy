import { randomUUID } from "crypto";
import { verify } from "jsonwebtoken";
import { TokenPayloadType } from "~/core/customAuthChecker";
import { generateToken } from "./token";
import { TOKEN_SECRET } from "./constants";

enum Roles {
  Administrator = "Administrator",
  User = "User",
}

describe("Token", () => {
  it(`Generate new JWT token with ${Roles.Administrator} role`, () => {
    const userId = randomUUID();

    const token = generateToken({ userId, role: Roles.Administrator });

    expect(token).not.toBeUndefined();
    expect(token).not.toBeNull();
    expect(token).toMatch(/ey/);
  });

  it(`Generate new JWT token with ${Roles.User} role`, () => {
    const userId = randomUUID();

    const token = generateToken({ userId, role: Roles.User });

    expect(token).not.toBeUndefined();
    expect(token).not.toBeNull();
    expect(token).toMatch(/ey/);
  });

  it(`Decrypt JWT and get content`, () => {
    const userId = randomUUID();

    const token = generateToken({ userId, role: Roles.User });

    const decoded = verify(token, TOKEN_SECRET as string);
    const { sub } = decoded as unknown as TokenPayloadType;

    expect(sub).toHaveProperty("uuid");
    expect(sub).toHaveProperty("role");
  });
});
