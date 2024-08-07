import { RouteConfig } from "@/shared/config/route-config/route-config"
import classNames from "classnames"
import { Link, useLocation } from "react-router-dom"

import cls from "./navbar.module.scss"

export const Navbar = () => {
    const location = useLocation()
    const navbarItems = [
        RouteConfig.home,
        RouteConfig.favourites,
        RouteConfig.history,
    ]

    return (
        <nav>
            <ul className={cls.navbar}>
                {navbarItems.map((item, index) => {
                    return (
                        <li key={item.path}>
                            <Link
                                to={item.path ?? "/"}
                                className={classNames(
                                    cls.navLink,
                                    location.pathname === item.path &&
                                        cls.activeLink,
                                )}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
