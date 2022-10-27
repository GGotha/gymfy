import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Balance {
  @Field()
  brl_amount: number;

  @Field()
  gyc_amount: number;
}
