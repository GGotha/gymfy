import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardScreen } from "~/pages/Dashboard";
import { privateRoutes } from "~/routes/private.routes";
import { publicRoutes } from "./public.routes";

const RoutesComponent: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}

        {privateRoutes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  </>
);

export default RoutesComponent;