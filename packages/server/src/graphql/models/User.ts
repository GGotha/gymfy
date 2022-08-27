import { Field, ID, ObjectType } from "type-graphql";
import { Role } from "./Role";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => Role)
  role: Role;
}
