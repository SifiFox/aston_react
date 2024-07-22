import { lazy } from "react"

export const MainPageAsync = lazy(() =>
    import("./main-page").then(module => {
        if (module && typeof module === "object" && "default" in module) {
            return { default: module.default }
        }
        throw new Error("Module does not have a default export")
    }),
)
