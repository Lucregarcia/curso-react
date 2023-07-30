import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoDeInicio = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState(carritoDeInicio);

    const agregarCarrito= ( item, cantidad) => {
        
        const itemAgregado = {...item, cantidad};
    
        const nuevoCarrito = [...carrito];
    
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
    

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

    }

    const numeroEnCarrito = () => {
        return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0);
    }

    const precio = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    
    return (
    <CartContext.Provider value={ {carrito, agregarCarrito, numeroEnCarrito, precio, vaciarCarrito} }>
        {children}
    </CartContext.Provider>
    )
}