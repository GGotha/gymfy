import { createContext, useState } from "react";

export const BalanceContext = createContext({} as any);

export const BalanceProvider = ({ children }: any) => {
  const [state, setState] = useState({});

  return <BalanceContext.Provider value={[state, setState]}>{children}</BalanceContext.Provider>;
};
