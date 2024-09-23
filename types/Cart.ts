import { Product } from "./Product";

export type CartItem = {
  quantity: number;
  product: Product;
  subtotal: number;
};
