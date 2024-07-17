import { removeFromHistory } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch } from "@/shared/redux/hooks"
import { removeRequestFromHistory } from "@/shared/redux/store/slices/history-slice"
import { CloseOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { Link } from "react-router-dom"

import cls from "../history-content.module.scss"

interface Request {
    request: string
}

export const HistoryList = ({ requests }: { requests: Request[] }) => {
    const dispatch = useAppDispatch()
    const handleClearRemove = value => {
        removeFromHistory(value).catch(err => {
            console.log(err)
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
                                to={`${RoutePath.search}/${item.request}`}
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
