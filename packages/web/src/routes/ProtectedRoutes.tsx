import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

type ProtectedRouteProps = {
  role: string;
  redirectPath?: string;
  children?: any;
};

export const ProtectedRoute = ({
  role,
  redirectPath = "/login",
  children,
}: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user || user?.role?.name.toLowerCase() !== role.toLowerCase()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
