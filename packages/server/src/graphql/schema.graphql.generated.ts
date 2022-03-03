import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Json: any;
  Object: any;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticate: ResponseUser;
  createUser: ResponseCreateUser;
};

export type MutationAuthenticateArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  allUsers: Array<User>;
};

export type ResponseCreateUser = {
  __typename?: "ResponseCreateUser";
  success: Scalars["Boolean"];
  token: Scalars["String"];
  user: User;
};

export type ResponseUser = {
  __typename?: "ResponseUser";
  success: Scalars["Boolean"];
  token: Scalars["String"];
  user: User;
};

export type User = {
  __typename?: "User";
  created_at: Scalars["Date"];
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  updated_at?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Json: ResolverTypeWrapper<Scalars["Json"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Object: ResolverTypeWrapper<Scalars["Object"]>;
  Query: ResolverTypeWrapper<{}>;
  ResponseCreateUser: ResolverTypeWrapper<ResponseCreateUser>;
  ResponseUser: ResolverTypeWrapper<ResponseUser>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Date: Scalars["Date"];
  ID: Scalars["ID"];
  Json: Scalars["Json"];
  Mutation: {};
  Object: Scalars["Object"];
  Query: {};
  ResponseCreateUser: ResponseCreateUser;
  ResponseUser: ResponseUser;
  String: Scalars["String"];
  User: User;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Json"], any> {
  name: "Json";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  authenticate?: Resolver<
    ResolversTypes["ResponseUser"],
    ParentType,
    ContextType,
    RequireFields<MutationAuthenticateArgs, "email" | "password">
  >;
  createUser?: Resolver<
    ResolversTypes["ResponseCreateUser"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "email" | "name" | "password">
  >;
};

export interface ObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Object"], any> {
  name: "Object";
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  allUsers?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type ResponseCreateUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ResponseCreateUser"] = ResolversParentTypes["ResponseCreateUser"],
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ResponseUser"] = ResolversParentTypes["ResponseUser"],
> = {
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  created_at?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Json?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Object?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResponseCreateUser?: ResponseCreateUserResolvers<ContextType>;
  ResponseUser?: ResponseUserResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
