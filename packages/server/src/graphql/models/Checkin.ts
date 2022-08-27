import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Checkin {
  @Field(() => ID)
  id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  user: User;
}
