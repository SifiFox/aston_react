import { lazy } from "react"

export const HistoryPageAsync = lazy(() =>
    import("./history-page").then(module => {
        if (module && typeof module === "object" && "default" in module) {
            return { default: module.default }
        }
        throw new Error("Module does not have a default export")
    }),
)
