import { useEffect, useState } from "react"
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from "./ItemDetail"

const ItemDetailConteiner = ( {itemId} ) => {

        const [item, setItem] = useState(null);

        useEffect(() => {
            pedirItemPorId(itemId)
            .then((res) => {
                setItem(res);
            })

        }, [])
        
    return (
        <div>
            {item && <ItemDetail item ={item} /> }
        </div>
    )
}

export default ItemDetailConteiner
