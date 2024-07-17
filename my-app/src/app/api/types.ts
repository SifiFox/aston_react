import type { MovieBase } from "@/app/hooks/use-movies/types"

export enum ApiTypes {
    FIREBASE = "firebase",
    LOCALSTORAGE = "ls",
}

export type lsFunctions = {
    getFavouritesByUser: (userId) => Promise<unknown>
    loginWithGoogle: () => Promise<string>
    getHistoryByUser: (userId) => Promise<unknown>
    logout: () => void
    removeFromHistory: (request: string) => Promise<void>
    clearHistory: () => Promise<void>
    checkAuth: (callback) => unknown
    registration: ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => Promise<void>
    setHistory: (request: string) => Promise<unknown>
    login: ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => Promise<{
        uid: number | string
        accessToken: string
        email: string
    }>
    setFavourites: (movie: MovieBase) => Promise<void>
}

export type firebaseFunctions = {
    getFavouritesByUser: (
        userId,
    ) => Promise<{ movies: any; userId: number | string }>
    loginWithGoogle: () => Promise<unknown>
    login: ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => Promise<
        | {
              uid: string
              accessToken: string
              email: string
          }
        | Error
    >
    logout: () => Promise<void>
    clearHistory: () => Promise<void>
    removeFromHistory: (request: string) => Promise<void>
    checkAuth: (callback: (data) => void) => void
    setHistory: (request: string) => Promise<void>
    getHistoryByUser: (
        userId,
    ) => Promise<{ history: any; userId: number | string }>
    registration: ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => Promise<boolean>
    setFavourites: (movie: MovieBase) => Promise<void>
}