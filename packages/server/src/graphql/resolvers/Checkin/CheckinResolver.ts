import { Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Checkin } from "~/graphql/models";

@Resolver()
export class CheckinResolver {
  @Query(() => String)
  async query() {
    return "query";
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
