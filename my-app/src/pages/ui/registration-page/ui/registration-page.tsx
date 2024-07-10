import { useAuth } from "@/app/hooks/use-auth/use-auth"
import { loginWithGoogle, registration } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { AppForm } from "@/widgets/app-form"
import { Header } from "@/widgets/header"
import { type PageProps } from "@pages/types/types"
import cls from "@pages/ui/page.module.scss"
import { RegistrationForm } from "@pages/ui/registration-page/ui/registration-form/registration-form"
import { message } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RegistrationPage = ({ title }: PageProps) => {
    const { isAuth } = useAuth()
    const navigation = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigation(RoutePath.home)
        }
    }, [isAuth, navigation])

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
                        <RegistrationForm
                            formAction={handleRegistration}
                            loginGoogle={loginGoogle}
                        />
                    </AppForm>
                </div>
            </div>
        </>
    )
}
