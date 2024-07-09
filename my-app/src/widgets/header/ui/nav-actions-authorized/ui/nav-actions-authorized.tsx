import cls from "@/widgets/header/ui/nav-actions/ui/nav-actions.module.scss";
import {Button} from "antd";
import {UserDeleteOutlined} from "@ant-design/icons";
import {useWindowWidth} from "@/app/hooks/use-window-width/use-window-width";
import {useAppDispatch} from "@/shared/redux/hooks";
import {removeUser} from "@/shared/redux/store/slices/user-slice";
import {logOut} from "@/shared/api/api";

export const NavActionsAuthorized = () => {
    const { isDesktop} = useWindowWidth()
    const dispatch = useAppDispatch()
    const handleClickLogout = () => {
        dispatch(removeUser())
        logOut()
    }

    return (
        <div className={cls.navActions}>
            <Button onClick={handleClickLogout} icon={<UserDeleteOutlined />}>{isDesktop && 'выйти'}</Button>
        </div>
    )
}