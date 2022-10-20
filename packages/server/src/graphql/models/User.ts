import { Field, ID, ObjectType } from "type-graphql";
import { Plan } from "./Plan";
import { Role } from "./Role";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  id_plan?: string;

  @Field({ nullable: true })
  plan_expired_at?: Date;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => Role)
  role: Role;

  @Field({ nullable: true })
  plan?: Plan;
}
