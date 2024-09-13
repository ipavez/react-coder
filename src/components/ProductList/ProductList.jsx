import ProductCard from '../ProductCard/ProductCard'


function ProductList({productos}) {


  return (
    <div className='card-container'>
      {productos.map((producto) => 
        <ProductCard key ={producto.id} product = {producto}/>
      )}
    </div>
  );
}
     
export default ProductList