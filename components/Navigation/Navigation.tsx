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
    <div className={styles.navigationContainer}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <img src={"/logo.svg"} alt="" />
        </Link>
      </div>
      {hasSearch && <Search />}
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href={"/cart"} className={styles.cartLink}>
              <img
                className={styles.cartIcon}
                src={"/icons/cart-white.svg"}
                alt=""
              />
              {totalCart !== 0 && (
                <span className={styles.cartCounter}>{totalCart}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
