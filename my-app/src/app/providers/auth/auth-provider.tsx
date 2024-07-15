import { AuthContext } from "@/app/providers/auth/auth-context"
import { checkAuth } from "@/shared/api/api"
import { useAppDispatch } from "@/shared/redux/hooks"
import { setUser } from "@/shared/redux/store/slices/user-slice"
import PropTypes from "prop-types"
import { ReactNode, useEffect, useState } from "react"

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
                switch (import.meta.env.VITE_API_TYPE) {
                    case "firebase": {
                        dispatch(
                            setUser({
                                id: user.uid,
                                token: user.accessToken,
                            }),
                        )
                        setIsAuth(true)
                        break
                    }
                    case "ls": {
                        dispatch(
                            setUser({
                                id: user.uid,
                                token: user.accessToken,
                                isAuth: true,
                                email: user.email,
                            }),
                        )
                        setIsAuth(true)
                        break
                    }
                    default: {
                        throw new Error("API не подключено")
                    }
                }
            }

            setIsLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{ isAuth: isAuth, isLoading: isLoading }}
            children={children}
        />
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
