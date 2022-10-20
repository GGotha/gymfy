import { createContext, useCallback, useState } from "react";
import { User } from "~/generated/graphql";
import { token as tokenDomain, user as userDomain } from "~/globals/Domains";

type UserState = {
  user: User;
  token: string;
};

type UserContextType = {
  user: User;
  token: string;
  signIn(data: UserState): Promise<void>;
  signOut(): void;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: any) => {
  const [data, setData] = useState<UserState>(() => {
    const token = localStorage.getItem(tokenDomain);
    const user = localStorage.getItem(userDomain);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as UserState;
  });

  const signIn = useCallback(async ({ user, token }: UserState) => {
    localStorage.setItem(tokenDomain, token);
    localStorage.setItem(userDomain, JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(tokenDomain);
    localStorage.removeItem(userDomain);

    setData({} as UserState);
  }, []);

  return (
    <UserContext.Provider value={{ user: data!.user, token: data!.token, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
