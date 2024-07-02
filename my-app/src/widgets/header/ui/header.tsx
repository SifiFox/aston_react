import cls from './header.module.scss'
import { Logo } from "@/shared/ui/logo";

export const Header = () => {
  return (
    <div className={cls.header}>
      <Logo/>

    </div>
  )
}