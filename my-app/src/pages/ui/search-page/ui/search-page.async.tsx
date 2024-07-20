import { lazy } from "react"

// TODO: Временно искусственная задержка для демонстрации
export const SearchPageAsync = lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => resolve(import("./search-page")), 1000)
        }),
)
