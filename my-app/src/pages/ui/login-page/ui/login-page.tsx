import { useAuth } from "@/app/hooks/use-auth/use-auth"
import { login, loginWithGoogle } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch } from "@/shared/redux/hooks"
import { setUser } from "@/shared/redux/store/slices/user-slice"
import { AppForm } from "@/widgets/app-form"
import { Header } from "@/widgets/header"
import { type PageProps } from "@pages/types/types"
import {
    LoginForm,
    type Strings,
} from "@pages/ui/login-page/ui/login-form/login-form"
import cls from "@pages/ui/page.module.scss"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = ({ title }: PageProps) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const { isAuth } = useAuth()

    useEffect(() => {
        if (isAuth) {
            navigation(RoutePath.home)
        }
    }, [isAuth, navigation])

    const handleLogin = async (data: Strings) => {
        const { email, password } = data
        await login({ email, password }).then(res => {
            const { email, uid, accessToken } = res
            dispatch(
                setUser({
                    email,
                    id: uid,
                    token: accessToken,
                }),
            )
            navigation(RoutePath.login)
        })
    }

    const loginGoogle = () => {
        loginWithGoogle()
    }

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <AppForm>
                        <LoginForm
                            formAction={handleLogin}
                            loginGoogle={loginGoogle}
                        />
                    </AppForm>
                </div>
            </div>
        </>
    )
}
