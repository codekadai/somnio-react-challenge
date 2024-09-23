"use client";

import Link from "next/link";
import styles from "./Navigation.module.scss";
import Search from "../Search";
import { useAppContext } from "@/context/AppContext";

export type NavigationProps = {
  hasSearch: boolean;
};

const Navigation = (props: NavigationProps) => {
  const { hasSearch } = props;
  const { totalCart } = useAppContext();
  return (
    <>
      <div>
        <Link href={"/"}>
          <img src={"/logo.svg"} alt="" />
        </Link>
      </div>
      {hasSearch && <Search />}
      <nav className={styles.header}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href={"/cart"}>Cart</Link>
            <span>{totalCart}</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
