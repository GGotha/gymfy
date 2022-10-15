import { ValidationError } from "apollo-server";
import { isToday } from "date-fns";
import { Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Checkin as CheckinPrisma, User as UserPrisma } from "@prisma/client";
import { prisma } from "~/externals/orm";
import { Checkin } from "~/graphql/models";

@Resolver()
export class CheckinResolver {
  @Authorized("User")
  @Mutation(() => Checkin)
  async createCheckin(@Ctx() context: any) {
    const { userId } = context.req;

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new ValidationError("Sorry! We didn´t find your user");
    }

    this.userHasAPlanRegistered(user);

    const checkin = await prisma.checkin.findFirst({
      where: { id_user: userId },
      orderBy: { created_at: "desc" },
    });

    if (checkin) {
      this.userAlreadyDidCheckinToday(checkin);
    }

    const checkinCreated = await prisma.checkin.create({
      data: { id_user: userId },
      include: { user: true },
    });

    return checkinCreated;
  }

  private userHasAPlanRegistered(user: UserPrisma): boolean {
    if (user.id_plan) {
      return true;
    }

    throw new ValidationError("Sorry! You need a plan before you do a Checkin");
  }

  private userAlreadyDidCheckinToday(checkin: CheckinPrisma): boolean {
    if (isToday(checkin.created_at)) {
      throw new ValidationError("You can only do one checkin per day!");
    }

    return false;
  }
}
