import { lazy } from "react"

export const FavouritesPageAsync = lazy(() =>
    import("./favourites-page").then(module => {
        if (module && typeof module === "object" && "default" in module) {
            return { default: module.default }
        }
        throw new Error("Module does not have a default export")
    }),
)
