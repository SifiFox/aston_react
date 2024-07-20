import { useTheme } from "@/app/hooks/use-theme/use-theme"
import { useAppSelector } from "@/shared/redux/hooks"
import { getUserSelector } from "@/shared/redux/store/selectors/user-selector"
import { Logo } from "@/shared/ui/logo"
import { NavActions } from "@/widgets/header/ui/nav-actions"
import { NavActionsAuthorized } from "@/widgets/header/ui/nav-actions-authorized"
import { Navbar } from "@/widgets/header/ui/navbar"
import classNames from "classnames"

import cls from "./header.module.scss"

export const Header = () => {
    const { theme } = useTheme()
    const { isAuth } = useAppSelector(getUserSelector)

    return (
        <header className={classNames(cls.header, theme)}>
            <Logo />
            {isAuth && <Navbar />}
            {isAuth ? <NavActionsAuthorized /> : <NavActions />}
        </header>
    )
}
