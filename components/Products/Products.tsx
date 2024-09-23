"use client";

import styles from "./Products.module.scss";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Product } from "@/types/Product";

type ProductsProps = {
  products: Product[];
};

const Products = (props: ProductsProps) => {
  const { products } = props;
  const [pagination, setPagination] = useState({
    itemsPerPage: 3,
    page: 1,
  });
  const {
    currentProducts,
    setCurrentProducts,
    setProducts,
    cart,
    setCart,
    totalCart,
    setTotalCart,
  } = useAppContext();

  const addToCart = (productId: string) => {
    const product = currentProducts.find((item) => item.id === productId);

    if (!product) {
      console.log("Product not found");
      return;
    }

    setTotalCart(totalCart + 1);

    const existingProduct = cart.find((item) => item.product.id === productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.subtotal =
        existingProduct.quantity * Number(existingProduct.product.price);
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          product: product,
          quantity: 1,
          subtotal: Number(product.price),
        },
      ]);
    }
  };

  const showMoreProducts = () => {
    if (typeof window !== "undefined") {
      const pagination = JSON.parse(localStorage.getItem("pagination") || "{}");
      setPagination({
        itemsPerPage: 3,
        page: pagination.page + 1,
      });
      setCurrentProducts(
        products.slice(0, pagination.page * pagination.itemsPerPage)
      );
      localStorage.setItem(
        "pagination",
        JSON.stringify(
          Object.assign(pagination, {
            ...pagination,
            page: pagination.page + 1,
          })
        )
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pagination", JSON.stringify(pagination));
      setCurrentProducts(
        products.slice(0, pagination.page * pagination.itemsPerPage)
      );
      setProducts(products);
      console.log(cart);
    }
  }, [pagination, products, cart, setCurrentProducts, setProducts]);

  return (
    <>
      <div className={styles.productsContainer}>
        {currentProducts
          .slice(0, pagination.page * pagination.itemsPerPage)
          .map((product, index) => (
            <div className={styles.product} key={index}>
              <div className={styles.productMedia}>
                <img
                  className={styles.productImage}
                  src={product.image}
                  alt=""
                />
                <span
                  className={`${styles.productPrice} ${
                    styles[`productColor${(index % 3) + 1}`]
                  }`}
                >
                  USD {product.price}
                </span>
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>
              <button
                className={styles.productAdd}
                onClick={() => addToCart(product.id)}
              >
                <img src="/icons/add.svg" alt="" />
              </button>
            </div>
          ))}
      </div>
      {pagination.page * pagination.itemsPerPage < products.length && (
        <div className={styles.productsSeeMoreContainer}>
          <button
            className={styles.productsSeeMore}
            onClick={() => showMoreProducts()}
          >
            Ver más
          </button>
        </div>
      )}
    </>
  );
};

export default Products;
