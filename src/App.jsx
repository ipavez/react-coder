import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext/ThemeProvider'
import CartProvider from './context/CartContext/CartProvider'
import Cart from './components/Cart/Cart'
import { db } from "./main";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Checkout from './components/Checkout/Checkout'


function App({x}) {

  const [products, setProducts] = useState(null);

  useEffect( () => {
    const db = getFirestore();
    const productCollection = collection(db , "product");

    getDocs(productCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

  },[]);

  return ( 
    <>
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<ProductListContainer saludo="Menu" />}
              />

              <Route
                path="/category/:categoryId"
                element={<ProductListContainer />}
              />

              <Route path="/product/:id" element={<ProductDetailContainer />} />

              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />

            </Routes>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
