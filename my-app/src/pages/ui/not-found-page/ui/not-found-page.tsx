import { Header } from "@/widgets/header";
import cls from "@pages/ui/page.module.scss";


export const NotFoundPage = ({title}) => {
  return (
    <>
      <Header />
      <div className={cls.pageWrapper}>
        <h1 className={cls.pageTitle}>{title}</h1>
        <div className={cls.pageContent}>
          <span>404</span>
        </div>
      </div>
    </>
  );
};