import {Header} from "@/widgets/header";
import cls from "@pages/ui/page.module.scss";
import {AppForm} from "@/widgets/app-form";
import {RegistrationForm} from "@pages/ui/registration-page/ui/registration-form/registration-form";
import {useAuth} from "@/app/hooks/use-auth/use-auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "@/shared/config/route-config/route-config";
import {loginWithGoogle, registration} from "@/shared/api/api";

export const RegistrationPage = ({title}) => {
    const {isAuth} = useAuth()
    const navigation = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigation(RoutePath.home)
        }
    }, [isAuth, navigation])

    const handleRegistration = async (data) => {
        await registration({
            email: data.email,
            password: data.password
        })
    }

    const loginGoogle = () => {
        loginWithGoogle()
    }

    return (
        <>
            <Header/>
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <AppForm>
                        <RegistrationForm formAction={handleRegistration} loginGoogle={loginGoogle} />
                    </AppForm>
                </div>
            </div>
        </>
    )
}