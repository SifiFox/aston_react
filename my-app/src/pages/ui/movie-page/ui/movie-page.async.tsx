import { lazy } from "react"

// TODO: Временно искусственная задержка для демонстрации
export const MoviePageAsync = lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => resolve(import("./movie-page")), 1000)
        }),
)
