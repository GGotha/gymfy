import { Authorized, Ctx, Query } from "type-graphql";
import { Balance } from "~/graphql/models/Balance";

export class BalanceResolver {
  @Authorized(["User", "Administrator"])
  @Query(() => Balance)
  async getBalance(@Ctx() context: any) {
    const { userId } = context.req;

    const { brl_amount, gyc_amount } = await Balance.getUserBalance(userId);

    return { gyc_amount, brl_amount };
  }
}
