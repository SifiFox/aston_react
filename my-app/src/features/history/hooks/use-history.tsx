import { getHistoryByUser } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { setHistoryStore } from "@/shared/redux/store/slices/history-slice"
import { useEffect, useState } from "react"

export const useHistory = () => {
    const [history, setHistory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsLoading(true)
        getHistoryByUser(id)
            .then(res => {
                setHistory(res)
                dispatch(setHistoryStore(res.history))
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
        // для первого рендера нужен пустой массив зависимостей
        /* eslint-disable react-hooks/exhaustive-deps*/
    }, [])

    return {
        history,
        isLoading,
        error,
    }
}
