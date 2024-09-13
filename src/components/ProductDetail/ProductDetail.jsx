import { useState , useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import ProductCard from "../ProductCard/ProductCard";

function ProductDetail({product}) {
    const {addItems} = useContext(CartContext);
    const [showItemCount, setShowItemCount] = useState(true);
    const onAdd = (quantity) => {
        addItems(product,quantity);
        setShowItemCount(false);
    };
    
    return(
        <div>
            



            <ProductCard product={product}/>    {/* <----- */}
            <p>Stock: {product.stock}</p>
            <ItemCount initial ={1} stock={product.stock} onAdd={onAdd} />
            <Link to="/cart">Terminar mi compra</Link>
        </div> 
    );
};

export default ProductDetail;