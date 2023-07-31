import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc } from  "firebase/firestore"
import { database } from "../firebase/data";


const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
        
    useEffect(() => {
        const docRef = doc(database, "productos", id);
            getDoc(docRef)
            .then((resp) => {
                setItem(
            { ...resp.data(), id: resp.id }
            );
            })
    }, [id])
        
    return (
        <div>
            {item && <ItemDetail item ={item} /> }
        </div>
    )
}

export default ItemDetailConteiner
