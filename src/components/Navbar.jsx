import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Basset Complements</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/">Inicio</Link></li>
            <li><Link className='menu-link' to="/productos">Productos</Link></li>
            <li><Link className='menu-link' to="/productos/collares">Collares</Link></li>
            <li><Link className='menu-link' to="/productos/anillos">Anillos</Link></li>
            <li><Link className='menu-link' to="/productos/aros">Aros</Link></li>
            <li><Link className='menu-link' to="/productos/pulseras">Pulseras</Link></li>
        </ul>
    </nav>
)
}

export default Navbar