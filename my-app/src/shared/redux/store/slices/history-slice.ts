import { createSlice } from "@reduxjs/toolkit"

export interface HistoryState {
    requests: string[]
}

const initialState = {
    requests: [],
}

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistoryStore(state: HistoryState, action) {
            state.requests = action.payload
        },
        removeRequestFromHistory(state, action) {
            state.requests = state.requests.filter(
                item => String(item.request) !== String(action.payload.request),
            )
        },
        clearHistoryStore(state) {
            state.requests = []
        },
    },
})

export const { setHistoryStore, removeRequestFromHistory, clearHistoryStore } =
    historySlice.actions
export default historySlice.reducer
