import { DashboardScreen } from "~/pages/Dashboard";
import { HomeScreen } from "~/pages/Home";
import { LoginScreen } from "~/pages/Login";
import { RegisterScreen } from "~/pages/Register";

export const publicRoutes = [
  { path: "/", element: <HomeScreen /> },
  { path: "/login", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },
  { path: "/dashboard", element: <DashboardScreen /> },
];
