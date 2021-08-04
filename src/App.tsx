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

import { Switch, Route } from "react-router-dom";
import { AppShell } from "AppShell";
import { AppProviders } from "contexts/AppProvider";

const App: React.FC = () => {
  return (
    <>
      <AppProviders>
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
          <Route path="/add-expense/:id">
            <AppShell>
              <BillWizard />
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
      </AppProviders>
    </>
  );
};

export default App;
