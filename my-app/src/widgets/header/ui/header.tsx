import cls from './header.module.scss'
import { Logo } from "@/shared/ui/logo";
import classNames from "classnames";
import { Navbar } from "@/widgets/header/ui/navbar";
import { NavActions } from "@/widgets/header/ui/nav-actions";
import { useTheme } from "@/app/hooks/use-theme/use-theme";

export const Header = () => {
  const {theme } = useTheme()
  return (
    <header className={classNames(cls.header, theme)}>
      <Logo />
      <Navbar/>
      <NavActions/>
    </header>
  )
}