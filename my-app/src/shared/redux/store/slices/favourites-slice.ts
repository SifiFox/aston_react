import type { MovieBase } from "@/app/hooks/use-movies/types"
import { createSlice } from "@reduxjs/toolkit"

export interface FavouritesState {
    movies: MovieBase[]
}

const initialState = {
    movies: [],
}

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        setFavouritesStore(state, action) {
            state.movies = action.payload
        },
        addMovie(state, action) {
            state.movies = [...state.movies, action.payload]
        },
        removeMovie(state, action) {
            state.movies = state.movies.filter(
                movie =>
                    String(movie.kinopoiskId) !==
                    String(action.payload.kinopoiskId),
            )
        },
    },
})

export const { setFavouritesStore, removeMovie, addMovie } =
    favouritesSlice.actions
export default favouritesSlice.reducer
