import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "@/app/providers/theme/lib/theme-context"
import type { FC } from "react"
import { useMemo, useState } from "react"

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme: setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
