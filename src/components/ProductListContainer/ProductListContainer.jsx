import './ProductListContainer.css'
import ProductList from '../ProductList/ProductList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function ProductListContainer({saludo}) {

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams();

  useEffect(() => {
    const fetchData = async() => {
      try{
        const datos = await fetch('/productos.json');
        const data = await datos.json();
        const filter = categoryId ? data.filter((p) => p.categoria === categoryId) : data
        
        setProductos(filter)

      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[categoryId])

  
  return (
    <>
        <h2 className='saludo'>{categoryId ? categoryId : 'Menu'}</h2>
        <div className='container'>
            <ProductList productos = {productos}/>
        </div>
    </>
  )
}

export default ProductListContainer