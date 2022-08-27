import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  ValidationError,
} from "apollo-server";

export default class Errors {
  public static isManageableError(error: unknown): boolean {
    if (
      error instanceof AuthenticationError ||
      error instanceof ForbiddenError ||
      error instanceof ApolloError ||
      error instanceof UserInputError ||
      error instanceof ValidationError
    ) {
      return true;
    }

    return false;
  }
}
