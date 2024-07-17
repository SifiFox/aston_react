import { BASE_API_URL } from "@/app/api/api"
import type { MoviesBase } from "@/app/hooks/use-movies/types"
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
        fetchMoviesByKeyword: builder.query<MoviesBase, void>({
            query: (word): { url: string } => ({
                url: `/films?keyword=${word}`,
            }),
            transformResponse: (response: MoviesBase) => ({
                movies: response.items,
                moviesCount: response.total,
                moviesPages: response.totalPages,
            }),
        }),
        fetchMovieById: builder.query<MoviesBase, void>({
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