import { clearHistory } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { clearHistoryStore } from "@/shared/redux/store/slices/history-slice"
import { HistoryList } from "@/widgets/history-content/ui/history-list/history-list"
import { Button } from "antd"

export const HistoryContent = () => {
    const { requests } = useAppSelector(state => state.history)
    const dispatch = useAppDispatch()
    const handleClickClearHistory = () => {
        clearHistory().catch(err => {
            console.log(err)
        })
        dispatch(clearHistoryStore())
    }

    return (
        <div>
            <Button onClick={handleClickClearHistory}>Очистить историю</Button>
            {requests && <HistoryList requests={requests} />}
        </div>
    )
}
