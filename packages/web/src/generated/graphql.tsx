// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Balance = {
  __typename?: 'Balance';
  brl_amount: Scalars['Float'];
  gyc_amount: Scalars['Float'];
};

export type Checkin = {
  __typename?: 'Checkin';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Event = {
  __typename?: 'Event';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  text: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: UserResponse;
  cancelPlan: User;
  choosePlan: User;
  createCheckin: Checkin;
  createNotification: Notification;
  rechargeWithCreditCard: Transaction;
  rechargeWithPIX: Transaction;
  register: UserResponse;
};


export type MutationAuthenticateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationChoosePlanArgs = {
  id_plan: Scalars['String'];
};


export type MutationCreateNotificationArgs = {
  id_event: Scalars['String'];
  id_user: Scalars['String'];
};


export type MutationRechargeWithCreditCardArgs = {
  amount: Scalars['Float'];
  cardCvv: Scalars['String'];
  cardHolder: Scalars['String'];
  cardNumber: Scalars['String'];
  cardValidThru: Scalars['String'];
};


export type MutationRechargeWithPixArgs = {
  amount: Scalars['Float'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  created_at: Scalars['DateTime'];
  event: Event;
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Plan = {
  __typename?: 'Plan';
  brl_amount: Scalars['Float'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getBalance: Balance;
  getPlans: Array<Plan>;
};

export type Role = {
  __typename?: 'Role';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Transaction = {
  __typename?: 'Transaction';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  type: TransactionType;
  updated_at: Scalars['DateTime'];
  user: User;
};

export type TransactionType = {
  __typename?: 'TransactionType';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  id_plan?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  plan?: Maybe<Plan>;
  plan_expired_at?: Maybe<Scalars['DateTime']>;
  role: Role;
  updated_at: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  token: Scalars['String'];
  user: User;
};

export type AuthenticateMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'UserResponse', token: string, user: { __typename: 'User', id: string, name: string, email: string, id_plan?: string | null, plan_expired_at?: any | null, created_at: any, updated_at: any, role: { __typename: 'Role', id: string, name: string, active?: boolean | null, created_at: any, updated_at: any }, plan?: { __typename: 'Plan', id: string, name: string, description: string, brl_amount: number, image: string, created_at: any, updated_at: any } | null } } };

export type CancelPlanMutationVariables = Exact<{ [key: string]: never; }>;


export type CancelPlanMutation = { __typename?: 'Mutation', cancelPlan: { __typename?: 'User', plan_expired_at?: any | null, plan?: { __typename?: 'Plan', name: string } | null } };

export type ChoosePlanMutationVariables = Exact<{
  idPlan: Scalars['String'];
}>;


export type ChoosePlanMutation = { __typename?: 'Mutation', choosePlan: { __typename?: 'User', plan_expired_at?: any | null, plan?: { __typename: 'Plan', id: string, name: string, description: string, brl_amount: number, image: string, created_at: any, updated_at: any } | null } };

export type CreateCheckinMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCheckinMutation = { __typename?: 'Mutation', createCheckin: { __typename?: 'Checkin', id: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type GetBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBalanceQuery = { __typename?: 'Query', getBalance: { __typename?: 'Balance', brl_amount: number, gyc_amount: number } };

export type GetPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansQuery = { __typename?: 'Query', getPlans: Array<{ __typename: 'Plan', id: string, name: string, brl_amount: number, image: string, description: string, created_at: any, updated_at: any }> };

export type RechargeWithCreditCardMutationVariables = Exact<{
  cardCvv: Scalars['String'];
  cardValidThru: Scalars['String'];
  cardHolder: Scalars['String'];
  cardNumber: Scalars['String'];
  amount: Scalars['Float'];
}>;


export type RechargeWithCreditCardMutation = { __typename?: 'Mutation', rechargeWithCreditCard: { __typename: 'Transaction', id: string, created_at: any } };

export type RechargeWithPixMutationVariables = Exact<{
  amount: Scalars['Float'];
}>;


export type RechargeWithPixMutation = { __typename?: 'Mutation', rechargeWithPIX: { __typename: 'Transaction', id: string, created_at: any } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', token: string, user: { __typename: 'User', id: string, name: string, email: string, id_plan?: string | null, plan_expired_at?: any | null, created_at: any, updated_at: any, role: { __typename: 'Role', id: string, name: string, active?: boolean | null, created_at: any, updated_at: any }, plan?: { __typename: 'Plan', id: string, name: string, description: string, brl_amount: number, image: string, created_at: any, updated_at: any } | null } } };


export const AuthenticateDocument = `
    mutation Authenticate($password: String!, $email: String!) {
  authenticate(password: $password, email: $email) {
    user {
      id
      name
      email
      id_plan
      role {
        id
        name
        active
        created_at
        updated_at
        __typename
      }
      plan {
        id
        name
        description
        brl_amount
        image
        created_at
        updated_at
        __typename
      }
      plan_expired_at
      created_at
      updated_at
      __typename
    }
    token
  }
}
    `;
export const useAuthenticateMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>(
      ['Authenticate'],
      (variables?: AuthenticateMutationVariables) => fetcher<AuthenticateMutation, AuthenticateMutationVariables>(client, AuthenticateDocument, variables, headers)(),
      options
    );
export const CancelPlanDocument = `
    mutation CancelPlan {
  cancelPlan {
    plan_expired_at
    plan {
      name
    }
  }
}
    `;
export const useCancelPlanMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CancelPlanMutation, TError, CancelPlanMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CancelPlanMutation, TError, CancelPlanMutationVariables, TContext>(
      ['CancelPlan'],
      (variables?: CancelPlanMutationVariables) => fetcher<CancelPlanMutation, CancelPlanMutationVariables>(client, CancelPlanDocument, variables, headers)(),
      options
    );
export const ChoosePlanDocument = `
    mutation ChoosePlan($idPlan: String!) {
  choosePlan(id_plan: $idPlan) {
    plan {
      id
      name
      description
      brl_amount
      image
      created_at
      updated_at
      __typename
    }
    plan_expired_at
  }
}
    `;
export const useChoosePlanMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChoosePlanMutation, TError, ChoosePlanMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ChoosePlanMutation, TError, ChoosePlanMutationVariables, TContext>(
      ['ChoosePlan'],
      (variables?: ChoosePlanMutationVariables) => fetcher<ChoosePlanMutation, ChoosePlanMutationVariables>(client, ChoosePlanDocument, variables, headers)(),
      options
    );
export const CreateCheckinDocument = `
    mutation CreateCheckin {
  createCheckin {
    id
    user {
      id
      name
      email
    }
  }
}
    `;
export const useCreateCheckinMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCheckinMutation, TError, CreateCheckinMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCheckinMutation, TError, CreateCheckinMutationVariables, TContext>(
      ['CreateCheckin'],
      (variables?: CreateCheckinMutationVariables) => fetcher<CreateCheckinMutation, CreateCheckinMutationVariables>(client, CreateCheckinDocument, variables, headers)(),
      options
    );
export const GetBalanceDocument = `
    query GetBalance {
  getBalance {
    brl_amount
    gyc_amount
  }
}
    `;
export const useGetBalanceQuery = <
      TData = GetBalanceQuery,
      TError = string
    >(
      client: GraphQLClient,
      variables?: GetBalanceQueryVariables,
      options?: UseQueryOptions<GetBalanceQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetBalanceQuery, TError, TData>(
      variables === undefined ? ['GetBalance'] : ['GetBalance', variables],
      fetcher<GetBalanceQuery, GetBalanceQueryVariables>(client, GetBalanceDocument, variables, headers),
      options
    );
export const GetPlansDocument = `
    query GetPlans {
  getPlans {
    id
    name
    brl_amount
    image
    description
    created_at
    updated_at
    __typename
  }
}
    `;
export const useGetPlansQuery = <
      TData = GetPlansQuery,
      TError = string
    >(
      client: GraphQLClient,
      variables?: GetPlansQueryVariables,
      options?: UseQueryOptions<GetPlansQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPlansQuery, TError, TData>(
      variables === undefined ? ['GetPlans'] : ['GetPlans', variables],
      fetcher<GetPlansQuery, GetPlansQueryVariables>(client, GetPlansDocument, variables, headers),
      options
    );
export const RechargeWithCreditCardDocument = `
    mutation RechargeWithCreditCard($cardCvv: String!, $cardValidThru: String!, $cardHolder: String!, $cardNumber: String!, $amount: Float!) {
  rechargeWithCreditCard(
    cardCvv: $cardCvv
    cardValidThru: $cardValidThru
    cardHolder: $cardHolder
    cardNumber: $cardNumber
    amount: $amount
  ) {
    id
    created_at
    __typename
  }
}
    `;
export const useRechargeWithCreditCardMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RechargeWithCreditCardMutation, TError, RechargeWithCreditCardMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RechargeWithCreditCardMutation, TError, RechargeWithCreditCardMutationVariables, TContext>(
      ['RechargeWithCreditCard'],
      (variables?: RechargeWithCreditCardMutationVariables) => fetcher<RechargeWithCreditCardMutation, RechargeWithCreditCardMutationVariables>(client, RechargeWithCreditCardDocument, variables, headers)(),
      options
    );
export const RechargeWithPixDocument = `
    mutation RechargeWithPIX($amount: Float!) {
  rechargeWithPIX(amount: $amount) {
    id
    created_at
    __typename
  }
}
    `;
export const useRechargeWithPixMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RechargeWithPixMutation, TError, RechargeWithPixMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RechargeWithPixMutation, TError, RechargeWithPixMutationVariables, TContext>(
      ['RechargeWithPIX'],
      (variables?: RechargeWithPixMutationVariables) => fetcher<RechargeWithPixMutation, RechargeWithPixMutationVariables>(client, RechargeWithPixDocument, variables, headers)(),
      options
    );
export const RegisterDocument = `
    mutation Register($name: String!, $password: String!, $email: String!) {
  register(name: $name, password: $password, email: $email) {
    user {
      id
      name
      email
      id_plan
      role {
        id
        name
        active
        created_at
        updated_at
        __typename
      }
      plan {
        id
        name
        description
        brl_amount
        image
        created_at
        updated_at
        __typename
      }
      plan_expired_at
      created_at
      updated_at
      __typename
    }
    token
  }
}
    `;
export const useRegisterMutation = <
      TError = string,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      ['Register'],
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables, headers)(),
      options
    );