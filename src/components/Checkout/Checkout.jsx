import React from 'react'
import { useState, useContext } from 'react';
import {CartContext} from "../../context/CartContext/CartProvider"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
const Checkout = () => {

    const { cart, getTotal, clearCart} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email,setEmail] = useState("");
    //const [emailConfirm,setEmailConfirm] = useState("");
    const [error,setError] = useState("");
    const [orderId,setOrderId] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if( !nombre || !apellido || !email){
            setError("Por favor complete todos los campos.")
            return;
        }

        const db = getFirestore();
        const order = {
            items: cart.map((product) => ({
                id: product.product.id,
                name: product.product.nombre,
                quantity: product.quantity,
                stock: product.product.stock
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            email,
        };
        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "product", productOrder.id);
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;
                
                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity
                });
            })
        ).then(() => {
            addDoc(collection(db,"orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            }).catch((err)=> {
                console.log(err)
                setError("Ocurrio un error.");
            })
        }).catch((err)=> {
            console.log(err)
            setError("Ocurrio un error.");
        })
    };

  return (
    <div>
        <h2>Ingresa tus datos:</h2>
        <div>
            {cart.map((product) => (
                <div key={product.product.id}>
                    <p>
                        {""} {product.product.nombre}
                    </p>
                    <p>{product.product.precio}</p>
                    <p>{`Cantidad: ${product.quantity}`}</p>
                    <hr/>
                </div>
            ))}
        </div>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input id='nombre' type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="apellido">Apellido</label>
                <input id='apellido' type="text" onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <button type="submit"> Generar orden de compra</button>

            {orderId && (
                <p>Gracias por su compra, tu numero de orden es: {`${orderId}`}</p>
            )}

        </form>
    </div>
  )
}

export default Checkout