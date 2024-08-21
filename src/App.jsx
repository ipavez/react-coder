import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductCard from './components/ProductCard/ProductCard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
//import { useEffect, useState } from 'react'

function App({x}) {

  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListContainer saludo="Menu" />} />

          <Route path="/category/:categoryId" element={<ProductListContainer/>} />

          <Route path="/product" element={<ProductListContainer />} />
        </Routes>

        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
