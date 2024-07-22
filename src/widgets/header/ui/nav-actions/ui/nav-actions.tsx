import { useWindowWidth } from "@/app/hooks/use-window-width/use-window-width"
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Link } from "react-router-dom"

import cls from "./nav-actions.module.scss"

export const NavActions = () => {
    const { isDesktop } = useWindowWidth()

    return (
        <div className={cls.navActions}>
            <Link
                to={"/login"}
                children={
                    <Button icon={<LoginOutlined />}>
                        {isDesktop && "Войти"}
                    </Button>
                }
            />
            <Link
                to={"/registration"}
                children={
                    <Button icon={<UserAddOutlined />}>
                        {isDesktop && "Регистрация"}
                    </Button>
                }
            />
        </div>
    )
}