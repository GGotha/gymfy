import { Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Checkin } from "~/graphql/models";

@Resolver()
export class CheckinResolver {
  @Query(() => Checkin)
  async getCheckin() {
    const checkin = await prisma.checkin.findFirst({
      where: { id: "0c430434-f44f-4c0e-a907-842c51504b99" },
      include: { user: true },
    });

    return checkin;
  }

  @Authorized("User")
  @Mutation(() => Checkin)
  async createCheckin(@Ctx() context: any) {
    const { userId } = context.req;

    const checkin = await prisma.checkin.create({
      data: { id_user: userId },
      include: { user: true },
    });

    return checkin;
  }
}
