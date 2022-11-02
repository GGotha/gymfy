import { Field, ID, ObjectType } from "type-graphql";
import { TransactionType } from "~/graphql/models/TransactionType";
import { User } from "./User";

@ObjectType()
export class Transaction {
  @Field(() => ID)
  id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => TransactionType)
  type: TransactionType;
}
