import { Route, Routes } from "react-router-dom";

import NotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import { useQuery } from "@tanstack/react-query";
import getProfile from "services/user";

function Router() {
  const { data, isLoading, error } = useQuery({
    queryKey: "profile",
    queryFn: getProfile,
  });
  console.log({ data, isLoading, error });

  if (isLoading) <h1>Loading ...</h1>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
