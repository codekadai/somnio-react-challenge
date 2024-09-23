"use client";

import styles from "./CartCtas.module.scss";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

type CartCtasProps = {
  hideMain: boolean;
};

const CartCtas = (props: CartCtasProps) => {
  const { hideMain } = props;
  const { cart } = useAppContext();
  return (
    <div className={styles.cartCtas}>
      <Link
        className={`${styles.cartSecondary} ${styles.cartButton}`}
        href={"/"}
      >
        Volver a la tienda
      </Link>
      {hideMain ||
        (cart.length !== 0 && (
          <Link
            className={`${styles.cartPrimary} ${styles.cartButton}`}
            href={"/checkout"}
          >
            Ir a pagar
          </Link>
        ))}
    </div>
  );
};

export default CartCtas;
