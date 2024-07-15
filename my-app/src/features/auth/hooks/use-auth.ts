import { logOut, login, registration } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch } from "@/shared/redux/hooks"
import { removeUser, setUser } from "@/shared/redux/store/slices/user-slice"
import { Strings } from "@pages/ui/login-page/ui/login-form/login-form"
import { message } from "antd"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogin = async (data: Strings) => {
        const { email, password } = data
        try {
            await login({ email, password }).then(res => {
                const { email, uid, accessToken } = res
                dispatch(
                    setUser({
                        email,
                        id: uid,
                        token: accessToken,
                    }),
                )
            })
            navigation(RoutePath.home)
        } catch (err) {
            console.log(err)
        }
    }

    const handleRegistration = async data => {
        try {
            await registration({
                email: data.email,
                password: data.password,
            })
        } catch (err) {
            message.error(err.message)
        }
    }

    const handleLogout = () => {
        dispatch(removeUser())
        logOut()
        navigation(RoutePath.home)
    }

    return {
        handleLogin,
        handleRegistration,
        handleLogout,
    }
}
