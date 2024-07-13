import { useAppSelector } from "@/shared/redux/hooks"

export const useAuth = () => {
    const { email, token, id } = useAppSelector(state => state.user)
    return {
        isAuth: !!email,
        email,
        id,
        token,
    }
}