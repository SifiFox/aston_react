import { createSlice } from "@reduxjs/toolkit"

export interface Request {
    request: string
}

export interface HistoryState {
    requests: Request[]
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
            const filteredHistory = state.requests.filter(
                item => String(item.request) !== String(action.payload.request),
            )
            if (filteredHistory) {
                state.requests = filteredHistory
            }
        },
        clearHistoryStore(state) {
            return { ...initialState }
        },
    },
})

export const { setHistoryStore, removeRequestFromHistory, clearHistoryStore } =
    historySlice.actions
export default historySlice.reducer
