import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
//import { useEffect, useState } from 'react'

function App({x}) {

  

  return (
    <>
      <Navbar />
      <ProductListContainer saludo = 'Menu'/>
      <main className='app-main'>
        <h1 className='title'>TTT APP</h1>
        <button className='data'> {x}</button>
      </main>
      <Footer />

    </>
  )
}

export default App
