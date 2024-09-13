  import React from 'react'
  import { useContext } from 'react'
  import { CartContext } from '../../context/CartContext/CartProvider'
  import CartDetail from '../CartDetail/CartDEtail';
  const Cart = () => {
    const {cart, getTotal, getTotalProducts, removeItem, clearCart, buy} = useContext(CartContext);

    return (
      <div>
        {cart.length === 0 ? (
          <p>Carrito Vacio</p>
        ) : (
           <CartDetail cart = {cart}/>
        )}
      </div>
    );
};
  
export default Cart;