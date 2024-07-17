import type { MovieBase } from "@/app/hooks/use-movies/types"
export const checkAuth = callback => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    callback(activeUser)
    return null ?? activeUser
}

export const loginWithGoogle = async () => {
    return 'Unsupported feature'
}

export const login = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users"))
    if (users) {
        users.sort((a, b) => a.uid - b.uid)
        const user = users.find(user => user.email === email)

        if (user && user.password === password) {
            const activeUser = {
                email: user.email,
                uid: user.uid,
                accessToken: user.uid,
            }
            localStorage.setItem("activeUser", JSON.stringify(activeUser))
            return activeUser
        }
    } else {
        throw new Error("Что-то пошло не так")
    }
}

export const registration = async ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users"))
    users?.sort((a, b) => a.uid - b.uid)
    const lastId = users ? users[users.length - 1].uid : 0

    const newUser = [
        {
            uid: lastId + 1,
            email,
            password,
        },
    ]

    if (users) {
        const isUserExist = !!users.find(user => user.email === email)
        if (isUserExist) {
            throw new Error("Пользователь уже существует")
        }
        localStorage.setItem("users", JSON.stringify([...users, ...newUser]))
    } else {
        localStorage.setItem("users", JSON.stringify(newUser))
    }
}

export const logout = () => {
    localStorage.getItem("activeUser") && localStorage.removeItem("activeUser")
}

export const getFavouritesByUser = async userId => {
    const favourites = localStorage.getItem("favourites")
    if (favourites) {
        return JSON.parse(favourites).find(item => item.userId === userId)
    } else {
        return []
    }
}

export const getHistoryByUser = async userId => {
    const history = localStorage.getItem("history")
    if (history) {
        return JSON.parse(history).find(item => item.userId === userId)
    } else {
        return []
    }
}

export const setFavourites = async (movie: MovieBase) => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserFavourites = await getFavouritesByUser(activeUser.uid)
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
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory = await getHistoryByUser(activeUser.uid)
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

export const clearHistory = async () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory = await getHistoryByUser(activeUser.uid)
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

export const removeFromHistory = async (request: string) => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    const activeUserHistory = await getHistoryByUser(activeUser.uid)
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
