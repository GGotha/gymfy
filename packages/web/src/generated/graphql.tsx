// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
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

export type Checkin = {
  __typename?: 'Checkin';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: UserResponse;
  createCheckin: Checkin;
  createUser: UserResponse;
};


export type MutationAuthenticateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCheckin: Checkin;
};

export type Role = {
  __typename?: 'Role';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
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


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'UserResponse', token: string, user: { __typename: 'User', id: string, name: string, email: string, created_at: any, updated_at: any, role: { __typename: 'Role', id: string, name: string, active?: boolean | null, created_at: any, updated_at: any } } } };


export const AuthenticateDocument = `
    mutation Authenticate($password: String!, $email: String!) {
  authenticate(password: $password, email: $email) {
    user {
      id
      name
      email
      role {
        id
        name
        active
        created_at
        updated_at
        __typename
      }
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