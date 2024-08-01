import './ProductListContainer.css'
import { useEffect, useState } from 'react'

function ProductListContainer({saludo}) {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try{
        const datos = await fetch('/productos.json');
        const data = await datos.json();
        setProductos(data)
  
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  })
  

  return (
    <>
        <h2>{saludo}</h2>
        <div className='card-container'>
            {productos.map((product) => {
                return(
                    <div key= {product.id} className='card'>
                    <h3>{product.nombre}</h3>
                    <p>{product.precio}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default ProductListContainer