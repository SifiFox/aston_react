import type {Nullable} from "vitest";
import type {MovieBase} from "@/app/hooks/use-movies/types";

export type Strings = Record<string, string>

export enum ApiTypes {
    FIREBASE = "firebase",
    LOCALSTORAGE = "ls",
}

export interface firebaseData {
    userId: number | string,
    favourites: string[],
    history: string[]
}

export interface LoginParams {
    email: string,
    password: string
}

export interface LsUserCredentials {
    uid: number | string,
    email: string,
    accessToken: number | string,
}

export interface LsUser {
    uid: number | string,
    email: string,
    password: string
}


export interface lsFavourites {
    movies: MovieBase[]
    userId: number | string
}

interface HistoryRequest {
    request: string
}

export interface LsHistory {
    userId: number | string
    history: HistoryRequest[]
}

type UnknownPromise = Promise<unknown> | Error;

export type apiFunctions = {
    checkAuth: (callback: () => void) => Nullable<unknown>,
    loginWithGoogle: () => Promise<unknown>,
    login: ({email, password}: LoginParams) => UnknownPromise,
    registration: ({email, password}: LoginParams) => UnknownPromise,
    logout: () => void,
    getFavouritesByUser: (id: number | string) => UnknownPromise,
    getHistoryByUser: (id: number | string) => UnknownPromise,
    setFavourites: (movie: MovieBase) => Promise<void>,
    setHistory: (request: string) => Promise<void>,
    removeFromHistory: (request: string) => Promise<void>,
    clearHistory: () => Promise<void>
}
