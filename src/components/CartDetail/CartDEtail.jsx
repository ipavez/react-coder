import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom';

const CartDetail = ({cart}) => {
    const {getTotal, getTotalProducts, removeItem, clearCart, buy} = useContext(CartContext);


  return (
    <>
        <h2>Carrito de compras</h2>

        {cart.map((item) => (
              <div key={item.product.id}>
                <p>{item.product.nombre}</p>
                <p>Cantidad:{item.quantity}</p>
                <p>Precio:$ {item.product.precio}</p>

                <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
              </div>
            ))}
        <h3>Total productos: {getTotalProducts()}</h3>
        <h3>Total a pagar: ${getTotal()}</h3>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to ={"/checkout"}>
        <button>Comprar</button>
        </Link>
    </>
  );
};

export default CartDetail;
