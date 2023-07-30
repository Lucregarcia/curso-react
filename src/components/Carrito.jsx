import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, precio, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        
        vaciarCarrito();

    }

    return (
        <div className='conteiner'>
            <h1 className='main-title'>Carrito</h1>
            
            {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }
            { carrito.length > 0 &&  <h2>Total: ${precio()}</h2> }
            
            <button onClick={handleVaciar}>Vaciar</button>
        </div>
    )
}
export default Carrito