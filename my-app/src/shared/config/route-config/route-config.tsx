import { RouteProps } from "react-router-dom";
import { TestPage } from "@pages/ui/test-page/test-page";
import { NotFoundPage } from "@pages/ui/not-found-page";
import { MainPage } from "@pages/ui/main-page";


export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
  title?: string,
}

export enum AppRoutes {
  MAIN = "main",
  TEST = "test",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.TEST]: "/test",
  [AppRoutes.NOT_FOUND]: "*"
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    title: "Main",
    element: <MainPage title="Main" />
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    title: "Test",
    element: <TestPage title={"Test"} />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    title: "Not found",
    element: <NotFoundPage title={"NotFound"} />
  }
};