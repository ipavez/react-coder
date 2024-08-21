import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'
function Navbar() {
  

  return (
    <>
      <header className='app-header'>
        <h1 className='title'>TTT LOGO</h1>
        <nav className='app-nav'>
            <ul className='nav-ul'>
               <li><Link to="/" className='link'>Inicio</Link></li>
                <li><Link to="/category/Bebidas" className='link'>Bebidas</Link></li>
                <li><Link to="/category/Cervezas" className='link'>Cerveza</Link></li>
                <li><Link to="/category/Platos" className='link'>Platos</Link></li>
                <li><Link to="/category/Postres" className='link'>Postres</Link></li>
                <CartWidget/>
            </ul>
            
        </nav>
      </header>
    </>
  )
}

export default Navbar
