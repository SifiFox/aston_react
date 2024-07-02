import { memo } from "react";
import { FloatButton } from "antd";
import { useTheme } from "@/app/hooks/useTheme/useTheme";
import { Theme } from "@/app/providers/theme/lib/theme-context";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeSwitcherIcon = {
  [Theme.DARK]: <SunOutlined />,
  [Theme.LIGHT]: <MoonOutlined />
};

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();
  return (
    <FloatButton
      onClick={toggleTheme}
      tooltip={<div>{theme}</div>}
      icon={ThemeSwitcherIcon[theme]}
    />
  );
});