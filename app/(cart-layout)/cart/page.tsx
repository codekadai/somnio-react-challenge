import CartListing from "@/components/CartListing";
import styles from "./page.module.scss";
import Link from "next/link";

const Cart = () => {
  return (
    <main className={styles.cartPage}>
      <CartListing />
      <div>
        <Link href={"/"}>Seguir Comprando</Link>
        <Link href={"/checkout"}>Ir a pagar</Link>
      </div>
    </main>
  );
};

export default Cart;
