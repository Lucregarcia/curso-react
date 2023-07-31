import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, precio, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        
        vaciarCarrito();

    }

    return (
        <div className='carrito' >
            <h1 className='tituloCarrito'>Carrito</h1>
            
            {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h3 className='prod'>{prod.titulo}</h3>
                    <p className='producto1'>Precio unit: ${prod.precio}</p>
                    <p className='producto1'>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className='producto1'>Cant: {prod.cantidad}</p>
                </div>
            ))
        }
            { carrito.length > 0 &&  <h2 className='prod'>Total: ${precio()}</h2> }
            
            
            <button onClick={handleVaciar} className='vaciar'>Vaciar</button>
        </div>
    )
}
export default Carrito