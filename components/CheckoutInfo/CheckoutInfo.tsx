"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./CheckoutInfo.module.scss";

const CheckoutInfo = () => {
  const { cart } = useAppContext();

  const total = cart.reduce((total, item) => total + item.subtotal, 0);

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>
      <p>Su total a pagar es de:</p>
      <h2>$ {Math.round(total)}</h2>
    </div>
  );
};

export default CheckoutInfo;
