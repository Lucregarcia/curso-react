import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const CartWidget=  () => {

    const { numeroEnCarrito } = useContext(CartContext);
    return (
        <div>
            <Link className='menu-link' to="/carrito">
                Carrito
                <span className='numerito'> {numeroEnCarrito ()} </span>
            </Link>
        </div>
    )
}
