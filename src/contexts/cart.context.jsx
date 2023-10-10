import { useEffect, useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    CartContext.displayName = 'CartContext';

    const [showCart, setShowCart] = useState(false);
    const [showModalAddToCart, setShowModalAddToCart] = useState(false);

    const [cart, setCart] = useState([]);
    
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);
    const [totalItemsDiscount, setTotalItemsDiscount] = useState(0);
    const [totalItemsShipping, setTotalItemsShipping] = useState(0);
    const [totalItemsTax, setTotalItemsTax] = useState(0);

    useEffect(() => {
        let totalItems = 0;
        let totalItemsPrice = 0;
        let totalItemsDiscount = 0;
        let totalItemsShipping = 0;
        let totalItemsTax = 0;

        cart.forEach((item) => {
            totalItems += item.quantity;
            totalItemsPrice += item.quantity * item.price;
            totalItemsDiscount += item.quantity * item.discount;
            totalItemsShipping += item.quantity * item.shipping;
            totalItemsTax += item.quantity * item.tax;
        });

        setShowCart(false);
        setShowModalAddToCart(false);
        
        setTotalItems(totalItems);
        setTotalItemsPrice(totalItemsPrice);
        setTotalItemsDiscount(totalItemsDiscount);
        setTotalItemsShipping(totalItemsShipping);
        setTotalItemsTax(totalItemsTax);
        setTotal(totalItemsPrice + totalItemsShipping + totalItemsTax - totalItemsDiscount);
    }, [cart]);

    const actions = {
        addToCart: (item) => {
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