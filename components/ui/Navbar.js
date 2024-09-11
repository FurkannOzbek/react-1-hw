"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* when we will use map function next week, that string indexes will be fixed, this is just temporary*/}
          <NavItem
            title={navbarItems[0].title}
            link={navbarItems[0].link}
            index="01"
            isActive={navbarItems[0].link === currentPath}
          />
          <NavItem
            title={navbarItems[1].title}
            link={navbarItems[1].link}
            index="02"
            isActive={navbarItems[1].link === currentPath}
          />
          <NavItem
            title={navbarItems[2].title}
            link={navbarItems[2].link}
            index="03"
            isActive={navbarItems[2].link === currentPath}
          />

          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
