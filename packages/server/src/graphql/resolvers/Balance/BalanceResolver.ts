import { Authorized, Ctx, Mutation, Query } from "type-graphql";
import { Balance } from "~/graphql/models/Balance";
import { prisma } from "~/externals/orm";
import { INCOMING, OUTCOMING } from "~/core/constants";

export class BalanceResolver {
  @Authorized(["User", "Administrator"])
  @Query(() => Balance)
  async getBalance(@Ctx() context: any) {
    const { userId } = context.req;
    const transactions = await prisma.transaction.findMany({
      where: { id_user: userId },
      include: { transactionType: true },
    });

    const balance = { brl_amount: 0.0, gyc_amount: 0.0 };

    transactions.filter((transaction) => {
      if (transaction.transactionType.name === INCOMING) {
        balance.brl_amount += Number(transaction.brl_amount);
        balance.gyc_amount += Number(transaction.gyc_amount);
      }

      if (transaction.transactionType.name === OUTCOMING) {
        balance.brl_amount -= Number(transaction.brl_amount);
        balance.gyc_amount -= Number(transaction.gyc_amount);
      }

      return balance;
    });

    return { gyc_amount: balance.gyc_amount, brl_amount: balance.brl_amount };
  }
}
