import { Field, ID, ObjectType, Float } from "type-graphql";

@ObjectType()
export class Plan {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  brl_amount: number;

  @Field()
  image: string;

  @Field()
  description: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
