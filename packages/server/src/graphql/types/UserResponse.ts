import { Field, ObjectType } from "type-graphql";
import { User } from "../models/User";

@ObjectType()
export class UserResponse {
  @Field()
  user: User;

  @Field()
  token: string;
}
