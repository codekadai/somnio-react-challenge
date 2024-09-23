"use client";

import { useAppContext } from "@/context/AppContext";
import styles from "./Search.module.scss";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";

const Search = () => {
  const { currentProducts, setCurrentProducts } = useAppContext();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pagination = JSON.parse(localStorage.getItem("pagination") || "{}");
      if (debouncedSearchValue) {
        const filteredProducts = currentProducts
          .slice(0, pagination.page * pagination.itemsPerPage)
          .filter((product: Product) => product.title.includes(searchValue));
        setCurrentProducts(filteredProducts);
      } else {
        setCurrentProducts(
          currentProducts.slice(0, pagination.page * pagination.itemsPerPage)
        );
      }
    }
  }, [debouncedSearchValue, currentProducts, searchValue, setCurrentProducts]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder="Buscar Productos..."
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <img className={styles.searchIcon} src="/icons/search-gray.svg" alt="" />
    </div>
  );
};

export default Search;
