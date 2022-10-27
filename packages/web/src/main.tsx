import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "~/contexts/UserContext";
import { BalanceProvider } from "~/contexts/BalanceContext";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BalanceProvider>
          <App />
          <ToastContainer />
        </BalanceProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
);
