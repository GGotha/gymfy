import { DashboardScreen } from "~/pages/Dashboard";
import { ProtectedRoute } from "~/routes/ProtectedRoutes";

enum Roles {
  ADMIN = "Admin",
  USER = "User",
}

export const privateRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role={Roles.USER}>
        <DashboardScreen />
      </ProtectedRoute>
    ),
  },
];
