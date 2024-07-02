import { FC } from "react";

interface LogoProps {
  linked: boolean
}

export const Logo: FC<LogoProps> = (props) => {
  const {linked} = props
  return linked ? <span>Logo</span> : <a>Logo</a>
}