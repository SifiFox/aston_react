import { removeFromHistory } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch } from "@/shared/redux/hooks"
import { removeRequestFromHistory } from "@/shared/redux/store/slices/history-slice"
import { type Request } from "@/shared/redux/store/slices/history-slice"
import { setSearchQuery } from "@/shared/redux/store/slices/search-slice"
import { CloseOutlined } from "@ant-design/icons"
import { Button, Space, message } from "antd"
import { Link } from "react-router-dom"

import cls from "../history-content.module.scss"

export const HistoryList = ({ requests }: { requests: Request[] }) => {
    const dispatch = useAppDispatch()
    const handleClearRemove = value => {
        removeFromHistory(value).catch(err => {
            message.error(err.message)
        })
        dispatch(removeRequestFromHistory({ request: value }))
    }

    return (
        <div className={cls.list}>
            {requests.map(item => {
                return (
                    <div className={cls.historyItem} key={item.request}>
                        <Space>
                            <Link
                                className={cls.historyLink}
                                to={`${RoutePath.search}?keyword=${item.request}`}
                                onClick={() =>
                                    dispatch(setSearchQuery(item.request))
                                }
                            >
                                {item.request}
                            </Link>
                            <Button
                                onClick={() => handleClearRemove(item.request)}
                            >
                                <CloseOutlined />
                            </Button>
                        </Space>
                    </div>
                )
            })}
        </div>
    )
}
