import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "@/app/providers/theme/lib/theme-context"
import { useContext } from "react"

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    }
}