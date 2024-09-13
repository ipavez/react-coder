import './ProductListContainer.css'
import ProductList from '../ProductList/ProductList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';




function ProductListContainer({saludo}) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const myProducts = categoryId 
    ? query(collection(db,"product"),where("categoria","==",categoryId))
    : collection(db, "product");

    getDocs(myProducts).then((res) => {
      const newProducts = res.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductos(newProducts);
    })
    .catch((err) => console.log('Error', err))
    .finally ( () => setLoading(false));
  },[categoryId]);

  
  return (
    <>
        <h2 className='saludo'>{categoryId ? categoryId : 'Menu'}</h2>
        <div className='container'>
            <ProductList productos = {productos}/>
        </div>
    </>
  )
}

export default ProductListContainer;