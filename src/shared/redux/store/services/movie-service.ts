import { BASE_API_URL } from "@/app/api/api"
import {
    type MovieDetails,
    type MoviesBase,
} from "@/app/hooks/use-movies/types"
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
                items: response.items,
                total: response.total,
                totalPages: response.totalPages,
            }),
        }),
        fetchMoviesByKeyword: builder.query<MoviesBase, void>({
            query: (word): { url: string } => ({
                url: `/films?keyword=${word}`,
            }),
            transformResponse: (response: MoviesBase, meta, arg) => ({
                items: response.items,
                total: response.total,
                totalPages: response.totalPages,
            }),
        }),
        fetchMovieById: builder.query<MovieDetails, number>({
            query: (id): { url: string } => ({
                url: `/films/${id}`,
            }),
        }),
    }),
})

export const {
    useFetchAllMoviesQuery,
    useFetchMovieByIdQuery,
    useFetchMoviesByKeywordQuery,
    useLazyFetchMoviesByKeywordQuery,
} = kinopoiskApi
