"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./CartListing.module.scss";

const CartListing = () => {
  const { cart } = useAppContext();

  return cart.length === 0 ? (
    <h3 className={styles.noProducts}>No tienes productos agregados!</h3>
  ) : (
    <ul className={styles.cartList}>
      {cart.map((cartItem) => (
        <li className={styles.cartItem} key={cartItem.product.id}>
          <p className={styles.cartItemSubcontainer}>
            <span className={styles.cartQuantity}>{cartItem.quantity}</span>
            <span className={styles.cartItemTitle}>
              {cartItem.product.title}
            </span>
          </p>
          <span className={styles.cartSubtotal}>USD {cartItem.subtotal}</span>
        </li>
      ))}
    </ul>
  );
};

export default CartListing;
