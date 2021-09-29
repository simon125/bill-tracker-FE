import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./AuthContext";
import { AuthAxiosProvider } from "./AuthAxiosContext";

import { BrowserRouter } from "react-router-dom";
import { MobileAppNavigationProvider } from "contexts/MobileAppNavigation";
import { BillWizardProvider } from "./BillWizardContext";

export const queryClient = new QueryClient();

const AppProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthAxiosProvider>
          <MobileAppNavigationProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </MobileAppNavigationProvider>
        </AuthAxiosProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export { AppProviders };
