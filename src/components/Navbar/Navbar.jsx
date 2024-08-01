import './Navbar.css'

function Navbar() {
  

  return (
    <>
      <header className='app-header'>
        <h1 className='title'>TTT LOGO</h1>
        <nav className='app-nav'>
            <ul className='nav-ul'>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
