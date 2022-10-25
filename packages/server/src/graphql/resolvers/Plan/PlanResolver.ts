import { ValidationError } from "apollo-server";
import { addDays } from "date-fns";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { prisma } from "~/externals/orm";
import { Plan, User } from "~/graphql/models";

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
}
