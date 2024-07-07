import type { RouteProps } from "react-router-dom";
import { NotFoundPage } from "@pages/ui/not-found-page";
import { MainPageAsync } from "@pages/ui/main-page";
import { TestPageAsync } from "@pages/ui/test-page/test-page.async";
import { MoviePageAsync } from "@pages/ui/movie-page";

export type AppRoutesProps = RouteProps & {
  title: string,
  authOnly?: boolean,
}

export enum AppRoutes {
  HOME = "home",
  MOVIE = 'movie',
  TEST = "test",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.MOVIE]: "/",
  [AppRoutes.TEST]: "/test",
  [AppRoutes.NOT_FOUND]: "*"
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    title: "Home",
    element: <MainPageAsync title="Home" />,
  },
  [AppRoutes.MOVIE]: {
    path: `${RoutePath.movie}:id`,
    title: "Movie",
    element: <MoviePageAsync title="Movie" />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    title: "Test",
    element: <TestPageAsync title={"Test"} />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    title: "Not found",
    element: <NotFoundPage title={"NotFound"} />,
  }
};