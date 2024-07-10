export const checkAuth = () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"))
    return activeUser ?? null
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
    checkAuth()
}

export const logout = () => {
    localStorage.getItem("activeUser") && localStorage.removeItem("activeUser")
}
