import { Header } from "@/widgets/header";
import cls from "@/pages/ui/page.module.scss";

//TODO: Тестовая страница для обкатывания всякого, позде будет удалена
const TestPage = () => {
  return (
    <>
      <Header />
      <div className={cls.pageWrapper}>
        <h1 className={cls.pageTitle}>{"Test"}</h1>
        <div className={cls.pageContent}>
          <span>Test Page</span>
        </div>
      </div>
    </>
  );
};

export default TestPage