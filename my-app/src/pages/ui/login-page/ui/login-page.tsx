import {Header} from "@/widgets/header";
import cls from "@pages/ui/page.module.scss";
import {AppForm} from "@/widgets/app-form";
import {LoginForm} from "@pages/ui/login-page/ui/login-form/login-form";
import {useAppDispatch} from "@/shared/redux/hooks";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/app/hooks/use-auth/use-auth";
import {useEffect} from "react";
import {login} from "@/shared/api/api";
import {setUser} from "@/shared/redux/store/slices/user-slice";
import {RoutePath} from "@/shared/config/route-config/route-config";

export const LoginPage = ({title}) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const {isAuth} = useAuth()

    useEffect(() => {
        if (isAuth) {
            navigation(RoutePath.home)
        }
    }, [isAuth, navigation])

    const handleLogin = async (data) => {
        const {email, password} = data
        await login({email, password})
            .then(res => {
                const {email, uid, accessToken} = res
                dispatch(setUser({
                    email,
                    id: uid,
                    token: accessToken
                }))
                navigation(RoutePath.login)
            })
    }
    return (
        <>
            <Header/>
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <AppForm>
                        <LoginForm formAction={handleLogin}/>
                    </AppForm>
                </div>
            </div>
        </>
    )
}