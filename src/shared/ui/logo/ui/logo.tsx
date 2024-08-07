import logoSrc from "@/shared/assets/icons/logo.png"
import { Link, useLocation } from "react-router-dom"

import cls from "./logo.module.scss"

export const Logo = () => {
    const location = useLocation()

    return (
        <div className={cls.logoWrapper}>
            {location.pathname === "/" ? (
                <img src={logoSrc} alt="" />
            ) : (
                <Link to={"/"}>
                    <img src={logoSrc} alt="" />
                </Link>
            )}
        </div>
    )
}
