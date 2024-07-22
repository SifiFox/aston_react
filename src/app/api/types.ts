import type { MovieBase, MovieDetails } from "@/app/hooks/use-movies/types"
import type { Nullable } from "vitest"

export type Strings = Record<string, string>

export enum ApiTypes {
    FIREBASE = "firebase",
    LOCALSTORAGE = "ls",
}

export interface firebaseData {
    userId: number | string
    favourites: string[]
    history: string[]
}

export interface LoginParams {
    email: string
    password: string
}

export interface LsUserCredentials {
    uid: number | string
    email: string
    accessToken: number | string
}

export interface LsUser {
    uid: number | string
    email: string
    password?: string
}

export interface lsFavourites {
    movies: MovieBase[]
    userId: number | string
}

interface HistoryRequest {
    request: string
}

interface FavouriteItem {
    kinopoiskId: string
}

export interface LsHistory {
    userId: number | string
    history: HistoryRequest[]
}

export interface UserHistory {
    userId: string | number
    history: HistoryRequest[]
}

export interface UserFavourites {
    userId: string | number
    movies: FavouriteItem[]
}

export type apiFunctions = {
    checkAuth: (callback: () => void) => Nullable<unknown>
    loginWithGoogle: () => Promise<unknown>
    login: ({ email, password }: LoginParams) => Promise<LsUserCredentials>
    registration: ({ email, password }: LoginParams) => Promise<LsUser>
    logout: () => void
    getFavouritesByUser: (id: number | string) => Promise<UserFavourites>
    getHistoryByUser: (id: number | string) => Promise<UserHistory>
    setFavourites: (movie: MovieBase | MovieDetails) => Promise<void>
    setHistory: (request: string) => Promise<void>
    removeFromHistory: (request: string) => Promise<void>
    clearHistory: () => Promise<void>
    hasGoogleAuth: () => boolean
}
