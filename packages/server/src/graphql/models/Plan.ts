import { Field, ID, ObjectType } from "type-graphql";
import { User } from "~/graphql/models";

@ObjectType()
export class Plan {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  user: User;
}
