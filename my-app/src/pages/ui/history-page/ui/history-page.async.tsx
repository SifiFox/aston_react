import { lazy } from "react"

export const HistoryPageAsync = lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => resolve(import("./history-page")), 1000)
        }),
)
