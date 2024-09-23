"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./CartListing.module.scss";

const CartListing = () => {
  const { cart } = useAppContext();

  return (
    <div className={styles.cartListing}>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.product.id}>
            <span>{cartItem.quantity}</span>
            <span>{cartItem.product.title}</span>
            <span>{cartItem.subtotal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartListing;
