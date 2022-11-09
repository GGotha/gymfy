import { DashboardScreen } from "~/pages/Dashboard";
import { MainScreen } from "~/pages/Main";
import { PlanScreen } from "~/pages/Plan";
import { RechargeScreen } from "~/pages/Recharge";
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
        <MainScreen>
          <DashboardScreen />
        </MainScreen>
      </ProtectedRoute>
    ),
  },
  {
    path: "/plan",
    element: (
      <ProtectedRoute roles={[Roles.USER, Roles.ADMINISTRATOR]}>
        <MainScreen>
          <PlanScreen />
        </MainScreen>
      </ProtectedRoute>
    ),
  },
  {
    path: "/recharge",
    element: (
      <ProtectedRoute roles={[Roles.USER, Roles.ADMINISTRATOR]}>
        <MainScreen>
          <RechargeScreen />
        </MainScreen>
      </ProtectedRoute>
    ),
  },
];
