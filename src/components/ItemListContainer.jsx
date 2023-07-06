import { useEffect, useState} from "react";
import { pedirDatos } from "../helpers/pedirDatos";



const ItemListContainer = () => {

        const [productos, setProductos] = useState([])
    useEffect(() => {
        pedirDatos()
        .then((res) => {
            setProductos(res);
        })
    }, [])
    
    return (
        <div>ItemListContainer</div>
    )
    }

export default ItemListContainer

    