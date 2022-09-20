import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

type ProtectedRouteProps = {
  roles: Array<string>;
  redirectPath?: string;
  children?: any;
};

export const ProtectedRoute = ({
  roles,
  redirectPath = "/login",
  children,
}: ProtectedRouteProps) => {
  const { user } = useAuth();

  const userRoleName = user?.role?.name.toLocaleLowerCase();

  console.log("roles::", roles);
  console.log("userRoleName::", userRoleName);
  console.log(roles.includes(userRoleName));

  if (!user || !roles.includes(userRoleName)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
