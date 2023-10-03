import { useState, useEffect } from "react";
// import GetDataProducts from '../data/GetDataProducts';
import GetDataCategories from '../data/GetDataCategories';

const useContext = () => {
  const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // GetDataProducts().then(products => {
    //   setProducts(products);
    // });
    GetDataCategories().then(categories => {
      setCategories(categories);
    });
    setCart(localStorage.getItem(cart));

  }, []);

  useEffect(() => {
    setCart(localStorage.getItem(cart));
  }, [cart]);

  return { categories, cart, setCategories, setCart };
};

export default useContext;

// export const CategoriesContext = createContext(null);
// export const ProductsContext = createContext(null);
// export const CartContext = createContext(null);
