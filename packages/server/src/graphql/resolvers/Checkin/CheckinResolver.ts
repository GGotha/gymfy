import { ValidationError } from "apollo-server";
import { isToday } from "date-fns";
import { Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Checkin as CheckinPrisma, Prisma, User as UserPrisma } from "@prisma/client";
import { prisma } from "~/externals/orm";
import { Checkin, Balance } from "~/graphql/models";
import { INCOMING } from "~/core/constants";

type DecideValueByPlanType = {
  brl_amount: number;
  gyc_amount: number;
};

type UserWithRolePlan = Prisma.UserGetPayload<{ include: { plan: true; role: true } }>;

@Resolver()
export class CheckinResolver {
  @Authorized(["User", "Administrator"])
  @Mutation(() => Checkin)
  async createCheckin(@Ctx() context: any) {
    const { userId } = context.req;
    let isAdministrator = false;

    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { role: true, plan: true },
    });

    isAdministrator = user?.role.name === "Administrator";

    if (!user) {
      throw new ValidationError("Sorry! We didn´t find your user");
    }

    this.userHasAPlanRegistered(user);

    const checkin = await prisma.checkin.findFirst({
      where: { id_user: userId },
      orderBy: { created_at: "desc" },
    });

    if (checkin && !isAdministrator) {
      this.userAlreadyDidCheckinToday(checkin);
    }

    const checkinCreated = await prisma.checkin.create({
      data: { id_user: userId },
      include: { user: true },
    });

    await this.userEarnMoney(user);

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

  private async userEarnMoney(user: UserWithRolePlan) {
    const transactionType = await prisma.transactionType.findFirst({
      where: { name: INCOMING },
    });

    if (!transactionType) {
      throw new ValidationError("Sorry! We didn´t find this transaction type!");
    }

    const userPlanName = user.plan?.name;
    const { brl_amount, gyc_amount } = this.decideValueByPlan(userPlanName!);

    await prisma.transaction.create({
      data: { id_user: user.id, id_type: transactionType.id, brl_amount, gyc_amount },
    });
  }

  private decideValueByPlan(userPlanName: string): DecideValueByPlanType {
    const cashbackRuby = 4.5;
    const cashbackDiamond = 3.5;
    const cashbackGold = 2.5;

    if (userPlanName === "Ruby") {
      return { brl_amount: cashbackRuby, gyc_amount: Balance.transformBRLToGyc(cashbackRuby) };
    }
    if (userPlanName === "Diamond") {
      return {
        brl_amount: cashbackDiamond,
        gyc_amount: Balance.transformBRLToGyc(cashbackDiamond),
      };
    }

    return { brl_amount: cashbackGold, gyc_amount: Balance.transformBRLToGyc(cashbackGold) };
  }
}
