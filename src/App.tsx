import { ToastContainer } from "react-toastify";

import {
  LandingPage,
  BillWizard,
  Dashboard,
  Settings,
  Statistics,
  TypesWizard,
  Expenses,
} from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthAxiosProvider } from "./contexts/AuthAxiosContext";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppShell } from "AppShell";
import { MobileAppNavigationProvider } from "contexts/MobileAppNavigation";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <AuthAxiosProvider>
          <MobileAppNavigationProvider>
            <BrowserRouter>
              <ToastContainer />
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/dashboard">
                  <AppShell>
                    <Dashboard />
                  </AppShell>
                </Route>
                <Route path="/add-expense">
                  <AppShell>
                    <BillWizard />
                  </AppShell>
                </Route>
                <Route path="/expenses">
                  <AppShell>
                    <Expenses />
                  </AppShell>
                </Route>
                <Route path="/statistics">
                  <AppShell>
                    <Statistics />
                  </AppShell>
                </Route>
                <Route path="/expense-types">
                  <AppShell>
                    <TypesWizard />
                  </AppShell>
                </Route>
                <Route path="/expense-types">
                  <AppShell>
                    <Settings />
                  </AppShell>
                </Route>
                <Route path="*">
                  <h1>404</h1>
                </Route>
              </Switch>
            </BrowserRouter>
          </MobileAppNavigationProvider>
        </AuthAxiosProvider>
      </AuthProvider>
    </>
  );
};

export default App;
