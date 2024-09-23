import CheckoutInfo from "@/components/CheckoutInfo";
import styles from "./page.module.scss";

const Checkout = () => {
  return (
    <main className={styles.checkoutPage}>
      <div className={styles.checkoutContainer}>
        <h1 className={styles.checkoutTitle}>Checkout</h1>
        <CheckoutInfo />
      </div>
    </main>
  );
};

export default Checkout;
