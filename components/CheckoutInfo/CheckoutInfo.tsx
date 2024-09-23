"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./CheckoutInfo.module.scss";
import CartCtas from "../CartCtas";

const CheckoutInfo = () => {
  const { cart } = useAppContext();

  const total = cart.reduce((total, item) => total + item.subtotal, 0);

  return (
    <>
      <div className={styles.checkout}>
        <p className={styles.checkoutText}>Su total a pagar es de:</p>
        <h2 className={styles.checkoutAmount}>USD {Math.round(total)}</h2>
      </div>
      <CartCtas hideMain />
    </>
  );
};

export default CheckoutInfo;
