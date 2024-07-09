import {useAuth} from "@/app/hooks/use-auth/use-auth";
import {Navigate} from "react-router-dom";
import {RoutePath} from "@/shared/config/route-config/route-config";


export const RequireAuth = ({children}) => {
    const {isAuth} = useAuth()
    return isAuth ? children : <Navigate to={RoutePath.login}/>
}