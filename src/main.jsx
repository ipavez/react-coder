import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <ProductListContainer saludo = 'Menu'/>
    <App x = 'top secret' />
    <Footer />
  </React.StrictMode>,
)
