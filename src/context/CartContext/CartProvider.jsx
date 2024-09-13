import React ,{ createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (productId) => {
        return cart.some((item) => item.product.id === productId);
    };

    const addItems = (product,quantity) => {     
        setCart([...cart, {product, quantity}]);
    };
    
    const removeItem = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalProducts = () => {
        return cart.reduce((total,item) => total + item.quantity, 0 );
    };

    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.product.precio * item.quantity, 0); 
    };

    const buy = () => {
        console.log('Compra realizada');
        clearCart();
    };

    return <CartContext.Provider 
        value = {{
            cart,
            isInCart,
            addItems,
            removeItem,
            clearCart,
            getTotal,
            getTotalProducts,
            buy,
        }}>
            {children}
    </CartContext.Provider>
};

export default CartProvider;