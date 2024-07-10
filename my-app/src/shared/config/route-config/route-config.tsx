import { FavouritesPageAsync } from "@pages/ui/favourites-page/favourites-page.async"
import { LoginPage } from "@pages/ui/login-page"
import { MainPageAsync } from "@pages/ui/main-page"
import { MoviePageAsync } from "@pages/ui/movie-page"
import { NotFoundPage } from "@pages/ui/not-found-page"
import { RegistrationPage } from "@pages/ui/registration-page"
import type { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
    title: string
    authOnly?: boolean
}

export enum AppRoutes {
    HOME = "home",
    MOVIE = "movie",
    FAVOURITES = "favourites",
    NOT_FOUND = "not_found",
    LOGIN = "login",
    REGISTRATION = "registration",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.MOVIE]: "/",
    [AppRoutes.FAVOURITES]: "/favourites",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTRATION]: "/registration",
    [AppRoutes.NOT_FOUND]: "*",
}

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        title: "Главная",
        element: <MainPageAsync title="Главная" />,
    },
    [AppRoutes.MOVIE]: {
        path: `${RoutePath.movie}:id`,
        title: "Фильм",
        element: <MoviePageAsync title="Фильм" />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        title: "Login",
        element: <LoginPage title="Логин" />,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        title: "Создать аккаунт",
        element: <RegistrationPage title="Создать аккаунт" />,
    },
    [AppRoutes.FAVOURITES]: {
        path: RoutePath.favourites,
        title: "Избранные",
        element: <FavouritesPageAsync title={"Изрбранные"} />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        title: "Не найдено",
        element: <NotFoundPage title={"Не найдено"} />,
    },
}
