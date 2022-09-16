import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "~/pages/Home";
import { DashboardScreen } from "~/pages/Dashboard";
import { LoginScreen } from "~/pages/Login";

const PublicRoutes: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default PublicRoutes;
