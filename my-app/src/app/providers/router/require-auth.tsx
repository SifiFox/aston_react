import { AuthContext } from "@/app/providers/auth/auth-context"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppSelector } from "@/shared/redux/hooks"
import { Loading } from "@/shared/ui/loading"
import { useContext } from "react"
import { Navigate } from "react-router-dom"


export const RequireAuth = ({ children }) => {
    const { isLoading } = useContext(AuthContext)
    const { isAuth } = useAppSelector(state => state.user)

    if (isLoading) {
        return <Loading />
    } else {
        return isAuth ? children : <Navigate to={RoutePath.login} />
    }
}