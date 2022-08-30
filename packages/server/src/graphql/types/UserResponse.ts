import { Field, ObjectType } from "type-graphql";
import { User } from "~/graphql/models";

@ObjectType()
export class UserResponse {
  @Field()
  user: User;

  @Field()
  token: string;
}
