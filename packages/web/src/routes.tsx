import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/Home";
import { DashboardScreen } from "./pages/Dashboard";

const RoutesComponent: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default RoutesComponent;
