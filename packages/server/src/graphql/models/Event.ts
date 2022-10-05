import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Event {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  text: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
