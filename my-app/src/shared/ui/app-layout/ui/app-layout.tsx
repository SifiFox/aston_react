import cls from "@/shared/ui/app-layout/ui/app.module.scss";
import {Content} from "antd/es/layout/layout";
import {AppRouter} from "@/app/providers/router/app-router";
import {Footer} from "@/widgets/footer";
import classNames from "classnames";
import {WidgetButtons} from "@/widgets/widget-buttons";
import {useTheme} from "@/app/hooks/use-theme/use-theme";
import {checkAuth} from "@/shared/api/api";
import {useAppDispatch} from "@/shared/redux/hooks";
import {setUser} from "@/shared/redux/store/slices/user-slice";
import {message} from "antd";

export const AppLayout = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch()

    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            checkAuth(user => {
                if(user){
                    const {accessToken, auth} = user
                    const {currentUser} = auth
                    const {email, uid} = currentUser
                    dispatch(setUser({
                        email,
                        id: uid,
                        token: accessToken
                    }))
                }
            })
            break
        }
        default: {
            message.error('Api not connected')
        }
    }

    return (
        <div className={classNames(cls.layout, `app ${theme}`)}>
            <Content>
                <AppRouter/>
            </Content>
            <WidgetButtons/>
            <Footer/>
        </div>
    );
};