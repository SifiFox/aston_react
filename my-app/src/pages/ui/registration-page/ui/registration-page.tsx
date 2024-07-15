import { useAuth } from "@/features/auth/hooks/use-auth"
import { loginWithGoogle, registration } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppSelector } from "@/shared/redux/hooks"
import { AppForm } from "@/widgets/app-form"
import { Header } from "@/widgets/header"
import { type PageProps } from "@pages/types/types"
import cls from "@pages/ui/page.module.scss"
import { RegistrationForm } from "@pages/ui/registration-page/ui/registration-form/registration-form"
import { message } from "antd"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const RegistrationPage = ({ title }: PageProps) => {
    const { isAuth } = useAppSelector(state => state.user)
    const { handleRegistration } = useAuth()

    const loginGoogle = () => {
        loginWithGoogle()
    }

    return isAuth ? (
        <Navigate to={RoutePath.home} />
    ) : (
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
