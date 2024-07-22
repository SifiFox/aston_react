import { useTheme } from "@/app/hooks/use-theme/use-theme"
import { Theme } from "@/app/providers/theme/lib/theme-context"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"
import { FloatButton } from "antd"
import { memo } from "react"

const ThemeSwitcherIcon = {
    [Theme.DARK]: <SunOutlined />,
    [Theme.LIGHT]: <MoonOutlined />,
}

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme()
    return (
        <FloatButton
            onClick={toggleTheme}
            tooltip={<div>{theme}</div>}
            icon={ThemeSwitcherIcon[theme]}
        />
    )
})
