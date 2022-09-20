import { HomeScreen } from "~/pages/Home";
import { LoginScreen } from "~/pages/Login";

export const publicRoutes = [
  { path: "/", element: <HomeScreen /> },
  { path: "/login", element: <LoginScreen /> },
];
