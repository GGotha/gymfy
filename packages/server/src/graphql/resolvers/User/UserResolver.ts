import { AuthenticationError } from "apollo-server";
import { Arg, Mutation, Resolver } from "type-graphql";

import bcrypt from "bcrypt";

import { generateToken, isCorrectPassword } from "~/core/token";
import { prisma } from "~/externals/orm";
import { UserResponse } from "~/graphql/types/UserResponse";

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async createUser(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("name") name: string,
  ) {
    const userAlreadyExists = await prisma.user.findFirst({ where: { email } });

    if (userAlreadyExists) {
      throw new AuthenticationError("This user already exists!");
    }

    password = await bcrypt.hash(password, 8);

    const role = await prisma.role.findFirst({ where: { name: "User", active: true } });
    const user = await prisma.user.create({
      data: {
        id_role: role!.id,
        name,
        email,
        password,
      },
    });

    return {
      user,
      token: generateToken({ userId: user.id, role: user.id_role }),
    };
  }

  @Mutation(() => UserResponse)
  async authenticate(@Arg("email") email: string, @Arg("password") password: string) {
    const user = await prisma.user.findFirst({ where: { email }, include: { role: true } });

    if (
      !user ||
      !(await isCorrectPassword({ bodyPassword: password, userPassword: user!.password }))
    ) {
      throw new AuthenticationError("E-mail or password invalid");
    }

    return {
      user,
      token: generateToken({ userId: user!.id, role: user!.id_role }),
    };
  }
}
