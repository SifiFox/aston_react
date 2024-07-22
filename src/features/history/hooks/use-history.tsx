import { getHistoryByUser } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { getUserSelector } from "@/shared/redux/store/selectors/user-selector"
import { setHistoryStore } from "@/shared/redux/store/slices/history-slice"
import { useEffect, useState } from "react"

export const useHistory = async () => {
    const [history, setHistory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useAppSelector(getUserSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsLoading(true)

        const fetchUserHistory = async () => {
            try {
                const userHistory = await getHistoryByUser(id)
                setHistory(userHistory)
                dispatch(setHistoryStore(userHistory.history))
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUserHistory()
    }, [dispatch, id])

    return {
        history,
        isLoading,
        error,
    }
}
