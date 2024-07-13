import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: []
}

const favouritesSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setFavouritesStore(state, action) {
            state.movies = action.payload
        }
    },
})

export const { setFavouritesStore } = favouritesSlice.actions
export default favouritesSlice.reducer
