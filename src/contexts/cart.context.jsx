import { useEffect, useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [showModalAddToCart, setShowModalAddToCart] = useState(false);
    // carrito
    const [cart, setCart] = useState([]);
    // totales
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);
    const [totalItemsDiscount, setTotalItemsDiscount] = useState(0);
    const [totalItemsShipping, setTotalItemsShipping] = useState(0);
    const [totalItemsTax, setTotalItemsTax] = useState(0);
    const tax = 0.23;
    const localCart = localStorage.getItem('cart');

    useEffect(() => {
        if (localCart) {
            setCart(JSON.parse(localCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let totalItems = 0;
        let totalItemsPrice = 0;
        let totalItemsDiscount = 0;
        let totalItemsShipping = 150;
        let totalItemsTax = 0;

        cart.forEach((item) => {
            totalItems += item.quantity;
            totalItemsPrice += item.quantity * item.price;
        });

        totalItemsTax += totalItemsPrice * tax;

        if (totalItemsPrice > 10000) {
            totalItemsShipping = 0;
        }
        if (totalItemsPrice > 5000) {
            totalItemsDiscount = totalItemsPrice * 0.1;
        }
        if (totalItems === 0) {
            totalItemsShipping = 0;
        }

        setShowCart(false);
        setShowModalAddToCart(false);

        setTotalItems(totalItems);
        setTotalItemsPrice(totalItemsPrice);
        setTotalItemsDiscount(totalItemsDiscount);
        setTotalItemsShipping(totalItemsShipping);
        setTotalItemsTax(totalItemsTax);
        setTotal(totalItemsPrice + totalItemsShipping + totalItemsTax - totalItemsDiscount);

        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart]);

    const actions = {
        addToCart: (item) => {
            console.log({ item });
            const index = cart.findIndex((cartItem) => cartItem.id === item.id);
            if (index === -1) {
                setCart([...cart, item]);
            } else {
                const newCart = [...cart];
                newCart[index].quantity += item.quantity;
                setCart(newCart);
            }
        },
        removeFromCart: (id) => {
            const newCart = cart.filter((item) => item.id !== id);
            setCart(newCart);
        },
        updateCart: (id, quantity) => {
            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = [...cart];
            newCart[index].quantity = quantity;
            setCart(newCart);
        },
        clearCart: () => {
            setCart([]);
        },
        showCart: () => {
            setShowCart(true);
        },
        hideCart: () => {
            setShowCart(false);
        },
        showModalAddToCart: () => {
            setShowModalAddToCart(true);
        },
        hideModalAddToCart: () => {
            setShowModalAddToCart(false);
        }
    };
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            showCart,
            showModalAddToCart,
            total,
            totalItems,
            totalItemsPrice,
            totalItemsDiscount,
            totalItemsShipping,
            totalItemsTax,
            actions
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);