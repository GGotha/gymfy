import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Role {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
