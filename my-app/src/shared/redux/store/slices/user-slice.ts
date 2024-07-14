import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null,
    token: null,
    isAuth: false
}

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id
            state.token = action.payload.token
            state.isAuth = true
        },
        removeUser(state) {
            state.id = null
            state.token = null
            state.isAuth = false
        },
    },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
