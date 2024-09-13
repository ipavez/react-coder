import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ProductDetailContainer = () => {
  const [product, setProduct] = useState("");
  const {id} = useParams();

  useEffect( () => {
    const db = getFirestore();
    const newDoc = doc(db, "product", id);

    getDoc(newDoc).then((res)=> {
      const data = res.data();
      const newProduct = { id: res.id, ...data};
      setProduct(newProduct);
    })
  },[])

  return (
    <div>
      {product == undefined ? 'cargando' : <ProductDetail product={product}/>}
    </div>
  )
}

export default ProductDetailContainer