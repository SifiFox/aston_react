import { ThemeSwitcher } from "@/shared/ui/theme-switcher"
import { FloatButton } from "antd"

export const WidgetButtons = () => {
    return (
        <FloatButton.Group>
            <FloatButton.BackTop />
            <ThemeSwitcher />
        </FloatButton.Group>
    )
}
