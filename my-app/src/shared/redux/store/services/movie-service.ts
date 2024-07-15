import { BASE_API_URL } from "@/app/api/api"
import { MoviesBase } from "@/app/hooks/use-movies/types"
import {
    BaseQueryMeta,
    BaseQueryResult,
} from "@reduxjs/toolkit/dist/query/baseQueryTypes"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const kinopoiskApi = createApi({
    reducerPath: "kinopoisk",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
        prepareHeaders: headers => {
            headers.set("X-API-KEY", `${import.meta.env.VITE_API_KEY}`)
            headers.set("Content-Type", "application/json")
            return headers
        },
    }),
    endpoints: builder => ({
        fetchAllMovies: builder.query<MoviesBase, void>({
            query: (): { url: string } => ({
                url: `/films`,
            }),
            transformResponse: (response: MoviesBase) => ({
                movies: response.items,
                moviesCount: response.total,
                moviesPages: response.totalPages,
            }),
        }),
    }),
})

export const { useFetchAllMoviesQuery } = kinopoiskApi
