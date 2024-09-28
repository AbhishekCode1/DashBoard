import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { useUserStore } from "./store/userStore";

const App = () => {
  const userStore = useUserStore();

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route
        path="/dashboard"
        element={
          userStore.isAuthenticated ? <DashboardPage /> : <Navigate to="/sign-in" />
        }
      />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default App;
