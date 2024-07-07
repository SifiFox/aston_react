import { Link, useLocation } from "react-router-dom";
import cls from "./navbar.module.scss";
import classNames from "classnames";
import { RouteConfig } from "@/shared/config/route-config/route-config";

const navbarItems = [RouteConfig.home, RouteConfig.test]

export const Navbar = () => {
  const location = useLocation()


  return (
    <nav>
      <ul className={cls.navbar}>
        {
          navbarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path ?? "/"}
                  className={classNames(
                    cls.navLink,
                    location.pathname === item.path && cls.activeLink
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};