import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const userStore = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStore.isAuthenticated) {
      navigate("/sign-in");
    }
  }, [userStore.isAuthenticated, navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Welcome to the Dashboard, {userStore.user?.email}!</h1>
    </div>
  );
};

export default DashboardPage;
