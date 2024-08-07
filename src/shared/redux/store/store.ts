import { kinopoiskApi } from "@/shared/redux/store/services/movie-service"
import searchReducer from "@/shared/redux/store/slices/search-slice"
import {
    combineReducers,
    configureStore,
    createDraftSafeSelector,
} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import favouritesReducer from "./slices/favourites-slice"
import historyReducer from "./slices/history-slice"
import userReducer from "./slices/user-slice"

export const rootReducer = combineReducers({
    user: userReducer,
    favourites: favouritesReducer,
    history: historyReducer,
    search: searchReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
})

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(kinopoiskApi.middleware),
    })

export const store = setupStore()
// Custom middleware log action type
const next = store.dispatch
store.dispatch = function dispatchWithLog(action) {
    console.log(action.type)
    return next(action)
}

setupListeners(next)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export const selfSelect = (state: RootState) => state
export const createTypedDraftSafeSelector =
    createDraftSafeSelector.withTypes<RootState>()
