import { LandingPage } from "./pages/LandingPage";
import { AuthProvider } from "./contexts/AuthContext";
import { FetchProvider } from "./contexts/FetchContext";

function App() {
  return (
    <>
      <AuthProvider>
        <FetchProvider>
          <LandingPage />
        </FetchProvider>
      </AuthProvider>
    </>
  );
}

export default App;
