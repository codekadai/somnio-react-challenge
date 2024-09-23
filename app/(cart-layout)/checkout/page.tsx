import CheckoutInfo from "@/components/CheckoutInfo";
import styles from "./page.module.scss";

const Checkout = () => {
  return (
    <main className={styles.checkoutPage}>
      <CheckoutInfo />
    </main>
  );
};

export default Checkout;
