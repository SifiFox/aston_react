import { clearHistory } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { getHistorySelector } from "@/shared/redux/store/selectors/history-selector"
import { clearHistoryStore } from "@/shared/redux/store/slices/history-slice"
import { HistoryList } from "@/widgets/history-content/ui/history-list/history-list"
import { Button, Typography, message } from "antd"

export const HistoryContent = () => {
    const { requests } = useAppSelector(getHistorySelector)
    const dispatch = useAppDispatch()
    const handleClickClearHistory = () => {
        clearHistory().catch(err => {
            message.error(err.message)
        })
        dispatch(clearHistoryStore())
    }

    return (
        <div>
            <Button onClick={handleClickClearHistory}>Очистить историю</Button>
            {requests.length === 0 && (
                <Typography.Title>История пуста</Typography.Title>
            )}
            {requests && <HistoryList requests={requests} />}
        </div>
    )
}
