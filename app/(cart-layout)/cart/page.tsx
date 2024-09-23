import CartListing from "@/components/CartListing";
import styles from "./page.module.scss";
import CartCtas from "@/components/CartCtas";

const Cart = () => {
  return (
    <main className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Tu Carrito</h1>
        <CartListing />
        <CartCtas />
      </div>
    </main>
  );
};

export default Cart;
