import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import { useQuery } from "@tanstack/react-query";
import {getProfile} from "services/user";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: "profile",
    queryFn: getProfile,
  });

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
