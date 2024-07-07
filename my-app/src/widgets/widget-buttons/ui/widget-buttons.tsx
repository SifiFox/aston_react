import { FloatButton } from "antd";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher";

export const WidgetButtons = () => {
  return (
    <FloatButton.Group>
      <FloatButton.BackTop />
      <ThemeSwitcher />
    </FloatButton.Group>
  )
}