import { AppRoutesProps, RouteConfig } from "@/shared/config/route-config/route-config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { useCallback } from "react";


export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Layout>{route.element}</Layout>;
    return (
      <Route
        key={route.path}
        // element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        element={element}
        path={route.path}
      />
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {Object.values(RouteConfig).map(renderWithWrapper)}
      </Routes>
    </BrowserRouter>
  );
};