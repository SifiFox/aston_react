import { RoutePath } from "@/shared/config/route-config/route-config"
import { useNavigate } from "react-router-dom"


const ErrorFallback = ({ error, resetErrorBoundary }) => {
    const navigation = useNavigate()

    const handleClickReset = () => {
        navigation(RoutePath.home)
    }

    return (
        <div role="alert">
            <p>{error.message}</p>
            <button onClick={handleClickReset}>Понял</button>
        </div>
    )
}

export { ErrorFallback }