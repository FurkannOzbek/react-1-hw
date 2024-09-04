import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavItem = ({ title, link, isActive, index }) => {
  const currentPath = usePathname();
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link href={link}>
        <b>{index}</b> {title}
      </Link>
    </li>
  );
};
