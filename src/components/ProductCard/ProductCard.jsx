import { Link } from "react-router-dom";
import './ProductCard.css'

function ProductCard({ product}) {
  return (
    
    <Link to={`/product/${product.id}`} key={product.id} className="card">
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>
      <img src={product.img}/>
      

    </Link>
  );
}
       
export default ProductCard





