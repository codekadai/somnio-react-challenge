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
    <div className={styles.productsContainer}>
      {currentProducts
        .slice(0, pagination.page * pagination.itemsPerPage)
        .map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>

            <p>{product.description}</p>
            <button onClick={() => addToCart(product.id)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      {pagination.page * pagination.itemsPerPage < products.length && (
        <button onClick={() => showMoreProducts()}>Ver más</button>
      )}
    </div>
  );
};

export default Products;
