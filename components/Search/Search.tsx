"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./Search.module.scss";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";

const Search = () => {
  const { products, setCurrentProducts } = useAppContext();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pagination = JSON.parse(localStorage.getItem("pagination") || "{}");
      if (debouncedSearchValue) {
        const filteredProducts = products
          .slice(0, pagination.page * pagination.itemsPerPage)
          .filter((product: Product) => product.title.includes(searchValue));
        setCurrentProducts(filteredProducts);
      } else {
        setCurrentProducts(
          products.slice(0, pagination.page * pagination.itemsPerPage)
        );
      }
    }
  }, [debouncedSearchValue, products, searchValue, setCurrentProducts]);

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="Buscar Productos..."
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
