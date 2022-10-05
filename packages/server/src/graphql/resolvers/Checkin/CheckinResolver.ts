import { ValidationError } from "apollo-server";
import { isToday } from "date-fns";
import { Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Checkin } from "~/graphql/models";

@Resolver()
export class CheckinResolver {
  @Authorized("User")
  @Mutation(() => Checkin)
  async createCheckin(@Ctx() context: any) {
    const { userId } = context.req;

    const checkin = await prisma.checkin.findFirst({
      where: { id_user: userId },
      orderBy: { created_at: "desc" },
    });

    if (!checkin) {
      throw new ValidationError("Insufficient informations to continue");
    }

    const userAlreadyDidCheckinToday = isToday(checkin!.created_at);

    if (userAlreadyDidCheckinToday) {
      throw new ValidationError("You can only do one checkin per day!");
    }

    const checkinCreated = await prisma.checkin.create({
      data: { id_user: userId },
      include: { user: true },
    });

    return checkinCreated;
  }
}
