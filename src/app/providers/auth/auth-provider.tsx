import { AuthContext } from "@/app/providers/auth/auth-context"
import { checkAuth } from "@/shared/api/api"
import { useAppDispatch } from "@/shared/redux/hooks"
import { setUser } from "@/shared/redux/store/slices/user-slice"
import PropTypes from "prop-types"
import type { ReactNode } from "react"
import { useEffect, useMemo, useState } from "react"

interface Props {
    children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useAppDispatch()
    useEffect(() => {
        checkAuth(user => {
            if (user) {
                dispatch(
                    setUser({
                        id: user.uid,
                        token: user.accessToken,
                        isAuth: true,
                    }),
                )
                setIsAuth(true)
            }

            setIsLoading(false)
        })
    }, [dispatch])

    const defaultProps = useMemo(
        () => ({ isAuth: isAuth, isLoading: isLoading }),
        [isAuth, isLoading],
    )

    return <AuthContext.Provider value={defaultProps} children={children} />
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
