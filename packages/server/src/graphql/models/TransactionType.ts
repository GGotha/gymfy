import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class TransactionType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
