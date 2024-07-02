import { Layout } from "antd";
import cls from "@/shared/ui/app-layout/ui/app.module.scss";
import { Content } from "antd/es/layout/layout";
import { AppRouter } from "@/app/providers/router/app-router";
import { Footer } from "@/widgets/footer";
import classNames from "classnames";
import { useTheme } from "@/app/hooks/useTheme/useTheme";
import { WidgetButtons } from "@/widgets/widget-buttons";
import { Header } from "@/widgets/header";


export const AppLayout = () => {
  const {theme} = useTheme()

  return (
    <Layout className={classNames(cls.layout, `app ${theme}`)}>
      <Header className={classNames(cls.header, theme)} />
      <Layout>
        <Content>
          <AppRouter />
        </Content>
      </Layout>
      <WidgetButtons/>
      <Footer />
    </Layout>
  );
};