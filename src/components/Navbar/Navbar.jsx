import './Navbar.css'

function Navbar() {
  

  return (
    <>
      <header className='app-header'>
        <h1 className='title'>TTT Store</h1>
        <nav className='app-nav'>
            <ul className='nav-ul'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
