"use client";

import Navigation from "../Navigation";
import { NavigationProps } from "../Navigation/Navigation";
import styles from "./Header.module.scss";

type HeaderProps = Pick<NavigationProps, "hasSearch">;

const Header = (props: HeaderProps) => {
  const { hasSearch } = props;
  return (
    <header className={styles.header}>
      <Navigation hasSearch={hasSearch} />
    </header>
  );
};

export default Header;
