import { lazy } from "react"

export const FavouritesPageAsync = lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => resolve(import("./favourites-page")), 1000)
        }),
)
