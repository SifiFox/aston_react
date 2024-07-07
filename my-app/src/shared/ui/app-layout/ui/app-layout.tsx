import cls from "@/shared/ui/app-layout/ui/app.module.scss";
import { Content } from "antd/es/layout/layout";
import { AppRouter } from "@/app/providers/router/app-router";
import { Footer } from "@/widgets/footer";
import classNames from "classnames";
import { WidgetButtons } from "@/widgets/widget-buttons";
import { useTheme } from "@/app/hooks/use-theme/use-theme";


export const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(cls.layout, `app ${theme}`)}>
      <Content>
        <AppRouter />
      </Content>
      <WidgetButtons />
      <Footer />
    </div>
  );
};