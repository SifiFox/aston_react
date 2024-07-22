import { useWindowWidth } from "@/app/hooks/use-window-width/use-window-width"
import { useAuth } from "@/features/auth/hooks/use-auth"
import cls from "@/widgets/header/ui/nav-actions/ui/nav-actions.module.scss"
import { UserDeleteOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const NavActionsAuthorized = () => {
    const { isDesktop } = useWindowWidth()
    const { handleLogout } = useAuth()

    return (
        <div className={cls.navActions}>
            <Button onClick={handleLogout} icon={<UserDeleteOutlined />}>
                {isDesktop && "выйти"}
            </Button>
        </div>
    )
}
