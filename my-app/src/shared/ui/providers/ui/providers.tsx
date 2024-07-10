import { ThemeProvider } from "@/app/providers/theme/ui/theme-provider"
import { store } from "@/shared/redux/store/store"
import { ConfigProvider } from "antd"
import { Provider } from "react-redux"


export const Providers = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                cssVar: true,
                token: {
                    fontFamily: "Inter, sans-serif",
                },
            }}
        >
            <ThemeProvider>
                <Provider store={store}>{children}</Provider>
            </ThemeProvider>
        </ConfigProvider>
    )
}