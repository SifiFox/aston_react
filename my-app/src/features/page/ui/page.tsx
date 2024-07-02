import { FC } from "react";
import { PageProps } from "@/features/page";
import cls from './page.module.scss'

export const Page: FC<PageProps> = ({title, children})=> {
  return (
    <div className={cls.pageWrapper}>
      <h1 className={cls.pageTitle}>{title}</h1>
      <div className={cls.pageContent}>
        {children}
      </div>
    </div>
  );

};