import { api } from "@/app/api/contstants"
import { type Strings } from "@/app/api/types"
import { type MovieBase, type MovieDetails } from "@/app/hooks/use-movies/types"

if (!api) {
    throw new Error("API не подключено")
}
export const checkAuth = callback => {
    return callback ? api.checkAuth(callback) : null
}

export const login = ({ email, password }) => {
    return api.login({ email, password })
}

export const loginWithGoogle = () => {
    return api.loginWithGoogle()
}

export const registration = (data: Strings) => {
    const { email, password } = data
    return api.registration({ email, password })
}

export const logOut = () => {
    return api.logout()
}

export const setFavourites = (movie: MovieBase | MovieDetails) => {
    return api.setFavourites(movie)
}

export const getFavouritesByUser = id => {
    return api.getFavouritesByUser(id)
}

export const getHistoryByUser = id => {
    return api.getHistoryByUser(id)
}

export const setHistory = (request: string) => {
    return api.setHistory(request)
}

export const clearHistory = () => {
    return api.clearHistory()
}
export const removeFromHistory = (value: string) => {
    return api.removeFromHistory(value)
}

export const hasGoogleAuth = () => {
    return api.hasGoogleAuth()
}
