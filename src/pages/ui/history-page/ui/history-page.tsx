import { useHistory } from "@/features/history/hooks/use-history"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { HistoryContent } from "@/widgets/history-content"
import { ErrorBoundary } from "react-error-boundary"

import cls from "../../page.module.scss"

const HistoryPage = ({ title }) => {
    useHistory()
    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <HistoryContent />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}
export default HistoryPage
