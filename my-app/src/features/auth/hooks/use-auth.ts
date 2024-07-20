import { type Strings } from "@/app/api/types"
import { logOut, login, registration } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch } from "@/shared/redux/hooks"
import { clearFavouritesStore } from "@/shared/redux/store/slices/favourites-slice"
import { clearHistoryStore } from "@/shared/redux/store/slices/history-slice"
import { removeUser, setUser } from "@/shared/redux/store/slices/user-slice"
import { message } from "antd"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogin = async (data: Strings) => {
        const { email, password } = data
        try {
            const userData = await login({ email, password })
            if (userData) {
                const { email, uid, accessToken } = userData
                dispatch(
                    setUser({
                        email,
                        id: uid,
                        token: accessToken,
                        isAuth: !!accessToken,
                    }),
                )
            }
            navigation(RoutePath.home)
        } catch (err: Error) {
            message.error(err.message)
        }
    }

    const handleRegistration = async data => {
        try {
            const userData = await registration({
                email: data.email,
                password: data.password,
            })

            if (userData.password) {
                await handleLogin({
                    email: userData.email,
                    password: userData.password,
                })
            }
        } catch (err) {
            message.error(err.message)
        }
    }

    const handleLogout = () => {
        dispatch(removeUser())
        dispatch(clearHistoryStore())
        dispatch(clearFavouritesStore())
        logOut()
        navigation(RoutePath.home)
    }

    return {
        handleLogin,
        handleRegistration,
        handleLogout,
    }
}
