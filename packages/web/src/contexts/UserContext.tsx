import { createContext, useEffect, useReducer } from "react";
import { user as userDomain } from "~/globals/Domains";

const initialState = {};

export const UserContext = createContext({} as any);

const reducer = (state: any, newState: any) => {
  if (newState === null) {
    localStorage.removeItem(userDomain);
    return initialState;
  }
  return { ...state, ...newState };
};

const localState = JSON.parse(localStorage.getItem(userDomain)!);

export const UserProvider = ({ children }: any) => {
  const [state, setState] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem(userDomain, JSON.stringify(state));
  }, [state]);

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};
