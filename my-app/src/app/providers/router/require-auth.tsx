import { AuthContext } from "@/app/providers/auth/auth-context"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppSelector } from "@/shared/redux/hooks"
import { Loading } from "@/shared/ui/loading"
import PropTypes from "prop-types"
import type { ReactNode } from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {
    const { isLoading } = useContext(AuthContext)
    const { isAuth } = useAppSelector(state => state.user)

    if (isLoading) {
        return <Loading />
    } else {
        return isAuth ? children : <Navigate to={RoutePath.login} />
    }
}

RequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
}
