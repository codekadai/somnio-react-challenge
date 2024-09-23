"use client";

import styles from "./CartCtas.module.scss";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const CartCtas = () => {
  const { cart } = useAppContext();
  return (
    <div className={styles.cartCtas}>
      <Link
        className={`${styles.cartSecondary} ${styles.cartButton}`}
        href={"/"}
      >
        Seguir Comprando
      </Link>
      {cart.length !== 0 && (
        <Link
          className={`${styles.cartPrimary} ${styles.cartButton}`}
          href={"/checkout"}
        >
          Ir a pagar
        </Link>
      )}
    </div>
  );
};

export default CartCtas;
