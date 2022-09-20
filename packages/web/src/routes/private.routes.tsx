import { DashboardScreen } from "~/pages/Dashboard";
import { ProtectedRoute } from "~/routes/ProtectedRoutes";

enum Roles {
  ADMINISTRATOR = "administrator",
  USER = "user",
}

export const privateRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute roles={[Roles.USER, Roles.ADMINISTRATOR]}>
        <DashboardScreen />
      </ProtectedRoute>
    ),
  },
];
