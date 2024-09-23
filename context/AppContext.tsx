"use client";

import { CartItem } from "@/types/Cart";
import { Product } from "@/types/Product";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface AppContextProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  products: Product[];
  currentProducts: Product[];
  cart: CartItem[];
  totalCart: number;
  setCurrentProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setTotalCart: React.Dispatch<React.SetStateAction<number>>;
}

const defaultContextValue: AppContextType = {
  currentProducts: [],
  cart: [],
  products: [],
  totalCart: 0,
  setCurrentProducts: () => {},
  setProducts: () => {},
  setCart: () => {},
  setTotalCart: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {}, []);

  const contextValue = useMemo(
    () => ({
      currentProducts,
      products,
      cart,
      totalCart,
      setCurrentProducts,
      setProducts,
      setCart,
      setTotalCart,
    }),
    [products, currentProducts, cart, totalCart]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
