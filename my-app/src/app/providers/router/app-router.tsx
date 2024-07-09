import type { AppRoutesProps} from "@/shared/config/route-config/route-config";
import { RouteConfig } from "@/shared/config/route-config/route-config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Suspense, useCallback } from "react";
import { Loading } from "@/shared/ui/loading";
import {RequireAuth} from "@/app/providers/router/require-auth";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Layout>{route.element}</Layout>;
    return (
      <Route
        key={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        path={route.path}
      />
    );
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};