import { useAuth } from "@/app/hooks/use-auth/use-auth"
import { useTheme } from "@/app/hooks/use-theme/use-theme"
import { Logo } from "@/shared/ui/logo"
import { NavActions } from "@/widgets/header/ui/nav-actions"
import { NavActionsAuthorized } from "@/widgets/header/ui/nav-actions-authorized"
import { Navbar } from "@/widgets/header/ui/navbar"
import classNames from "classnames"

import cls from "./header.module.scss"

export const Header = () => {
    const { theme } = useTheme()
    const { isAuth } = useAuth()

    return (
        <header className={classNames(cls.header, theme)}>
            <Logo />
            <Navbar />
            {isAuth ? <NavActionsAuthorized /> : <NavActions />}
        </header>
    )
}
