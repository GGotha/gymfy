/* eslint-disable @typescript-eslint/no-unused-vars */
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

import { Balance, Checkin, Transaction } from "~/graphql/models";
import { prisma } from "~/externals/orm";
import { ValidationError } from "apollo-server";
import { INCOMING } from "~/core/constants";

@Resolver()
export class RechargeResolver {
  @Authorized(["User", "Administrator"])
  @Mutation(() => Transaction)
  async rechargeWithPIX(@Ctx() context: any, @Arg("amount") amount: number) {
    const { userId } = context.req;

    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { role: true, plan: true },
    });

    if (!user) {
      throw new ValidationError("Sorry! We didn´t find your user");
    }

    if (!amount) {
      throw new ValidationError("Sorry! You need put valid information!");
    }

    const transactionType = await prisma.transactionType.findFirst({
      where: { name: INCOMING },
    });

    if (!transactionType) {
      throw new ValidationError("Sorry! We didn´t find this transaction type!");
    }

    const transaction = await prisma.transaction.create({
      data: {
        id_user: user.id,
        id_type: transactionType.id,
        brl_amount: amount,
        gyc_amount: Balance.transformBRLToGyc(amount),
      },
    });

    return transaction;
  }

  @Authorized(["User", "Administrator"])
  @Mutation(() => Transaction)
  async rechargeWithCreditCard(
    @Ctx() context: any,
    @Arg("amount") amount: number,
    @Arg("cardNumber") cardNumber: string,
    @Arg("cardHolder") cardHolder: string,
    @Arg("cardValidThru") cardValidThru: string,
    @Arg("cardCvv") cardCvv: string,
  ) {
    const { userId } = context.req;

    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { role: true, plan: true },
    });

    if (!user) {
      throw new ValidationError("Sorry! We didn´t find your user");
    }

    if (!amount || !cardNumber || !cardHolder || !cardValidThru || !cardCvv) {
      throw new ValidationError("Sorry! You need put valid information!");
    }

    const transactionType = await prisma.transactionType.findFirst({
      where: { name: INCOMING },
    });

    if (!transactionType) {
      throw new ValidationError("Sorry! We didn´t find this transaction type!");
    }

    const transaction = await prisma.transaction.create({
      data: {
        id_user: user.id,
        id_type: transactionType.id,
        brl_amount: amount,
        gyc_amount: Balance.transformBRLToGyc(amount),
      },
    });

    return transaction;
  }
}
