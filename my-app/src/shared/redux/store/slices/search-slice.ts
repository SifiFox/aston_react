import { createSlice } from "@reduxjs/toolkit"
import { type Nullable } from "vitest"

export interface SearchState {
    searchQuery: Nullable<string>
}

const initialState = {
    searchQuery: null,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload
        },
        clearSearchQuery(state, action) {
            state.searchQuery = { ...initialState }
        },
    },
})

export const { setSearchQuery, clearSearchQuery } = searchSlice.actions
export default searchSlice.reducer
