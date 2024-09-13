import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
        }
    };
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };

    return(
        <div>
            <button onClick={decrement}>Quitar</button>
            <p>{count}</p>
            <button onClick={increment}>Aumentar</button>
            <button onClick={() => {
                onAdd(count)
                setCount(initial)}
            }>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;