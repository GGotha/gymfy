import { prisma } from "~/externals/orm";
import { Field, ObjectType } from "type-graphql";
import { INCOMING, OUTGOING } from "~/core/constants";

@ObjectType()
export class Balance {
  @Field()
  brl_amount: number;

  @Field()
  gyc_amount: number;

  public static async getUserBalance(userId: string) {
    const transactions = await prisma.transaction.findMany({
      where: { id_user: userId },
      include: { transactionType: true },
    });

    const balance = { brl_amount: 0.0, gyc_amount: 0.0 };

    transactions.filter((transaction: any) => {
      if (transaction.transactionType.name === INCOMING) {
        balance.brl_amount += Number(transaction.brl_amount);
        balance.gyc_amount += Number(transaction.gyc_amount);
      }

      if (transaction.transactionType.name === OUTGOING) {
        balance.brl_amount -= Number(transaction.brl_amount);
        balance.gyc_amount -= Number(transaction.gyc_amount);
      }

      return balance;
    });

    return balance;
  }

  public static transformBRLToGyc(brl_amount: number): number {
    return brl_amount * 5;
  }
}
