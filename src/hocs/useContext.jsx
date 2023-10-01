import { useState } from "react";

const useContext = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return { categories, products, cart, setCategories, setProducts, setCart };
};

export default useContext;

// export const CategoriesContext = createContext(null);
// export const ProductsContext = createContext(null);
// export const CartContext = createContext(null);
