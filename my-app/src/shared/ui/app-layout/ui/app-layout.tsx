import { useTheme } from "@/app/hooks/use-theme/use-theme"
import { AppRouter } from "@/app/providers/router/app-router"
import cls from "@/shared/ui/app-layout/ui/app.module.scss"
import { Footer } from "@/widgets/footer"
import { WidgetButtons } from "@/widgets/widget-buttons"
import { Content } from "antd/es/layout/layout"
import classNames from "classnames"

export const AppLayout = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames(cls.layout, `app ${theme}`)}>
            <Content>
                <AppRouter />
            </Content>
            <WidgetButtons />
            <Footer />
        </div>
    )
}
