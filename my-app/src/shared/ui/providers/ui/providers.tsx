import { ThemeProvider } from "@/app/providers/theme/ui/theme-provider";
import { ConfigProvider } from "antd";

export const Providers = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          fontFamily: "Inter, sans-serif",
        }
      }}
    >
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ConfigProvider>

  );
};