import {useTheme} from "@/app/hooks/use-theme/use-theme";
import {Story} from "@storybook/blocks";

export const ThemeDecorator = () => (Story: any) => {
    const { theme } = useTheme()

    return(
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )
}