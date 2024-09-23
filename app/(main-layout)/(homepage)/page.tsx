import styles from "./page.module.scss";
import { Product } from "@/types/Product";
import Products from "@/components/Products";

const getProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = data.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error while fetching the data");
  }
};

const Home = async () => {
  const products: Product[] = await getProducts();

  return (
    <main className={styles.homePage}>
      <Products products={products} />
    </main>
  );
};

export default Home;
