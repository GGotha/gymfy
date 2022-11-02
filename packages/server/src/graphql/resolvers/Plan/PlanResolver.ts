import { ValidationError } from "apollo-server";
import { addDays } from "date-fns";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Plan, User, Balance } from "~/graphql/models";

@Resolver()
export class PlanResolver {
  @Authorized(["User", "Administrator"])
  @Query(() => [Plan])
  async getPlans() {
    const plans = await prisma.plan.findMany({ include: { user: true } });

    return plans;
  }

  @Authorized(["User", "Administrator"])
  @Mutation(() => User)
  async choosePlan(@Ctx() context: any, @Arg("id_plan") id_plan: string) {
    const DAYS_TO_PLAN_EXPIRE = 30;

    const { userId } = context.req;

    const [plan, user] = await Promise.all([
      await prisma.plan.findUnique({ where: { id: id_plan } }),
      await prisma.user.findUnique({ where: { id: userId } }),
    ]);

    if (!plan || !user) {
      throw new ValidationError("This plan or user doesn't exists!");
    }

    if (user.plan_expired_at && user.plan_expired_at > new Date()) {
      throw new ValidationError("You already have a plan!");
    }

    const { brl_amount } = await Balance.getUserBalance(userId);

    if (!this.userHasBalance(brl_amount, Number(plan.brl_amount))) {
      throw new ValidationError("You don´t have money to buy this plan! Please do a Recharge");
    }

    this.withdrawFromBalance(userId, Number(plan.brl_amount));

    const userUpdated = await prisma.user.update({
      where: { id: user.id },
      data: { id_plan, plan_expired_at: addDays(new Date(), DAYS_TO_PLAN_EXPIRE) },
      include: { plan: true },
    });

    return userUpdated;
  }

  @Authorized(["User", "Administrator"])
  @Mutation(() => User)
  async cancelPlan(@Ctx() context: any) {
    const { userId } = context.req;

    const user = await prisma.user.findUnique({ where: { id: userId }, include: { plan: true } });

    if (!user) {
      throw new ValidationError("Insufficient informations to continue");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { id_plan: null, plan_expired_at: null },
    });

    return user;
  }

  private userHasBalance(brl_amount: number, planPrice: number): boolean {
    return brl_amount > planPrice;
  }

  private async withdrawFromBalance(userId: string, planPrice: number) {
    const transactionType = await prisma.transactionType.findFirst({
      where: { name: "Outgoing" },
    });

    if (!transactionType) {
      throw new ValidationError("Sorry! We didn´t find this transaction type!");
    }

    await prisma.transaction.create({
      data: {
        id_user: userId,
        id_type: transactionType.id,
        brl_amount: planPrice,
        gyc_amount: Balance.transformBRLToGyc(planPrice),
      },
    });
  }
}
