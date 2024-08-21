
function ProductCard({ producto }) {
  return (
    
    <div key={producto.id} className="card">
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
}
       
export default ProductCard





