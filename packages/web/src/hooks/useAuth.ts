import { useContext } from "react";
import { UserContext } from "~/contexts/UserContext";

export function useAuth() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an UserProvider");
  }

  return context;
}
