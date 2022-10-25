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
  const [user] = useAuth();

  const userRoleName = user?.role?.name.toLocaleLowerCase();

  if (!user || !roles.includes(userRoleName)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
