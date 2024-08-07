import type {
    LoginParams,
    LsHistory,
    LsUser,
    LsUserCredentials,
    lsFavourites,
} from "@/app/api/types"
import type { MovieBase } from "@/app/hooks/use-movies/types"

export const checkAuth = callback => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    callback(activeUser)
    return null ?? activeUser
}

export const loginWithGoogle = async () => {
    return "Unsupported feature"
}

export const login = async ({ email, password }: LoginParams) => {
    const users: LsUser[] = JSON.parse(localStorage.getItem("users"))
    if (users) {
        users.sort((a, b) => Number(a.uid) - Number(b.uid))
        const user: LsUser = users.find(user => user.email === email)

        if (user && user.password === password) {
            const activeUser: LsUserCredentials = {
                email: user.email,
                uid: user.uid,
                accessToken: user.uid,
            }
            localStorage.setItem("activeUser", JSON.stringify(activeUser))
            return activeUser
        }
        if (!user) {
            throw new Error("Пользователь не найден")
        }

        if (user && user.password !== password) {
            throw new Error("Неверный пароль")
        }
    } else {
        throw new Error("Что-то пошло не так")
    }
}

export const registration = async ({ email, password }: LoginParams) => {
    const users: LsUser[] = JSON.parse(localStorage.getItem("users"))
    users?.sort((a, b) => Number(a.uid) - Number(b.uid))
    const lastId = users ? users[users.length - 1].uid : 0

    const newUserArray: LsUser[] = [
        {
            uid: Number(lastId) + 1,
            email,
            password,
        },
    ]

    if (users) {
        const isUserExist = !!users.find(user => user.email === email)
        if (isUserExist) {
            throw new Error("Пользователь уже существует")
        }
        localStorage.setItem(
            "users",
            JSON.stringify([...users, ...newUserArray]),
        )
    } else {
        localStorage.setItem("users", JSON.stringify(newUserArray))
    }

    return newUserArray[0]
}

export const logout = () => {
    localStorage.getItem("activeUser") && localStorage.removeItem("activeUser")
}

export const getFavouritesByUser = async (userId: number | string) => {
    const favourites = localStorage.getItem("favourites")
    if (favourites) {
        return JSON.parse(favourites).find(item => item.userId === userId)
    } else {
        return []
    }
}

export const getHistoryByUser = async (userId: number | string) => {
    const history = localStorage.getItem("history")
    if (history) {
        return JSON.parse(history).find(item => item.userId === userId)
    } else {
        return []
    }
}

export const setFavourites = async (movie: MovieBase) => {
    const activeUser: LsUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserFavourites: lsFavourites = await getFavouritesByUser(
        activeUser.uid,
    )
    const allFavourites = localStorage.getItem("favourites")

    if (!allFavourites) {
        localStorage.setItem(
            "favourites",
            JSON.stringify([
                {
                    userId: activeUser.uid,
                    movies: [movie],
                },
            ]),
        )
    }
    if (allFavourites && !activeUserFavourites) {
        localStorage.setItem(
            "favourites",
            JSON.stringify([
                ...JSON.parse(allFavourites),
                {
                    userId: activeUser.uid,
                    movies: [movie],
                },
            ]),
        )
    }

    if (activeUserFavourites) {
        const isMovieFavourite = !!activeUserFavourites.movies.find(
            searchedMovie => searchedMovie.kinopoiskId === movie.kinopoiskId,
        )
        if (isMovieFavourite) {
            const filteredMovies = activeUserFavourites.movies.filter(
                searchedMovie =>
                    searchedMovie.kinopoiskId !== movie.kinopoiskId,
            )

            localStorage.setItem(
                "favourites",
                JSON.stringify([
                    ...JSON.parse(allFavourites).filter(
                        item => item.userId !== activeUser.uid,
                    ),
                    {
                        userId: activeUser.uid,
                        movies: filteredMovies,
                    },
                ]),
            )
        } else {
            const updatedUserMovies = [...activeUserFavourites.movies, movie]
            const updatedUserFavouritesData = {
                ...activeUserFavourites,
                movies: [...updatedUserMovies],
            }

            localStorage.setItem(
                "favourites",
                JSON.stringify([
                    ...JSON.parse(allFavourites).filter(
                        item => item.userId !== activeUser.uid,
                    ),
                    updatedUserFavouritesData,
                ]),
            )
        }
    }
}

export const setHistory = async (request: string) => {
    const activeUser: LsUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory: LsHistory = await getHistoryByUser(activeUser.uid)
    const allHistory = localStorage.getItem("history")

    if (!allHistory) {
        localStorage.setItem(
            "history",
            JSON.stringify([
                {
                    userId: activeUser.uid,
                    history: [{ request: request }],
                },
            ]),
        )
    }
    if (allHistory && !activeUserHistory) {
        localStorage.setItem(
            "history",
            JSON.stringify([
                ...JSON.parse(allHistory),
                {
                    userId: activeUser.uid,
                    history: [{ request: request }],
                },
            ]),
        )
    }

    if (allHistory && activeUserHistory) {
        const isRequestInHistory = !!activeUserHistory.history.find(
            item => item.request === request,
        )
        if (isRequestInHistory) {
            return JSON.parse(allHistory)
        } else {
            const updatedUserHistory = [...activeUserHistory.history]
            const updatedUserFavouritesData = {
                ...activeUserHistory,
                history: [...updatedUserHistory, { request }],
            }

            localStorage.setItem(
                "history",
                JSON.stringify([
                    ...JSON.parse(allHistory).filter(
                        item => item.userId !== activeUser.uid,
                    ),
                    updatedUserFavouritesData,
                ]),
            )
        }
    }
}

export const removeFromHistory = async (request: string) => {
    const activeUser: LsUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory: LsHistory = await getHistoryByUser(activeUser.uid)
    const allHistory = localStorage.getItem("history")

    activeUserHistory.history = activeUserHistory.history.filter(
        item => item.request !== request,
    )

    localStorage.setItem(
        "history",
        JSON.stringify([
            ...JSON.parse(allHistory).filter(
                item => item.userId !== activeUser.uid,
            ),
            activeUserHistory,
        ]),
    )
}

export const clearHistory = async () => {
    const activeUser: LsUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory: LsHistory = await getHistoryByUser(activeUser.uid)
    const allHistory = localStorage.getItem("history")

    activeUserHistory.history = []

    if (allHistory && activeUserHistory) {
        localStorage.setItem(
            "history",
            JSON.stringify([
                ...JSON.parse(allHistory).filter(
                    item => item.userId !== activeUser.uid,
                ),
                activeUserHistory,
            ]),
        )
    }
}

export const hasGoogleAuth = () => false
