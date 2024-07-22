import { createSlice } from "@reduxjs/toolkit"
import { type PayloadAction } from "@reduxjs/toolkit"
import { type Nullable } from "vitest"

export interface UserState {
    id: Nullable<number | string>
    token: Nullable<string>
    isAuth: boolean
    email?: string
}

const initialState: UserState = {
    id: null,
    token: null,
    isAuth: false,
}

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser(state: UserState, action: PayloadAction<UserState>) {
            return { ...state, ...action.payload }
        },
        removeUser() {
            return { ...initialState }
        },
    },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
