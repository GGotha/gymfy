import { Field, ID, ObjectType } from "type-graphql";
import { Event } from "~/graphql/models";
import { User } from "./User";

@ObjectType()
export class Notification {
  @Field(() => ID)
  id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => Event)
  event: Event;
}
